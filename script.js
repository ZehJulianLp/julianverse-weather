const searchForm = document.querySelector("#search-form");
const locationInput = document.querySelector("#location-input");
const locationButton = document.querySelector("#location-button");
const statusElement = document.querySelector("#status");
const weatherElement = document.querySelector("#weather");
const placeElement = document.querySelector("#place");
const temperatureElement = document.querySelector("#temperature");
const summaryElement = document.querySelector("#summary");
const windElement = document.querySelector("#wind");
const humidityElement = document.querySelector("#humidity");
const updatedElement = document.querySelector("#updated");
const forecastElement = document.querySelector("#forecast");

const weatherCodes = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Drizzle",
    55: "Dense drizzle",
    61: "Light rain",
    63: "Rain",
    65: "Heavy rain",
    71: "Light snow",
    73: "Snow",
    75: "Heavy snow",
    80: "Light showers",
    81: "Showers",
    82: "Heavy showers",
    95: "Thunderstorm",
    96: "Thunderstorm with hail",
    99: "Severe thunderstorm with hail"
};

const setLoading = (isLoading) => {
    searchForm.querySelectorAll("button, input").forEach((element) => {
        element.disabled = isLoading;
    });
};

const setStatus = (message, isError = false) => {
    statusElement.textContent = message;
    statusElement.classList.toggle("error", isError);
};

const formatDate = (value, options) => new Intl.DateTimeFormat("en", options).format(new Date(value));

const getWeatherLabel = (code) => weatherCodes[code] || "Mixed weather";

async function fetchJson(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("The weather service is currently unavailable.");
    }

    return response.json();
}

async function findLocation(query) {
    const url = new URL("https://geocoding-api.open-meteo.com/v1/search");
    url.searchParams.set("name", query);
    url.searchParams.set("count", "1");
    url.searchParams.set("language", "en");
    url.searchParams.set("format", "json");

    const data = await fetchJson(url);

    if (!data.results || data.results.length === 0) {
        throw new Error("No matching location found.");
    }

    const [result] = data.results;

    return {
        name: [result.name, result.admin1, result.country].filter(Boolean).join(", "),
        latitude: result.latitude,
        longitude: result.longitude,
        timezone: result.timezone || "auto"
    };
}

async function fetchWeather(location) {
    const url = new URL("https://api.open-meteo.com/v1/forecast");
    url.searchParams.set("latitude", location.latitude);
    url.searchParams.set("longitude", location.longitude);
    url.searchParams.set("timezone", location.timezone);
    url.searchParams.set("current", "temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m");
    url.searchParams.set("daily", "weather_code,temperature_2m_max,temperature_2m_min");
    url.searchParams.set("forecast_days", "5");

    return fetchJson(url);
}

function renderWeather(location, data) {
    const current = data.current;
    const daily = data.daily;

    placeElement.textContent = location.name;
    temperatureElement.innerHTML = `${Math.round(current.temperature_2m)}&deg;`;
    summaryElement.textContent = getWeatherLabel(current.weather_code);
    windElement.textContent = `${Math.round(current.wind_speed_10m)} km/h`;
    humidityElement.textContent = `${current.relative_humidity_2m}%`;
    updatedElement.textContent = formatDate(current.time, {
        hour: "2-digit",
        minute: "2-digit"
    });

    forecastElement.innerHTML = daily.time.map((day, index) => `
        <article class="panel day">
            <h2>${formatDate(day, { weekday: "short" })}</h2>
            <p>${getWeatherLabel(daily.weather_code[index])}</p>
            <strong>${Math.round(daily.temperature_2m_max[index])}&deg; / ${Math.round(daily.temperature_2m_min[index])}&deg;</strong>
            <p>${formatDate(day, { month: "short", day: "numeric" })}</p>
        </article>
    `).join("");

    weatherElement.classList.remove("hidden");
}

async function loadLocation(location) {
    setLoading(true);
    setStatus(`Loading weather for ${location.name}...`);

    try {
        const data = await fetchWeather(location);
        renderWeather(location, data);
        setStatus("Forecast loaded.");
    } catch (error) {
        setStatus(error.message, true);
    } finally {
        setLoading(false);
    }
}

async function loadSearch(query) {
    setLoading(true);
    setStatus(`Searching for ${query}...`);

    try {
        const location = await findLocation(query);
        await loadLocation(location);
    } catch (error) {
        setStatus(error.message, true);
        setLoading(false);
    }
}

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = locationInput.value.trim();

    if (!query) {
        setStatus("Enter a location first.", true);
        return;
    }

    loadSearch(query);
});

locationButton.addEventListener("click", () => {
    if (!navigator.geolocation) {
        setStatus("Geolocation is not supported by this browser.", true);
        return;
    }

    setLoading(true);
    setStatus("Waiting for location permission...");

    navigator.geolocation.getCurrentPosition(
        (position) => {
            loadLocation({
                name: "Your location",
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                timezone: "auto"
            });
        },
        () => {
            setLoading(false);
            setStatus("Location permission was denied or unavailable.", true);
        },
        { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 }
    );
});

loadSearch(locationInput.value);
