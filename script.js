const searchForm = document.querySelector("#search-form");
const locationInput = document.querySelector("#location-input");
const locationButton = document.querySelector("#location-button");
const saveLocationButton = document.querySelector("#save-location-button");
const clearSavedButton = document.querySelector("#clear-saved-button");
const savedLocationsElement = document.querySelector("#saved-locations");
const savedEmptyElement = document.querySelector("#saved-empty");
const sidebarToggle = document.querySelector("#sidebar-toggle");
const sidebarClose = document.querySelector("#sidebar-close");
const sidebarBackdrop = document.querySelector("#sidebar-backdrop");
const languageSelect = document.querySelector("#language-select");
const themeSelect = document.querySelector("#theme-select");
const layoutSelect = document.querySelector("#layout-select");
const unitsSelect = document.querySelector("#units-select");
const activitySelect = document.querySelector("#activity-select");
const rainNotificationsToggle = document.querySelector("#rain-notifications-toggle");
const installBanner = document.querySelector("#install-banner");
const installMessage = document.querySelector("#install-message");
const installButton = document.querySelector("#install-button");
const dismissInstallButton = document.querySelector("#dismiss-install-button");
const statusElement = document.querySelector("#status");
const weatherElement = document.querySelector("#weather");
const activePlaceElement = document.querySelector("#active-place");
const glanceListElement = document.querySelector("#glance-list");
const alertsListElement = document.querySelector("#alerts-list");
const placeElement = document.querySelector("#place");
const temperatureElement = document.querySelector("#temperature");
const summaryElement = document.querySelector("#summary");
const currentIconElement = document.querySelector("#current-icon");
const insightElement = document.querySelector("#insight");
const windElement = document.querySelector("#wind");
const windDirectionElement = document.querySelector("#wind-direction");
const humidityElement = document.querySelector("#humidity");
const apparentElement = document.querySelector("#apparent");
const pressureElement = document.querySelector("#pressure");
const cloudsElement = document.querySelector("#clouds");
const visibilityElement = document.querySelector("#visibility");
const sunriseElement = document.querySelector("#sunrise");
const sunsetElement = document.querySelector("#sunset");
const updatedElement = document.querySelector("#updated");
const hourlyForecastElement = document.querySelector("#hourly-forecast");
const hourlyPrevButton = document.querySelector("#hourly-prev");
const hourlyNextButton = document.querySelector("#hourly-next");
const temperatureChartElement = document.querySelector("#temperature-chart");
const precipitationChartElement = document.querySelector("#precipitation-chart");
const windChartElement = document.querySelector("#wind-chart");
const uvChartElement = document.querySelector("#uv-chart");
const chartToggleElements = document.querySelectorAll(".chart-toggle");
const moduleToggleElements = document.querySelectorAll(".module-toggle");
const forecastElement = document.querySelector("#forecast");
const nowcastSummaryElement = document.querySelector("#nowcast-summary");
const rainTimelineElement = document.querySelector("#rain-timeline");
const rainMapElement = document.querySelector("#rain-map");
const rainMapControlsElement = document.querySelector("#rain-map-controls");
const rainMapCaptionElement = document.querySelector("#rain-map-caption");
const recommendationSummaryElement = document.querySelector("#recommendation-summary");
const recommendationChipsElement = document.querySelector("#recommendation-chips");
const confidenceContentElement = document.querySelector("#confidence-content");
const sunContentElement = document.querySelector("#sun-content");
const stormContentElement = document.querySelector("#storm-content");
const airContentElement = document.querySelector("#air-content");
const historyContentElement = document.querySelector("#history-content");

// Keep the visual and assistive-technology reading order aligned with the dashboard hierarchy.
const currentPanelElement = document.querySelector(".current");
const overviewGridElement = document.querySelector(".overview-grid");
const intelligenceGridElement = document.querySelector(".intelligence-grid");
weatherElement.prepend(currentPanelElement);
weatherElement.insertBefore(overviewGridElement, intelligenceGridElement);

const weatherCodeLabels = {
    en: {
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
    },
    de: {
        0: "Klarer Himmel",
        1: "Überwiegend klar",
        2: "Teilweise bewölkt",
        3: "Bedeckt",
        45: "Nebel",
        48: "Reifnebel",
        51: "Leichter Nieselregen",
        53: "Nieselregen",
        55: "Starker Nieselregen",
        61: "Leichter Regen",
        63: "Regen",
        65: "Starker Regen",
        71: "Leichter Schnee",
        73: "Schnee",
        75: "Starker Schnee",
        80: "Leichte Schauer",
        81: "Schauer",
        82: "Starke Schauer",
        95: "Gewitter",
        96: "Gewitter mit Hagel",
        99: "Starkes Gewitter mit Hagel"
    }
};

const translations = {
    en: {
        skipLink: "Skip to weather search",
        menuButton: "Places",
        closeButton: "Close",
        placesTitle: "Places",
        eyebrow: "Open-Meteo forecast",
        heroText: "Search a city or use your current location to get a simple weather snapshot without tracking or API keys.",
        locationLabel: "Location",
        locationPlaceholder: "Search city, e.g. Berlin",
        searchButton: "Search",
        locationButton: "Use my location",
        saveLocationButton: "Save place",
        savedTitle: "Saved places",
        clearSavedButton: "Clear",
        savedEmpty: "No saved places yet.",
        settingsTitle: "Settings",
        languageLabel: "Language",
        themeLabel: "Theme",
        themeLight: "Light",
        themeDark: "Dark",
        layoutLabel: "Layout",
        layoutExpanded: "Expanded",
        layoutCompact: "Compact",
        unitsLabel: "Units",
        unitsMetric: "Metric",
        unitsImperial: "Imperial",
        ready: "Ready.",
        windLabel: "Wind",
        directionLabel: "Direction",
        humidityLabel: "Humidity",
        feelsLikeLabel: "Feels like",
        pressureLabel: "Pressure",
        cloudsLabel: "Clouds",
        visibilityLabel: "Visibility",
        sunriseLabel: "Sunrise",
        sunsetLabel: "Sunset",
        updatedLabel: "Updated",
        hourlyTitle: "Next hours",
        chartsTitle: "Weather trends",
        temperatureChartTitle: "Temperature",
        precipitationChartTitle: "Rain chance",
        windChartTitle: "Wind",
        uvChartTitle: "UV",
        dailyTitle: "Next 7 days",
        glanceTitle: "Today at a glance",
        alertsTitle: "Weather alerts",
        highLabel: "High",
        lowLabel: "Low",
        sunsetShortLabel: "Sunset",
        noAlerts: "No significant alerts for the selected forecast.",
        heatAlert: "Heat risk: high temperature expected.",
        frostAlert: "Frost risk: temperatures near or below freezing.",
        stormAlert: "Storm risk: thunderstorms in the forecast.",
        heavyRainAlert: "Heavy rain risk: high precipitation expected.",
        windAlert: "Wind risk: strong gusty conditions possible.",
        staleData: "Showing saved data from {time}. Updating when possible.",
        installReady: "Julianverse Weather can be installed.",
        updateReady: "A new app version is ready.",
        installButton: "Install",
        updateButton: "Update",
        dismissButton: "Dismiss",
        rainLabel: "Rain",
        amountLabel: "Amount",
        dirLabel: "Dir",
        uvLabel: "UV",
        noMatch: "No matching location found.",
        serviceUnavailable: "The weather service is currently unavailable.",
        loadingWeather: "Loading weather for {name}...",
        searching: "Searching for {query}...",
        forecastLoaded: "Forecast loaded.",
        enterLocation: "Enter a location first.",
        geolocationUnsupported: "Geolocation is not supported by this browser.",
        waitingPermission: "Waiting for location permission...",
        locationDenied: "Location permission was denied or unavailable.",
        offline: "You are offline. Previously viewed app files may still be available.",
        online: "Back online.",
        serviceWorkerError: "Weather works online, but offline install support is unavailable.",
        cachedForecast: "Showing saved forecast while updating...",
        savedLocation: "Saved {name}.",
        alreadySaved: "{name} is already saved.",
        noWeatherToSave: "Load a place before saving it.",
        clearedSaved: "Saved places cleared.",
        moveUp: "Move up",
        moveDown: "Move down",
        deletePlace: "Delete",
        pinPlace: "Pin as default",
        unpinPlace: "Default place",
        pinnedPlace: "{name} is now the default place.",
        deletedPlace: "Deleted {name}.",
        rainRisk: "Rain risk rises around {time}.",
        highUv: "High UV expected today, peaking near {uv}.",
        windy: "Wind picks up {day}.",
        steady: "Conditions look steady in the near forecast.",
        yourLocation: "Your location",
        mixedWeather: "Mixed weather",
        feelsPrefix: "Feels"
        ,activityLabel: "Activity",
        activityGeneral: "Everyday",
        activityWalking: "Walking",
        activityCycling: "Cycling",
        activityRunning: "Running",
        activityGarden: "Garden",
        activityPhoto: "Photography",
        rainNotificationsLabel: "Rain notifications",
        rainNotificationsHint: "While the app is open",
        nowcastKicker: "Next 3 hours",
        nowcastTitle: "Rain nowcast",
        modelForecast: "Model forecast",
        nowcastNote: "15-minute forecast; not measured radar data.",
        rainMapKicker: "Around your location",
        rainMapTitle: "Local rain map",
        rainMapNote: "Forecast grid, not radar measurements.",
        dryLabel: "Dry",
        heavyLabel: "Heavy",
        dailyBriefingKicker: "Personal briefing",
        dailyBriefingTitle: "Your best weather window",
        confidenceKicker: "Forecast signal",
        confidenceTitle: "Confidence & changes",
        sunKicker: "Daylight",
        sunTitle: "Sun window",
        stormKicker: "Convection",
        stormTitle: "Thunderstorm potential",
        airKicker: "Air & pollen",
        airTitle: "Outside conditions",
        historyKicker: "A year ago",
        historyTitle: "Historical comparison",
        dataBy: "Weather data by",
        rainStarts: "Rain likely in about {minutes} min, lasting around {duration}.",
        rainNow: "Rain is expected now for around {duration}.",
        noRainSoon: "No meaningful rain expected in the next three hours.",
        rainTotal: "{amount} total",
        mapAt: "Forecast for {time}",
        bestWindow: "Best window for {activity}: {start}–{end}.",
        noGoodWindow: "No ideal window today; the least unsettled period starts near {time}.",
        conditionsGood: "Good conditions",
        takeJacket: "Take a jacket",
        sunProtection: "Sun protection",
        rainProtection: "Rain protection",
        breezy: "Breezy",
        confidenceHigh: "High confidence",
        confidenceMedium: "Medium confidence",
        confidenceLow: "Low confidence",
        confidenceDetail: "Based on rain probability and short-term stability.",
        forecastWarmer: "Forecast is {value} warmer than the last update.",
        forecastCooler: "Forecast is {value} cooler than the last update.",
        forecastWetter: "Rain estimate increased by {value}.",
        forecastStable: "No meaningful change since the last update.",
        firstLoadChange: "Changes will appear after the next forecast update.",
        sunWindow: "Clearest period: {start}–{end}.",
        sunUnavailable: "No distinct sunny window today.",
        stormLow: "Low thunderstorm potential.",
        stormRaised: "Elevated potential around {time} (CAPE {cape}).",
        stormHigh: "High thunderstorm potential around {time} (CAPE {cape}).",
        modelWarning: "Model guidance, not an official warning.",
        airGood: "Air quality is good",
        airFair: "Air quality is fair",
        airPoor: "Air quality is poor",
        pollenLow: "Pollen low",
        pollenMedium: "Pollen moderate",
        pollenHigh: "Pollen high",
        pollenUnavailable: "Pollen unavailable",
        airUnavailable: "Air-quality data unavailable.",
        historyWarmer: "Today is forecast {value} warmer than this date last year.",
        historyCooler: "Today is forecast {value} cooler than this date last year.",
        historySimilar: "Temperature is similar to this date last year.",
        historyRain: "Last year: {temperature}, {rain} precipitation.",
        historyUnavailable: "Historical comparison unavailable.",
        notificationsOn: "Rain notifications enabled while the app is open.",
        notificationsDenied: "Notification permission was not granted.",
        rainNotificationTitle: "Rain approaching {name}",
        rainNotificationBody: "Rain is expected in about {minutes} minutes.",
        everyday: "everyday plans",
        walking: "a walk",
        cycling: "cycling",
        running: "a run",
        garden: "gardening",
        photo: "photography"
        ,modulesTitle: "Dashboard content",
        moduleCurrent: "Current weather",
        moduleOverview: "Today's overview",
        moduleRecommendation: "Recommendations",
        moduleSignals: "Weather signals"
    },
    de: {
        skipLink: "Zur Wettersuche springen",
        menuButton: "Orte",
        closeButton: "Schließen",
        placesTitle: "Orte",
        eyebrow: "Open-Meteo Vorhersage",
        heroText: "Suche eine Stadt oder nutze deinen Standort für einen einfachen Wetterüberblick ohne Tracking oder API-Keys.",
        locationLabel: "Ort",
        locationPlaceholder: "Stadt suchen, z. B. Berlin",
        searchButton: "Suchen",
        locationButton: "Mein Standort",
        saveLocationButton: "Ort speichern",
        savedTitle: "Gespeicherte Orte",
        clearSavedButton: "Leeren",
        savedEmpty: "Noch keine Orte gespeichert.",
        settingsTitle: "Einstellungen",
        languageLabel: "Sprache",
        themeLabel: "Design",
        themeLight: "Hell",
        themeDark: "Dunkel",
        layoutLabel: "Layout",
        layoutExpanded: "Großzügig",
        layoutCompact: "Kompakt",
        unitsLabel: "Einheiten",
        unitsMetric: "Metrisch",
        unitsImperial: "Imperial",
        ready: "Bereit.",
        windLabel: "Wind",
        directionLabel: "Richtung",
        humidityLabel: "Luftfeuchte",
        feelsLikeLabel: "Gefühlt",
        pressureLabel: "Luftdruck",
        cloudsLabel: "Wolken",
        visibilityLabel: "Sichtweite",
        sunriseLabel: "Sonnenaufgang",
        sunsetLabel: "Sonnenuntergang",
        updatedLabel: "Aktualisiert",
        hourlyTitle: "Nächste Stunden",
        chartsTitle: "Wettertrend",
        temperatureChartTitle: "Temperatur",
        precipitationChartTitle: "Regenrisiko",
        windChartTitle: "Wind",
        uvChartTitle: "UV",
        dailyTitle: "Nächste 7 Tage",
        glanceTitle: "Heute auf einen Blick",
        alertsTitle: "Wetterhinweise",
        highLabel: "Max",
        lowLabel: "Min",
        sunsetShortLabel: "Abend",
        noAlerts: "Keine auffälligen Hinweise für die ausgewählte Vorhersage.",
        heatAlert: "Hitzerisiko: hohe Temperatur erwartet.",
        frostAlert: "Frostrisiko: Temperaturen nahe oder unter null.",
        stormAlert: "Gewitterrisiko in der Vorhersage.",
        heavyRainAlert: "Starkregenrisiko: hohe Niederschlagsmenge erwartet.",
        windAlert: "Windrisiko: kräftiger Wind möglich.",
        staleData: "Gespeicherte Daten von {time} werden angezeigt. Aktualisierung läuft, wenn möglich.",
        installReady: "Julianverse Weather kann installiert werden.",
        updateReady: "Eine neue App-Version ist bereit.",
        installButton: "Installieren",
        updateButton: "Aktualisieren",
        dismissButton: "Ausblenden",
        rainLabel: "Regen",
        amountLabel: "Menge",
        dirLabel: "Richt.",
        uvLabel: "UV",
        noMatch: "Kein passender Ort gefunden.",
        serviceUnavailable: "Der Wetterdienst ist aktuell nicht erreichbar.",
        loadingWeather: "Lade Wetter für {name}...",
        searching: "Suche nach {query}...",
        forecastLoaded: "Vorhersage geladen.",
        enterLocation: "Gib zuerst einen Ort ein.",
        geolocationUnsupported: "Geolokalisierung wird von diesem Browser nicht unterstützt.",
        waitingPermission: "Warte auf Standortfreigabe...",
        locationDenied: "Standortfreigabe wurde verweigert oder ist nicht verfügbar.",
        offline: "Du bist offline. Bereits geladene App-Dateien können verfügbar sein.",
        online: "Wieder online.",
        serviceWorkerError: "Wetter funktioniert online, aber Offline-Installation ist nicht verfügbar.",
        cachedForecast: "Gespeicherte Vorhersage wird angezeigt und aktualisiert...",
        savedLocation: "{name} gespeichert.",
        alreadySaved: "{name} ist bereits gespeichert.",
        noWeatherToSave: "Lade einen Ort, bevor du ihn speicherst.",
        clearedSaved: "Gespeicherte Orte geleert.",
        moveUp: "Nach oben",
        moveDown: "Nach unten",
        deletePlace: "Löschen",
        pinPlace: "Als Standard setzen",
        unpinPlace: "Standardort",
        pinnedPlace: "{name} ist jetzt der Standardort.",
        deletedPlace: "{name} gelöscht.",
        rainRisk: "Regenrisiko steigt gegen {time}.",
        highUv: "Hoher UV-Wert erwartet, Spitze etwa {uv}.",
        windy: "Der Wind nimmt am {day} zu.",
        steady: "Die Lage bleibt in der nahen Vorhersage stabil.",
        yourLocation: "Dein Standort",
        mixedWeather: "Wechselhaft",
        feelsPrefix: "Gefühlt"
        ,activityLabel: "Aktivität",
        activityGeneral: "Alltag",
        activityWalking: "Spaziergang",
        activityCycling: "Fahrrad",
        activityRunning: "Laufen",
        activityGarden: "Garten",
        activityPhoto: "Fotografie",
        rainNotificationsLabel: "Regenhinweise",
        rainNotificationsHint: "Solange die App geöffnet ist",
        nowcastKicker: "Nächste 3 Stunden",
        nowcastTitle: "Regen-Nowcast",
        modelForecast: "Modellprognose",
        nowcastNote: "15-Minuten-Prognose; keine gemessenen Radardaten.",
        rainMapKicker: "Rund um deinen Ort",
        rainMapTitle: "Lokale Regenkarte",
        rainMapNote: "Prognoseraster, keine Radarmessung.",
        dryLabel: "Trocken",
        heavyLabel: "Stark",
        dailyBriefingKicker: "Persönliches Briefing",
        dailyBriefingTitle: "Dein bestes Wetterfenster",
        confidenceKicker: "Prognosesignal",
        confidenceTitle: "Sicherheit & Änderungen",
        sunKicker: "Tageslicht",
        sunTitle: "Sonnenfenster",
        stormKicker: "Konvektion",
        stormTitle: "Gewitterpotenzial",
        airKicker: "Luft & Pollen",
        airTitle: "Bedingungen draußen",
        historyKicker: "Vor einem Jahr",
        historyTitle: "Historischer Vergleich",
        dataBy: "Wetterdaten von",
        rainStarts: "Regen wahrscheinlich in etwa {minutes} Min., für ungefähr {duration}.",
        rainNow: "Jetzt wird für ungefähr {duration} Regen erwartet.",
        noRainSoon: "In den nächsten drei Stunden wird kein nennenswerter Regen erwartet.",
        rainTotal: "insgesamt {amount}",
        mapAt: "Prognose für {time}",
        bestWindow: "Bestes Fenster für {activity}: {start}–{end} Uhr.",
        noGoodWindow: "Heute gibt es kein ideales Fenster; die ruhigste Phase beginnt gegen {time} Uhr.",
        conditionsGood: "Gute Bedingungen",
        takeJacket: "Jacke mitnehmen",
        sunProtection: "Sonnenschutz",
        rainProtection: "Regenschutz",
        breezy: "Windig",
        confidenceHigh: "Hohe Sicherheit",
        confidenceMedium: "Mittlere Sicherheit",
        confidenceLow: "Geringe Sicherheit",
        confidenceDetail: "Abgeleitet aus Regenwahrscheinlichkeit und kurzfristiger Stabilität.",
        forecastWarmer: "Prognose ist {value} wärmer als beim letzten Abruf.",
        forecastCooler: "Prognose ist {value} kälter als beim letzten Abruf.",
        forecastWetter: "Regenerwartung ist um {value} gestiegen.",
        forecastStable: "Keine nennenswerte Änderung seit dem letzten Abruf.",
        firstLoadChange: "Änderungen erscheinen nach dem nächsten Vorhersageabruf.",
        sunWindow: "Klarste Phase: {start}–{end} Uhr.",
        sunUnavailable: "Heute gibt es kein klares Sonnenfenster.",
        stormLow: "Geringes Gewitterpotenzial.",
        stormRaised: "Erhöhtes Potenzial gegen {time} Uhr (CAPE {cape}).",
        stormHigh: "Hohes Gewitterpotenzial gegen {time} Uhr (CAPE {cape}).",
        modelWarning: "Modellhinweis, keine amtliche Warnung.",
        airGood: "Luftqualität ist gut",
        airFair: "Luftqualität ist mäßig",
        airPoor: "Luftqualität ist schlecht",
        pollenLow: "Pollen niedrig",
        pollenMedium: "Pollen mäßig",
        pollenHigh: "Pollen hoch",
        pollenUnavailable: "Keine Pollendaten",
        airUnavailable: "Luftqualitätsdaten nicht verfügbar.",
        historyWarmer: "Heute werden {value} mehr als an diesem Datum im Vorjahr erwartet.",
        historyCooler: "Heute werden {value} weniger als an diesem Datum im Vorjahr erwartet.",
        historySimilar: "Die Temperatur ähnelt diesem Datum im Vorjahr.",
        historyRain: "Vorjahr: {temperature}, {rain} Niederschlag.",
        historyUnavailable: "Historischer Vergleich nicht verfügbar.",
        notificationsOn: "Regenhinweise sind aktiv, solange die App geöffnet ist.",
        notificationsDenied: "Benachrichtigungen wurden nicht freigegeben.",
        rainNotificationTitle: "Regen nähert sich {name}",
        rainNotificationBody: "In ungefähr {minutes} Minuten wird Regen erwartet.",
        everyday: "Alltagspläne",
        walking: "einen Spaziergang",
        cycling: "eine Fahrradtour",
        running: "eine Laufrunde",
        garden: "Gartenarbeit",
        photo: "Fotografie"
        ,modulesTitle: "Dashboard-Inhalte",
        moduleCurrent: "Aktuelles Wetter",
        moduleOverview: "Tagesüberblick",
        moduleRecommendation: "Empfehlungen",
        moduleSignals: "Wettersignale"
    }
};

const isServiceWorkerAvailable = "serviceWorker" in navigator && window.isSecureContext;
const hourlyForecastCount = 24;
const weatherCacheKey = "julianverse-weather:last-weather";
const lastLocationKey = "julianverse-weather:last-location";
const settingsKey = "julianverse-weather:settings";
const savedLocationsKey = "julianverse-weather:saved-locations";
const pinnedLocationKey = "julianverse-weather:pinned-location";
const installDismissedKey = "julianverse-weather:install-dismissed";
const notificationKey = "julianverse-weather:rain-notifications";
const persistentDatabaseName = "julianverse-weather";
const persistentStoreName = "app-state";
const persistentKeys = [weatherCacheKey, lastLocationKey, settingsKey, savedLocationsKey, pinnedLocationKey];
const defaultLocations = {
    berlin: {
        name: "Berlin, Germany",
        latitude: 52.52,
        longitude: 13.41,
        timezone: "Europe/Berlin"
    }
};
let currentSettings = readSettings();
let savedLocations = readSavedLocations();
let currentPinnedLocation = readPinnedLocation();
let currentLocation = null;
let currentWeatherData = null;
let deferredInstallPrompt = null;
let startupUrlLocation = null;
let shouldSaveUrlLocation = false;
let shouldPinUrlLocation = false;
let persistentDatabasePromise = null;
let startupUsedFallbackLocation = false;
let previousWeatherData = null;
let activeRainMapFrame = 0;
let rainNotificationTimer = null;

const wait = (milliseconds) => new Promise((resolve) => {
    window.setTimeout(resolve, milliseconds);
});

const setLoading = (isLoading) => {
    searchForm.querySelectorAll("button, input").forEach((element) => {
        element.disabled = isLoading;
    });
};

const setStatus = (message, isError = false) => {
    statusElement.textContent = message;
    statusElement.classList.toggle("error", isError);
};

const setText = (element, value) => {
    if (element) {
        element.textContent = value;
    }
};

const setHtml = (element, value) => {
    if (element) {
        element.innerHTML = value;
    }
};

const t = (key, replacements = {}) => {
    const template = translations[currentSettings.language]?.[key] || translations.en[key] || key;

    return Object.entries(replacements).reduce(
        (message, [name, value]) => message.replace(`{${name}}`, value),
        template
    );
};

const formatDate = (value, options) => {
    const locale = currentSettings.language === "de" ? "de-DE" : "en";

    return new Intl.DateTimeFormat(locale, options).format(new Date(value));
};

const getWeatherLabel = (code) => weatherCodeLabels[currentSettings.language]?.[code] || weatherCodeLabels.en[code] || t("mixedWeather");
const hasNumber = (value) => value !== null && value !== "" && Number.isFinite(Number(value));
const convertTemperature = (value) => currentSettings.units === "imperial" ? value * 9 / 5 + 32 : value;
const convertWind = (value) => currentSettings.units === "imperial" ? value / 1.609344 : value;
const convertPressure = (value) => currentSettings.units === "imperial" ? value * 0.02953 : value;
const convertVisibility = (value) => currentSettings.units === "imperial" ? value / 1609.344 : value / 1000;
const convertPrecipitation = (value) => currentSettings.units === "imperial" ? value / 25.4 : value;
const temperatureUnit = () => currentSettings.units === "imperial" ? "°F" : "°C";
const windUnit = () => currentSettings.units === "imperial" ? "mph" : "km/h";
const precipitationUnit = () => currentSettings.units === "imperial" ? "in" : "mm";
const pressureUnit = () => currentSettings.units === "imperial" ? "inHg" : "hPa";
const visibilityUnit = () => currentSettings.units === "imperial" ? "mi" : "km";
const formatTemperature = (value) => hasNumber(value) ? `${Math.round(convertTemperature(value))}${temperatureUnit()}` : "-";
const formatWind = (value) => hasNumber(value) ? `${Math.round(convertWind(value))}\u00a0${windUnit()}` : "-";
const formatPercent = (value) => hasNumber(value) ? `${Math.round(value)}%` : "-";
const formatPrecipitation = (value) => hasNumber(value) ? `${convertPrecipitation(value).toFixed(currentSettings.units === "imperial" ? 2 : value >= 10 ? 0 : 1)}\u00a0${precipitationUnit()}` : "-";
const formatPressure = (value) => hasNumber(value) ? `${convertPressure(value).toFixed(currentSettings.units === "imperial" ? 2 : 0)}\u00a0${pressureUnit()}` : "-";
const formatVisibility = (value) => hasNumber(value) ? `${convertVisibility(value).toFixed(value >= 10000 ? 0 : 1)}\u00a0${visibilityUnit()}` : "-";

function formatWindDirection(degrees) {
    if (!hasNumber(degrees)) {
        return "-";
    }

    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(degrees / 45) % directions.length;

    return directions[index];
}

function getDefaultLocation(query) {
    return defaultLocations[query.trim().toLowerCase()] || null;
}

function getUrlOptions() {
    const params = new URLSearchParams(window.location.search);
    const nextSettings = {};
    const chartNames = ["temperature", "precipitation", "wind", "uv"];
    const chartAliases = { rain: "precipitation" };
    const latitude = params.has("lat") ? Number(params.get("lat")) : null;
    const longitude = params.has("lon") ? Number(params.get("lon")) : null;

    if (["en", "de"].includes(params.get("lang"))) {
        nextSettings.language = params.get("lang");
    }

    if (["light", "dark"].includes(params.get("theme"))) {
        nextSettings.theme = params.get("theme");
    }

    if (["expanded", "compact"].includes(params.get("layout"))) {
        nextSettings.layout = params.get("layout");
    }

    if (["metric", "imperial"].includes(params.get("units"))) {
        nextSettings.units = params.get("units");
    }

    if (params.has("charts")) {
        const selectedCharts = params.get("charts")
            .split(",")
            .map((chart) => chartAliases[chart.trim()] || chart.trim())
            .filter((chart) => chartNames.includes(chart));

        nextSettings.charts = Object.fromEntries(
            chartNames.map((chart) => [chart, selectedCharts.includes(chart)])
        );
    }

    return {
        settings: nextSettings,
        place: params.get("place"),
        name: params.get("name"),
        latitude,
        longitude,
        save: params.get("save") === "1",
        pin: params.get("pin") === "1",
        install: params.get("install")
    };
}

function applyUrlOptions() {
    const options = getUrlOptions();

    if (Object.keys(options.settings).length > 0) {
        currentSettings = { ...currentSettings, ...options.settings };
        saveSettings();
    }

    if (options.install === "0") {
        writeJson(installDismissedKey, true);
    }

    if (hasNumber(options.latitude) && hasNumber(options.longitude)) {
        startupUrlLocation = {
            name: options.name || `${options.latitude.toFixed(4)}, ${options.longitude.toFixed(4)}`,
            latitude: options.latitude,
            longitude: options.longitude,
            timezone: "auto"
        };
    } else if (options.place) {
        startupUrlLocation = options.place;
    }

    shouldSaveUrlLocation = options.save;
    shouldPinUrlLocation = options.pin;
}

function updateUrlState() {
    if (!window.location.protocol.startsWith("http")) {
        return;
    }

    const params = new URLSearchParams();
    const enabledCharts = Object.entries(currentSettings.charts || {})
        .filter(([, enabled]) => enabled !== false)
        .map(([chart]) => chart === "precipitation" ? "rain" : chart);

    params.set("lang", currentSettings.language);
    params.set("theme", currentSettings.theme);
    params.set("layout", currentSettings.layout);
    params.set("units", currentSettings.units);
    params.set("charts", enabledCharts.join(","));

    if (currentLocation) {
        params.set("lat", currentLocation.latitude);
        params.set("lon", currentLocation.longitude);
        params.set("name", currentLocation.name);
    }

    const nextUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", nextUrl);
}

function readJson(key, fallback) {
    try {
        return JSON.parse(localStorage.getItem(key)) || fallback;
    } catch {
        return fallback;
    }
}

function writeJson(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch {
        // LocalStorage can be unavailable in private browsing or strict settings.
    }

    writePersistentJson(key, value).catch(() => {});
}

function removeJson(key) {
    try {
        localStorage.removeItem(key);
    } catch {
        // LocalStorage can be unavailable in private browsing or strict settings.
    }

    deletePersistentJson(key).catch(() => {});
}

function openPersistentDatabase() {
    if (!("indexedDB" in window)) {
        return Promise.resolve(null);
    }

    if (!persistentDatabasePromise) {
        persistentDatabasePromise = new Promise((resolve) => {
            const request = indexedDB.open(persistentDatabaseName, 1);

            request.onupgradeneeded = () => {
                request.result.createObjectStore(persistentStoreName);
            };

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                resolve(null);
            };

            request.onblocked = () => {
                resolve(null);
            };
        });
    }

    return persistentDatabasePromise;
}

async function openPersistentDatabaseWithTimeout() {
    return Promise.race([
        openPersistentDatabase().catch(() => null),
        wait(300).then(() => null)
    ]);
}

async function readPersistentJson(key, fallback) {
    const localValue = readJson(key, null);

    if (localValue) {
        return localValue;
    }

    const database = await openPersistentDatabaseWithTimeout();

    if (!database) {
        return fallback;
    }

    return new Promise((resolve) => {
        let transaction;

        try {
            transaction = database.transaction(persistentStoreName, "readonly");
        } catch {
            resolve(fallback);
            return;
        }

        const request = transaction.objectStore(persistentStoreName).get(key);

        request.onsuccess = () => {
            resolve(request.result ?? fallback);
        };

        request.onerror = () => {
            resolve(fallback);
        };

        transaction.onabort = () => {
            resolve(fallback);
        };
    });
}

async function writePersistentJson(key, value) {
    const database = await openPersistentDatabaseWithTimeout();

    if (!database) {
        return;
    }

    try {
        const transaction = database.transaction(persistentStoreName, "readwrite");
        transaction.objectStore(persistentStoreName).put(value, key);
    } catch {
        // LocalStorage still has the newest value when IndexedDB cannot write.
    }
}

async function deletePersistentJson(key) {
    const database = await openPersistentDatabaseWithTimeout();

    if (!database) {
        return;
    }

    try {
        const transaction = database.transaction(persistentStoreName, "readwrite");
        transaction.objectStore(persistentStoreName).delete(key);
    } catch {
        // LocalStorage deletion above is enough when IndexedDB cannot write.
    }
}

async function restorePersistentStorage() {
    const restoredValues = await Promise.all(
        persistentKeys.map(async (key) => [key, await readPersistentJson(key, null).catch(() => null)])
    ).catch(() => []);

    restoredValues.forEach(([key, value]) => {
        if (!value) {
            return;
        }

        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch {
            // The IndexedDB copy remains available when LocalStorage cannot be written.
        }
    });
}

function requestPersistentStorage() {
    if (!navigator.storage?.persist) {
        return;
    }

    navigator.storage.persist().catch(() => {});
}

function getDefaultSettings() {
    return {
        language: "en",
        theme: "light",
        layout: "expanded",
        units: "metric",
        activity: "general",
        rainNotifications: false,
        modules: {
            current: true,
            overview: true,
            nowcast: true,
            rainMap: true,
            recommendation: true,
            signals: true,
            hourly: true,
            charts: true,
            daily: true
        },
        charts: {
            temperature: true,
            precipitation: true,
            wind: true,
            uv: true
        }
    };
}

function readSettings() {
    const savedSettings = readJson(settingsKey, {});
    const defaults = getDefaultSettings();
    return {
        ...defaults,
        ...savedSettings,
        charts: { ...defaults.charts, ...savedSettings.charts },
        modules: { ...defaults.modules, ...savedSettings.modules }
    };
}

function saveSettings() {
    writeJson(settingsKey, currentSettings);
}

function readSavedLocations() {
    return readJson(savedLocationsKey, []);
}

function saveSavedLocations() {
    writeJson(savedLocationsKey, savedLocations);
}

function isValidCachedWeather(cachedWeather) {
    return Boolean(cachedWeather?.location && cachedWeather?.data);
}

async function readCachedWeather() {
    const cachedWeather = await readPersistentJson(weatherCacheKey, null);

    return isValidCachedWeather(cachedWeather) ? cachedWeather : null;
}

function readCachedWeatherSync() {
    const cachedWeather = readJson(weatherCacheKey, null);

    return isValidCachedWeather(cachedWeather) ? cachedWeather : null;
}

function readLastLocation() {
    return readJson(lastLocationKey, null);
}

function readPinnedLocation() {
    return readJson(pinnedLocationKey, null);
}

function saveLastLocation(location) {
    writeJson(lastLocationKey, location);
}

function savePinnedLocation(location) {
    writeJson(pinnedLocationKey, location);
}

function cacheWeather(location, data) {
    writeJson(weatherCacheKey, {
        location,
        data,
        savedAt: new Date().toISOString()
    });
}

function isStale(timestamp) {
    return timestamp && Date.now() - new Date(timestamp).getTime() > 30 * 60 * 1000;
}

function applyTranslations() {
    document.documentElement.lang = currentSettings.language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        element.textContent = t(element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        element.placeholder = t(element.dataset.i18nPlaceholder);
    });

    languageSelect.value = currentSettings.language;
    themeSelect.value = currentSettings.theme;
    layoutSelect.value = currentSettings.layout;
    unitsSelect.value = currentSettings.units;
    activitySelect.value = currentSettings.activity || "general";
    rainNotificationsToggle.checked = Boolean(currentSettings.rainNotifications);

    chartToggleElements.forEach((toggle) => {
        toggle.checked = currentSettings.charts?.[toggle.value] !== false;
    });

    moduleToggleElements.forEach((toggle) => {
        toggle.checked = currentSettings.modules?.[toggle.value] !== false;
    });
}

function applySettings() {
    document.body.dataset.theme = currentSettings.theme;
    document.body.dataset.layout = currentSettings.layout;
    applyTranslations();
    updateModuleVisibility();
}

function renderSavedLocations() {
    savedLocationsElement.replaceChildren(...savedLocations.map((location, index) => {
        const isActive = currentLocation
            && Math.abs(location.latitude - currentLocation.latitude) < 0.001
            && Math.abs(location.longitude - currentLocation.longitude) < 0.001;
        const isPinned = currentPinnedLocation
            && Math.abs(location.latitude - currentPinnedLocation.latitude) < 0.001
            && Math.abs(location.longitude - currentPinnedLocation.longitude) < 0.001;
        const item = document.createElement("div");
        item.className = "saved-location";
        item.classList.toggle("active", isActive);
        item.draggable = true;
        item.dataset.locationIndex = String(index);

        const loadButton = document.createElement("button");
        loadButton.className = "saved-location-load";
        loadButton.type = "button";
        loadButton.dataset.locationIndex = String(index);
        loadButton.textContent = location.name;

        if (isActive) {
            loadButton.setAttribute("aria-current", "true");
        }

        const controls = document.createElement("div");
        controls.className = "saved-location-controls";

        const pinButton = document.createElement("button");
        pinButton.className = "icon-button";
        pinButton.type = "button";
        pinButton.dataset.pinLocation = "true";
        pinButton.dataset.locationIndex = String(index);
        pinButton.textContent = isPinned ? "★" : "☆";
        pinButton.setAttribute("aria-label", `${isPinned ? t("unpinPlace") : t("pinPlace")}: ${location.name}`);

        const upButton = document.createElement("button");
        upButton.className = "icon-button";
        upButton.type = "button";
        upButton.dataset.moveLocation = "up";
        upButton.dataset.locationIndex = String(index);
        upButton.textContent = "↑";
        upButton.setAttribute("aria-label", `${t("moveUp")}: ${location.name}`);
        upButton.disabled = index === 0;

        const downButton = document.createElement("button");
        downButton.className = "icon-button";
        downButton.type = "button";
        downButton.dataset.moveLocation = "down";
        downButton.dataset.locationIndex = String(index);
        downButton.textContent = "↓";
        downButton.setAttribute("aria-label", `${t("moveDown")}: ${location.name}`);
        downButton.disabled = index === savedLocations.length - 1;

        const deleteButton = document.createElement("button");
        deleteButton.className = "icon-button danger-button";
        deleteButton.type = "button";
        deleteButton.dataset.deleteLocation = "true";
        deleteButton.dataset.locationIndex = String(index);
        deleteButton.textContent = "×";
        deleteButton.setAttribute("aria-label", `${t("deletePlace")}: ${location.name}`);

        controls.append(pinButton, upButton, downButton, deleteButton);
        item.append(loadButton, controls);

        return item;
    }));

    savedEmptyElement.classList.toggle("hidden", savedLocations.length > 0);
}

function deleteSavedLocation(index) {
    const location = savedLocations[index];

    if (!location) {
        return;
    }

    savedLocations = savedLocations.filter((_, locationIndex) => locationIndex !== index);
    if (currentPinnedLocation
        && Math.abs(currentPinnedLocation.latitude - location.latitude) < 0.001
        && Math.abs(currentPinnedLocation.longitude - location.longitude) < 0.001) {
        currentPinnedLocation = null;
        removeJson(pinnedLocationKey);
    }

    saveSavedLocations();
    renderSavedLocations();
    setStatus(t("deletedPlace", { name: location.name }));
}

function pinSavedLocation(index) {
    const location = savedLocations[index];

    if (!location) {
        return;
    }

    currentPinnedLocation = location;
    savePinnedLocation(location);
    renderSavedLocations();
    setStatus(t("pinnedPlace", { name: location.name }));
}

function upsertSavedLocation(location) {
    const existingIndex = savedLocations.findIndex((savedLocation) => (
        Math.abs(savedLocation.latitude - location.latitude) < 0.001
        && Math.abs(savedLocation.longitude - location.longitude) < 0.001
    ));

    if (existingIndex >= 0) {
        savedLocations[existingIndex] = location;
    } else {
        savedLocations = [...savedLocations, location];
    }

    saveSavedLocations();
    renderSavedLocations();

    return existingIndex >= 0;
}

function moveSavedLocation(index, direction) {
    const targetIndex = direction === "up" ? index - 1 : index + 1;

    if (targetIndex < 0 || targetIndex >= savedLocations.length) {
        return;
    }

    const nextLocations = [...savedLocations];
    [nextLocations[index], nextLocations[targetIndex]] = [nextLocations[targetIndex], nextLocations[index]];
    savedLocations = nextLocations;
    saveSavedLocations();
    renderSavedLocations();
}

function openSidebar() {
    document.body.classList.add("sidebar-open");
    sidebarBackdrop.hidden = false;
    sidebarToggle.setAttribute("aria-expanded", "true");
    locationInput.focus();
}

function closeSidebar() {
    document.body.classList.remove("sidebar-open");
    sidebarBackdrop.hidden = true;
    sidebarToggle.setAttribute("aria-expanded", "false");
    sidebarToggle.focus();
}

function showInstallBanner(messageKey, buttonKey = "installButton") {
    if (localStorage.getItem(installDismissedKey) === "true" && messageKey === "installReady") {
        return;
    }

    installMessage.textContent = t(messageKey);
    installButton.textContent = t(buttonKey);
    installBanner.classList.remove("hidden");
}

function hideInstallBanner() {
    installBanner.classList.add("hidden");
}

function getWeatherIcon(code, isDay = true) {
    const icon = (body) => `<svg viewBox="0 0 48 48" focusable="false" aria-hidden="true">${body}</svg>`;
    const sun = `<circle cx="24" cy="24" r="8" fill="#f7c948"/><g stroke="#f7c948" stroke-width="3" stroke-linecap="round"><path d="M24 5v7M24 36v7M5 24h7M36 24h7M10.5 10.5l5 5M32.5 32.5l5 5M37.5 10.5l-5 5M15.5 32.5l-5 5"/></g>`;
    const moon = `<path d="M31 34c-10 0-17-8-17-17 0-4 1-7 3-10-7 3-11 9-11 17 0 10 8 18 18 18 8 0 14-4 17-11-3 2-6 3-10 3z" fill="#d9e7f2"/>`;
    const cloud = `<path d="M16 35c-5 0-9-4-9-9s4-9 9-9c2 0 4 1 5 2 3-5 8-8 14-8 8 0 15 7 15 15v1c4 2 7 5 7 10 0 6-5 10-10 10H16z" transform="scale(.82) translate(0 -4)" fill="#d6e3e7" stroke="#9db6bf" stroke-width="1.5"/>`;
    const rain = `<g stroke="#2a9fd6" stroke-width="2.5" stroke-linecap="round"><path d="M17 34l-2 5M26 34l-2 5M35 34l-2 5"/></g>`;
    const snow = `<g stroke="#79c7e8" stroke-width="2" stroke-linecap="round"><path d="M17 36h6M20 33v6M30 36h6M33 33v6"/></g>`;
    const bolt = `<path d="M25 29h8l-8 14 1-10h-7l7-14z" fill="#f2b705"/>`;

    if (code === 0) {
        return icon(isDay ? sun : moon);
    }

    if ([1, 2].includes(code)) {
        return icon(`${isDay ? `<g transform="translate(-8 -8) scale(.8)">${sun}</g>` : ""}${cloud}`);
    }

    if ([3, 45, 48].includes(code)) {
        return icon(cloud);
    }

    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) {
        return icon(`${cloud}${rain}`);
    }

    if ([71, 73, 75].includes(code)) {
        return icon(`${cloud}${snow}`);
    }

    if ([95, 96, 99].includes(code)) {
        return icon(`${cloud}${bolt}${rain}`);
    }

    return icon(`<path d="M23 8a5 5 0 0 1 10 0v19a10 10 0 1 1-10 0z" fill="#e66565"/><path d="M28 11v22" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`);
}

async function fetchJson(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(t("serviceUnavailable"));
    }

    return response.json();
}

async function findLocation(query) {
    const url = new URL("https://geocoding-api.open-meteo.com/v1/search");
    url.searchParams.set("name", query);
    url.searchParams.set("count", "1");
    url.searchParams.set("language", currentSettings.language);
    url.searchParams.set("format", "json");

    const data = await fetchJson(url);

    if (!data.results || data.results.length === 0) {
        throw new Error(t("noMatch"));
    }

    const [result] = data.results;

    return {
        name: [result.name, result.admin1, result.country].filter(Boolean).join(", "),
        latitude: result.latitude,
        longitude: result.longitude,
        timezone: result.timezone || "auto"
    };
}

async function findNearestLocation(latitude, longitude) {
    const url = new URL("https://nominatim.openstreetmap.org/reverse");
    url.searchParams.set("format", "jsonv2");
    url.searchParams.set("lat", latitude);
    url.searchParams.set("lon", longitude);
    url.searchParams.set("zoom", "12");
    url.searchParams.set("addressdetails", "1");
    url.searchParams.set("accept-language", currentSettings.language);

    const data = await fetchJson(url);
    const address = data.address || {};
    const locality = address.city || address.town || address.village || address.municipality || address.suburb;
    const region = address.state || address.county;
    const name = [locality, region, address.country].filter(Boolean).join(", ") || data.display_name;

    if (!name) {
        return {
            name: `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`,
            latitude,
            longitude,
            timezone: "auto"
        };
    }

    return {
        name,
        latitude,
        longitude,
        timezone: "auto"
    };
}

async function fetchWeather(location) {
    const url = new URL("https://api.open-meteo.com/v1/forecast");
    url.searchParams.set("latitude", location.latitude);
    url.searchParams.set("longitude", location.longitude);
    url.searchParams.set("timezone", location.timezone);
    url.searchParams.set("current", "temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,wind_direction_10m,pressure_msl,cloud_cover,is_day");
    url.searchParams.set("minutely_15", "precipitation,weather_code");
    url.searchParams.set("hourly", "temperature_2m,apparent_temperature,weather_code,precipitation_probability,precipitation,wind_speed_10m,wind_direction_10m,cloud_cover,visibility,cape,uv_index,is_day");
    url.searchParams.set("daily", "weather_code,temperature_2m_max,temperature_2m_min,temperature_2m_mean,apparent_temperature_max,apparent_temperature_min,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,wind_direction_10m_dominant,uv_index_max,sunrise,sunset,daylight_duration,sunshine_duration");
    url.searchParams.set("forecast_minutely_15", "16");
    url.searchParams.set("forecast_days", "8");

    return fetchJson(url);
}

async function fetchAirQuality(location) {
    const url = new URL("https://air-quality-api.open-meteo.com/v1/air-quality");
    url.searchParams.set("latitude", location.latitude);
    url.searchParams.set("longitude", location.longitude);
    url.searchParams.set("timezone", location.timezone);
    url.searchParams.set("current", "european_aqi,pm2_5,ozone,uv_index,alder_pollen,birch_pollen,grass_pollen,mugwort_pollen,ragweed_pollen");

    return fetchJson(url);
}

async function fetchHistoricalComparison(location) {
    const comparisonDate = new Date();
    comparisonDate.setFullYear(comparisonDate.getFullYear() - 1);
    const date = comparisonDate.toISOString().slice(0, 10);
    const url = new URL("https://archive-api.open-meteo.com/v1/archive");
    url.searchParams.set("latitude", location.latitude);
    url.searchParams.set("longitude", location.longitude);
    url.searchParams.set("timezone", location.timezone);
    url.searchParams.set("start_date", date);
    url.searchParams.set("end_date", date);
    url.searchParams.set("daily", "temperature_2m_mean,temperature_2m_max,temperature_2m_min,precipitation_sum");

    return fetchJson(url);
}

async function fetchRainMap(location) {
    const size = 5;
    const latitudeStep = 0.09;
    const longitudeStep = latitudeStep / Math.max(Math.cos(location.latitude * Math.PI / 180), 0.35);
    const points = [];

    for (let row = 0; row < size; row += 1) {
        for (let column = 0; column < size; column += 1) {
            points.push({
                latitude: location.latitude + (2 - row) * latitudeStep,
                longitude: location.longitude + (column - 2) * longitudeStep
            });
        }
    }

    const url = new URL("https://api.open-meteo.com/v1/forecast");
    url.searchParams.set("latitude", points.map((point) => point.latitude.toFixed(4)).join(","));
    url.searchParams.set("longitude", points.map((point) => point.longitude.toFixed(4)).join(","));
    url.searchParams.set("timezone", location.timezone);
    url.searchParams.set("minutely_15", "precipitation");
    url.searchParams.set("forecast_minutely_15", "8");

    const data = await fetchJson(url);
    return Array.isArray(data) ? data : [data];
}

async function fetchWeatherBundle(location) {
    const [weatherResult, airResult, historyResult, mapResult] = await Promise.allSettled([
        fetchWeather(location),
        fetchAirQuality(location),
        fetchHistoricalComparison(location),
        fetchRainMap(location)
    ]);

    if (weatherResult.status !== "fulfilled") {
        throw weatherResult.reason;
    }

    return {
        ...weatherResult.value,
        airQuality: airResult.status === "fulfilled" ? airResult.value : null,
        history: historyResult.status === "fulfilled" ? historyResult.value : null,
        rainMap: mapResult.status === "fulfilled" ? mapResult.value : null
    };
}

function getUpcomingHourlyForecast(hourly, currentTime) {
    const currentTimestamp = new Date(currentTime).getTime();
    const startIndex = hourly.time.findIndex((time) => new Date(time).getTime() >= currentTimestamp);

    return hourly.time
        .slice(Math.max(startIndex, 0), Math.max(startIndex, 0) + hourlyForecastCount)
        .map((time, index) => {
            const sourceIndex = Math.max(startIndex, 0) + index;

            return {
                time,
                temperature: hourly.temperature_2m[sourceIndex],
                weatherCode: hourly.weather_code[sourceIndex],
                precipitation: hourly.precipitation_probability[sourceIndex],
                precipitationAmount: hourly.precipitation[sourceIndex],
                wind: hourly.wind_speed_10m[sourceIndex],
                windDirection: hourly.wind_direction_10m[sourceIndex],
                cloud: hourly.cloud_cover?.[sourceIndex],
                cape: hourly.cape?.[sourceIndex],
                uv: hourly.uv_index?.[sourceIndex],
                visibility: hourly.visibility[sourceIndex],
                isDay: Boolean(hourly.is_day[sourceIndex])
            };
        });
}

function getWeatherInsight(hourlyForecast, daily) {
    const wetHour = hourlyForecast.find((hour) => hour.precipitation >= 60 || hour.precipitationAmount >= 1);

    if (wetHour) {
        return t("rainRisk", { time: formatDate(wetHour.time, { hour: "2-digit" }) });
    }

    const maxUv = Math.max(...daily.uv_index_max.filter(hasNumber));

    if (maxUv >= 6) {
        return t("highUv", { uv: Math.round(maxUv) });
    }

    const windyDayIndex = daily.wind_speed_10m_max.findIndex((value) => value >= 35);

    if (windyDayIndex >= 0) {
        return t("windy", { day: formatDate(daily.time[windyDayIndex], { weekday: "long" }) });
    }

    return t("steady");
}

function renderLineChart(element, points, options) {
    const validPoints = points.filter((point) => hasNumber(point.value));

    if (!element || validPoints.length === 0) {
        return;
    }

    const width = 640;
    const height = 180;
    const padding = 28;
    const values = validPoints.map((point) => point.value);
    const minValue = options.min ?? Math.min(...values);
    const maxValue = options.max ?? Math.max(...values);
    const valueRange = Math.max(maxValue - minValue, 1);
    const xStep = validPoints.length > 1 ? (width - padding * 2) / (validPoints.length - 1) : 0;
    const coordinates = validPoints.map((point, index) => {
        const x = padding + index * xStep;
        const y = height - padding - ((point.value - minValue) / valueRange) * (height - padding * 2);

        return { ...point, x, y };
    });
    const linePoints = coordinates.map((point) => `${point.x},${point.y}`).join(" ");
    const areaPoints = `${padding},${height - padding} ${linePoints} ${width - padding},${height - padding}`;

    element.innerHTML = `
        <svg class="chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${options.label}">
            <polyline class="chart-grid" points="${padding},${padding} ${width - padding},${padding}"></polyline>
            <polyline class="chart-grid" points="${padding},${height - padding} ${width - padding},${height - padding}"></polyline>
            <polygon class="chart-area" points="${areaPoints}"></polygon>
            <polyline class="chart-line" points="${linePoints}"></polyline>
            ${coordinates.map((point) => `
                <g>
                    <circle class="chart-point" cx="${point.x}" cy="${point.y}" r="4"></circle>
                    <text class="chart-value" x="${point.x}" y="${point.y - 10}" text-anchor="middle">${options.format(point.value)}</text>
                </g>
            `).join("")}
            ${coordinates.filter((_, index) => index % 3 === 0 || index === coordinates.length - 1).map((point) => `
                <text class="chart-label" x="${point.x}" y="${height - 6}" text-anchor="middle">${point.label}</text>
            `).join("")}
        </svg>
    `;
}

function renderCharts(hourlyForecast) {
    const chartHours = hourlyForecast.slice(0, 12);

    renderLineChart(temperatureChartElement, chartHours.map((hour) => ({
        label: formatDate(hour.time, { hour: "2-digit" }),
        value: Math.round(hour.temperature)
    })), {
        label: t("temperatureChartTitle"),
        format: (value) => `${value}°`
    });

    renderLineChart(precipitationChartElement, chartHours.map((hour) => ({
        label: formatDate(hour.time, { hour: "2-digit" }),
        value: Math.round(hour.precipitation)
    })), {
        label: t("precipitationChartTitle"),
        min: 0,
        max: 100,
        format: (value) => `${value}%`
    });

    renderLineChart(windChartElement, chartHours.map((hour) => ({
        label: formatDate(hour.time, { hour: "2-digit" }),
        value: Math.round(convertWind(hour.wind))
    })), {
        label: t("windChartTitle"),
        min: 0,
        format: (value) => `${value} ${windUnit()}`
    });
}

function renderUvChart(daily) {
    renderLineChart(uvChartElement, daily.time.map((day, index) => ({
        label: formatDate(day, { weekday: "short" }),
        value: Math.round(daily.uv_index_max[index])
    })), {
        label: t("uvChartTitle"),
        min: 0,
        format: (value) => value
    });
}

function updateChartVisibility() {
    chartToggleElements.forEach((toggle) => {
        const card = document.querySelector(`[data-chart-card="${toggle.value}"]`);

        if (card) {
            card.classList.toggle("hidden", currentSettings.charts?.[toggle.value] === false);
        }
    });
}

function updateModuleVisibility() {
    document.querySelectorAll("[data-dashboard-module]").forEach((element) => {
        const moduleName = element.dataset.dashboardModule;
        element.classList.toggle("hidden", currentSettings.modules?.[moduleName] === false);
    });

    const nowcastVisible = currentSettings.modules?.nowcast !== false;
    const rainMapVisible = currentSettings.modules?.rainMap !== false;
    intelligenceGridElement.classList.toggle("hidden", !nowcastVisible && !rainMapVisible);
    intelligenceGridElement.classList.toggle("single-module", nowcastVisible !== rainMapVisible);
}

function scrollHourly(direction) {
    const scrollAmount = Math.max(180, hourlyForecastElement.clientWidth * 0.75);

    hourlyForecastElement.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}

function renderGlance(current, daily, upcomingHours) {
    const wetHour = upcomingHours.find((hour) => hour.precipitation >= 50);
    const items = [
        [t("highLabel"), formatTemperature(daily.temperature_2m_max[0])],
        [t("lowLabel"), formatTemperature(daily.temperature_2m_min[0])],
        [t("rainLabel"), wetHour ? formatDate(wetHour.time, { hour: "2-digit" }) : formatPercent(daily.precipitation_probability_max[0])],
        [t("uvLabel"), hasNumber(daily.uv_index_max[0]) ? Math.round(daily.uv_index_max[0]) : "-"],
        [t("sunsetShortLabel"), formatDate(daily.sunset[0], { hour: "2-digit", minute: "2-digit" })]
    ];

    glanceListElement.innerHTML = items.map(([label, value]) => `
        <div>
            <span>${label}</span>
            <strong>${value}</strong>
        </div>
    `).join("");
}

function getAlerts(current, daily) {
    const alerts = [];
    const maxTemperature = Math.max(...daily.temperature_2m_max.filter(hasNumber));
    const minTemperature = Math.min(...daily.temperature_2m_min.filter(hasNumber));
    const maxRain = Math.max(...daily.precipitation_sum.filter(hasNumber));
    const maxWind = Math.max(...daily.wind_speed_10m_max.filter(hasNumber));
    const stormExpected = daily.weather_code.some((code) => [95, 96, 99].includes(code));

    if (maxTemperature >= 32) alerts.push(t("heatAlert"));
    if (minTemperature <= 1) alerts.push(t("frostAlert"));
    if (stormExpected) alerts.push(t("stormAlert"));
    if (maxRain >= 20) alerts.push(t("heavyRainAlert"));
    if (maxWind >= 45 || current.wind_speed_10m >= 35) alerts.push(t("windAlert"));

    return alerts;
}

function renderAlerts(current, daily) {
    const alerts = getAlerts(current, daily);

    alertsListElement.innerHTML = alerts.length > 0
        ? alerts.map((alert) => `<p class="alert-item">${alert}</p>`).join("")
        : `<p class="empty-state">${t("noAlerts")}</p>`;
}

function formatDuration(minutes) {
    if (minutes < 60) {
        return `${minutes} min`;
    }

    const hours = Math.floor(minutes / 60);
    const remainder = minutes % 60;
    return remainder ? `${hours} h ${remainder} min` : `${hours} h`;
}

function getNowcast(data) {
    const minutely = data.minutely_15;

    if (!minutely?.time?.length || !minutely.precipitation) {
        return { periods: [], wetIndex: -1, duration: 0, total: 0 };
    }

    const periods = minutely.time.slice(0, 12).map((time, index) => ({
        time,
        amount: Number(minutely.precipitation[index]) || 0,
        code: minutely.weather_code?.[index]
    }));
    const wetIndex = periods.findIndex((period) => period.amount >= 0.1);
    let wetSteps = 0;

    if (wetIndex >= 0) {
        for (let index = wetIndex; index < periods.length && periods[index].amount >= 0.05; index += 1) {
            wetSteps += 1;
        }
    }

    return {
        periods,
        wetIndex,
        duration: wetSteps * 15,
        total: periods.reduce((sum, period) => sum + period.amount, 0)
    };
}

function renderNowcast(data) {
    const nowcast = getNowcast(data);

    if (nowcast.wetIndex < 0) {
        setText(nowcastSummaryElement, t("noRainSoon"));
    } else {
        const minutes = nowcast.wetIndex * 15;
        const message = minutes === 0
            ? t("rainNow", { duration: formatDuration(nowcast.duration) })
            : t("rainStarts", { minutes, duration: formatDuration(nowcast.duration) });
        setText(nowcastSummaryElement, `${message} · ${t("rainTotal", { amount: formatPrecipitation(nowcast.total) })}`);
    }

    const maxAmount = Math.max(0.4, ...nowcast.periods.map((period) => period.amount));
    rainTimelineElement.innerHTML = nowcast.periods.map((period, index) => {
        const height = Math.max(4, Math.round(period.amount / maxAmount * 100));
        const label = `${formatDate(period.time, { hour: "2-digit", minute: "2-digit" })}: ${formatPrecipitation(period.amount)}`;
        return `
            <div class="rain-step" title="${label}" aria-label="${label}">
                <span class="rain-bar" style="--rain-height:${height}%"></span>
                <time>${index % 2 === 0 ? formatDate(period.time, { hour: "2-digit", minute: "2-digit" }) : ""}</time>
            </div>
        `;
    }).join("");

    scheduleRainNotification(nowcast);
}

function renderRainMapFrame(rainMap, frameIndex) {
    if (!rainMap?.length || !rainMap[0]?.minutely_15?.time) {
        rainMapElement.innerHTML = `<p class="empty-state">${t("serviceUnavailable")}</p>`;
        rainMapControlsElement.replaceChildren();
        return;
    }

    const maxFrame = rainMap[0].minutely_15.time.length - 1;
    activeRainMapFrame = Math.min(Math.max(frameIndex, 0), maxFrame);
    const time = rainMap[0].minutely_15.time[activeRainMapFrame];
    const cells = rainMap.slice(0, 25).map((point, index) => {
        const amount = Number(point.minutely_15?.precipitation?.[activeRainMapFrame]) || 0;
        const opacity = Math.min(0.92, 0.08 + amount / 4 * 0.84);
        const center = index === 12 ? `<span class="location-dot" aria-hidden="true"></span>` : "";
        return `<span class="rain-map-cell" style="background:rgba(62, 97, 255, ${opacity.toFixed(2)})" title="${formatPrecipitation(amount)}">${center}</span>`;
    });

    rainMapElement.innerHTML = `<span class="map-north" aria-hidden="true">N</span>${cells.join("")}`;
    setText(rainMapCaptionElement, `${t("mapAt", { time: formatDate(time, { hour: "2-digit", minute: "2-digit" }) })} · ${t("rainMapNote")}`);
    rainMapControlsElement.querySelectorAll("button").forEach((button) => {
        button.setAttribute("aria-pressed", String(Number(button.dataset.mapFrame) === activeRainMapFrame));
    });
}

function renderRainMap(rainMap) {
    if (!rainMap?.length || !rainMap[0]?.minutely_15?.time) {
        renderRainMapFrame(null, 0);
        return;
    }

    const availableFrames = rainMap[0].minutely_15.time.length;
    const frames = [0, 2, 4, 7].filter((index) => index < availableFrames);
    rainMapControlsElement.innerHTML = frames.map((index) => {
        const label = index === 0 ? "Now" : `+${index * 15}m`;
        return `<button type="button" class="map-time-button" data-map-frame="${index}" aria-pressed="${index === 0}">${label}</button>`;
    }).join("");
    renderRainMapFrame(rainMap, 0);
}

function scoreActivityHour(hour, activity) {
    const targetTemperature = activity === "running" ? 12 : activity === "cycling" ? 18 : 20;
    const temperaturePenalty = Math.abs((hour.temperature ?? targetTemperature) - targetTemperature) * 1.6;
    const windPenalty = (hour.wind ?? 0) * (activity === "cycling" ? 1.4 : 0.45);
    const rainPenalty = (hour.precipitation ?? 0) * 0.7 + (hour.precipitationAmount ?? 0) * 30;
    const uvPenalty = activity === "photo" ? 0 : Math.max(0, (hour.uv ?? 0) - 5) * 8;
    const cloudPreference = activity === "photo" ? Math.abs((hour.cloud ?? 50) - 45) * 0.15 : 0;
    return temperaturePenalty + windPenalty + rainPenalty + uvPenalty + cloudPreference;
}

function renderRecommendation(hourly, currentTime) {
    const hours = getUpcomingHourlyForecast(hourly, currentTime).slice(0, 12);
    const activity = currentSettings.activity || "general";
    const candidates = hours.slice(0, -1).map((hour, index) => ({
        hour,
        next: hours[index + 1],
        score: (scoreActivityHour(hour, activity) + scoreActivityHour(hours[index + 1], activity)) / 2
    })).sort((a, b) => a.score - b.score);
    const best = candidates[0];

    if (!best) {
        setText(recommendationSummaryElement, t("steady"));
        recommendationChipsElement.replaceChildren();
        return;
    }

    const start = formatDate(best.hour.time, { hour: "2-digit", minute: "2-digit" });
    const endDate = new Date(best.next.time);
    endDate.setHours(endDate.getHours() + 1);
    const end = formatDate(endDate, { hour: "2-digit", minute: "2-digit" });
    const activityName = t(activity === "general" ? "everyday" : activity);
    setText(recommendationSummaryElement, best.score < 70
        ? t("bestWindow", { activity: activityName, start, end })
        : t("noGoodWindow", { time: start }));

    const chips = [t("conditionsGood")];
    if (best.hour.temperature < 12) chips.push(t("takeJacket"));
    if ((best.hour.uv ?? 0) >= 5) chips.push(t("sunProtection"));
    if (best.hour.precipitation >= 35) chips.push(t("rainProtection"));
    if (best.hour.wind >= 25) chips.push(t("breezy"));
    recommendationChipsElement.innerHTML = chips.map((chip) => `<span>${chip}</span>`).join("");
}

function renderConfidence(data) {
    const probability = Number(data.daily.precipitation_probability_max?.[0]) || 0;
    const distanceFromUncertain = Math.abs(probability - 50);
    const confidenceKey = distanceFromUncertain >= 35 ? "confidenceHigh" : distanceFromUncertain >= 18 ? "confidenceMedium" : "confidenceLow";
    let changeMessage = t("firstLoadChange");

    if (previousWeatherData?.daily) {
        const temperatureChange = Number(data.daily.temperature_2m_max[0]) - Number(previousWeatherData.daily.temperature_2m_max?.[0]);
        const rainChange = Number(data.daily.precipitation_sum[0]) - Number(previousWeatherData.daily.precipitation_sum?.[0]);
        if (Math.abs(temperatureChange) >= 1) {
            changeMessage = t(temperatureChange > 0 ? "forecastWarmer" : "forecastCooler", { value: formatTemperature(Math.abs(temperatureChange)) });
        } else if (rainChange >= 1) {
            changeMessage = t("forecastWetter", { value: formatPrecipitation(rainChange) });
        } else {
            changeMessage = t("forecastStable");
        }
    }

    confidenceContentElement.innerHTML = `<p class="signal-value">${t(confidenceKey)}</p><p>${changeMessage}</p><small>${t("confidenceDetail")}</small>`;
}

function findBestSunWindow(hourly, currentTime) {
    const hours = getUpcomingHourlyForecast(hourly, currentTime).filter((hour) => hour.isDay);
    const suitable = hours.map((hour) => (hour.cloud ?? 100) <= 45 && hour.precipitation < 35);
    let bestStart = -1;
    let bestLength = 0;
    let currentStart = -1;

    suitable.forEach((isSuitable, index) => {
        if (isSuitable && currentStart < 0) currentStart = index;
        if ((!isSuitable || index === suitable.length - 1) && currentStart >= 0) {
            const endIndex = isSuitable && index === suitable.length - 1 ? index + 1 : index;
            const length = endIndex - currentStart;
            if (length > bestLength) {
                bestStart = currentStart;
                bestLength = length;
            }
            currentStart = -1;
        }
    });

    return bestStart >= 0 ? hours.slice(bestStart, bestStart + bestLength) : [];
}

function renderSignals(data) {
    const sunWindow = findBestSunWindow(data.hourly, data.current.time);
    if (sunWindow.length) {
        const end = new Date(sunWindow[sunWindow.length - 1].time);
        end.setHours(end.getHours() + 1);
        const daylightMinutes = hasNumber(data.daily.daylight_duration?.[0])
            ? Math.round(data.daily.daylight_duration[0] / 60)
            : null;
        sunContentElement.innerHTML = `<p class="signal-value">${t("sunWindow", {
            start: formatDate(sunWindow[0].time, { hour: "2-digit", minute: "2-digit" }),
            end: formatDate(end, { hour: "2-digit", minute: "2-digit" })
        })}</p>${daylightMinutes ? `<p>${formatDuration(daylightMinutes)} ${t("sunKicker").toLowerCase()}</p>` : ""}`;
    } else {
        sunContentElement.innerHTML = `<p class="signal-value">${t("sunUnavailable")}</p>`;
    }

    const upcoming = getUpcomingHourlyForecast(data.hourly, data.current.time);
    const stormHour = upcoming.reduce((strongest, hour) => (hour.cape ?? 0) > (strongest?.cape ?? 0) ? hour : strongest, null);
    const cape = Math.round(stormHour?.cape ?? 0);
    const stormKey = cape >= 1200 ? "stormHigh" : cape >= 500 ? "stormRaised" : "stormLow";
    const stormText = stormKey === "stormLow" ? t(stormKey) : t(stormKey, {
        time: formatDate(stormHour.time, { hour: "2-digit", minute: "2-digit" }), cape
    });
    stormContentElement.innerHTML = `<p class="signal-value">${stormText}</p><small>${t("modelWarning")}</small>`;

    renderAirQuality(data.airQuality);
    renderHistory(data);
}

function renderAirQuality(airQuality) {
    const current = airQuality?.current;
    if (!current) {
        airContentElement.innerHTML = `<p>${t("airUnavailable")}</p>`;
        return;
    }

    const aqi = Number(current.european_aqi);
    const airKey = aqi <= 40 ? "airGood" : aqi <= 80 ? "airFair" : "airPoor";
    const pollens = ["alder_pollen", "birch_pollen", "grass_pollen", "mugwort_pollen", "ragweed_pollen"]
        .map((key) => Number(current[key]))
        .filter(Number.isFinite);
    const maxPollen = pollens.length ? Math.max(...pollens) : null;
    const pollenKey = maxPollen === null ? "pollenUnavailable" : maxPollen < 10 ? "pollenLow" : maxPollen < 50 ? "pollenMedium" : "pollenHigh";
    airContentElement.innerHTML = `<p class="signal-value">${t(airKey)} · ${Math.round(aqi)} AQI</p><p>${t(pollenKey)}</p><small>PM2.5 ${hasNumber(current.pm2_5) ? `${Math.round(current.pm2_5)} µg/m³` : "–"} · O₃ ${hasNumber(current.ozone) ? `${Math.round(current.ozone)} µg/m³` : "–"}</small>`;
}

function renderHistory(data) {
    const history = data.history?.daily;
    const historicMean = Number(history?.temperature_2m_mean?.[0]);
    const todayMean = Number(data.daily.temperature_2m_mean?.[0]);

    if (!Number.isFinite(historicMean) || !Number.isFinite(todayMean)) {
        historyContentElement.innerHTML = `<p>${t("historyUnavailable")}</p>`;
        return;
    }

    const difference = todayMean - historicMean;
    const comparisonKey = Math.abs(difference) < 1 ? "historySimilar" : difference > 0 ? "historyWarmer" : "historyCooler";
    const comparison = comparisonKey === "historySimilar" ? t(comparisonKey) : t(comparisonKey, { value: formatTemperature(Math.abs(difference)) });
    historyContentElement.innerHTML = `<p class="signal-value">${comparison}</p><p>${t("historyRain", {
        temperature: formatTemperature(historicMean),
        rain: formatPrecipitation(history.precipitation_sum?.[0])
    })}</p>`;
}

function scheduleRainNotification(nowcast) {
    window.clearTimeout(rainNotificationTimer);
    rainNotificationTimer = null;

    if (!currentSettings.rainNotifications || !("Notification" in window) || Notification.permission !== "granted" || nowcast.wetIndex < 1 || nowcast.wetIndex > 4) {
        return;
    }

    const minutes = nowcast.wetIndex * 15;
    rainNotificationTimer = window.setTimeout(() => {
        new Notification(t("rainNotificationTitle", { name: currentLocation?.name || "" }), {
            body: t("rainNotificationBody", { minutes: 5 }),
            icon: "icons/icon-192.png",
            tag: "julianverse-rain"
        });
    }, Math.max(1000, (minutes - 5) * 60 * 1000));
}

function renderWeather(location, data) {
    const current = data.current;
    const hourly = data.hourly;
    const daily = data.daily;
    const upcomingHours = getUpcomingHourlyForecast(hourly, current.time);

    currentLocation = location;
    currentWeatherData = data;
    saveLastLocation(location);
    renderSavedLocations();
    updateUrlState();
    setText(activePlaceElement, location.name);
    setText(placeElement, location.name);
    setHtml(currentIconElement, getWeatherIcon(current.weather_code, Boolean(current.is_day)));
    setText(temperatureElement, formatTemperature(current.temperature_2m));
    setText(summaryElement, getWeatherLabel(current.weather_code));
    setText(insightElement, getWeatherInsight(upcomingHours, daily));
    setText(windElement, formatWind(current.wind_speed_10m));
    setText(windDirectionElement, formatWindDirection(current.wind_direction_10m));
    setText(humidityElement, formatPercent(current.relative_humidity_2m));
    setText(apparentElement, formatTemperature(current.apparent_temperature));
    setText(pressureElement, formatPressure(current.pressure_msl));
    setText(cloudsElement, formatPercent(current.cloud_cover));
    setText(visibilityElement, formatVisibility(upcomingHours[0]?.visibility));
    setText(sunriseElement, formatDate(daily.sunrise[0], { hour: "2-digit", minute: "2-digit" }));
    setText(sunsetElement, formatDate(daily.sunset[0], { hour: "2-digit", minute: "2-digit" }));
    setText(updatedElement, formatDate(current.time, {
        hour: "2-digit",
        minute: "2-digit"
    }));
    renderGlance(current, daily, upcomingHours);
    renderAlerts(current, daily);
    renderNowcast(data);
    renderRainMap(data.rainMap);
    renderRecommendation(hourly, current.time);
    renderConfidence(data);
    renderSignals(data);

    hourlyForecastElement.innerHTML = upcomingHours.map((hour) => `
        <article class="panel hour">
            <h3>${formatDate(hour.time, { hour: "2-digit" })}</h3>
            <span class="weather-icon" aria-hidden="true">${getWeatherIcon(hour.weatherCode, hour.isDay)}</span>
            <strong>${formatTemperature(hour.temperature)}</strong>
            <p>${getWeatherLabel(hour.weatherCode)}</p>
            <dl>
                <div>
                    <dt>${t("rainLabel")}</dt>
                    <dd>${formatPercent(hour.precipitation)}</dd>
                </div>
                <div>
                    <dt>${t("amountLabel")}</dt>
                    <dd>${formatPrecipitation(hour.precipitationAmount)}</dd>
                </div>
                <div>
                    <dt>${t("windLabel")}</dt>
                    <dd>${formatWind(hour.wind)}</dd>
                </div>
                <div>
                    <dt>${t("dirLabel")}</dt>
                    <dd>${formatWindDirection(hour.windDirection)}</dd>
                </div>
            </dl>
        </article>
    `).join("");

    renderCharts(upcomingHours);
    renderUvChart(daily);
    updateChartVisibility();

    forecastElement.innerHTML = daily.time.slice(1, 8).map((day, offset) => {
        const index = offset + 1;
        return `
        <article class="panel day">
            <details ${offset === 0 ? "open" : ""}>
                <summary>
                    <span class="weather-icon" aria-hidden="true">${getWeatherIcon(daily.weather_code[index])}</span>
                    <span>
                        <strong>${formatDate(day, { weekday: "short" })}</strong>
                        <span>${getWeatherLabel(daily.weather_code[index])}</span>
                    </span>
                    <strong>${formatTemperature(daily.temperature_2m_max[index])} / ${formatTemperature(daily.temperature_2m_min[index])}</strong>
                </summary>
                <p>${t("feelsPrefix")} ${formatTemperature(daily.apparent_temperature_max[index])} / ${formatTemperature(daily.apparent_temperature_min[index])}</p>
                <p>${formatDate(day, { month: "short", day: "numeric" })}</p>
                <dl>
                    <div>
                        <dt>${t("rainLabel")}</dt>
                        <dd>${formatPercent(daily.precipitation_probability_max[index])}</dd>
                    </div>
                    <div>
                        <dt>${t("amountLabel")}</dt>
                        <dd>${formatPrecipitation(daily.precipitation_sum[index])}</dd>
                    </div>
                    <div>
                        <dt>${t("windLabel")}</dt>
                        <dd>${formatWind(daily.wind_speed_10m_max[index])}</dd>
                    </div>
                    <div>
                        <dt>${t("dirLabel")}</dt>
                        <dd>${formatWindDirection(daily.wind_direction_10m_dominant[index])}</dd>
                    </div>
                    <div>
                        <dt>${t("uvLabel")}</dt>
                        <dd>${hasNumber(daily.uv_index_max[index]) ? Math.round(daily.uv_index_max[index]) : "-"}</dd>
                    </div>
                    <div>
                        <dt>${t("sunriseLabel")}</dt>
                        <dd>${formatDate(daily.sunrise[index], { hour: "2-digit", minute: "2-digit" })}</dd>
                    </div>
                    <div>
                        <dt>${t("sunsetLabel")}</dt>
                        <dd>${formatDate(daily.sunset[index], { hour: "2-digit", minute: "2-digit" })}</dd>
                    </div>
                </dl>
            </details>
        </article>
    `;
    }).join("");

    weatherElement.classList.remove("hidden");
}

function registerServiceWorker() {
    if (!isServiceWorkerAvailable) {
        return;
    }

    navigator.serviceWorker.register("./sw.js").then((registration) => {
        registration.addEventListener("updatefound", () => {
            const nextWorker = registration.installing;

            nextWorker?.addEventListener("statechange", () => {
                if (nextWorker.state === "installed" && navigator.serviceWorker.controller) {
                    showInstallBanner("updateReady", "updateButton");
                }
            });
        });
    }).catch(() => {
        setStatus(t("serviceWorkerError"), true);
    });
}

function updateConnectionStatus() {
    if (!navigator.onLine) {
        setStatus(t("offline"), true);
    }
}

async function loadLocation(location) {
    setLoading(true);
    setStatus(t("loadingWeather", { name: location.name }));

    try {
        const cachedBeforeUpdate = readCachedWeatherSync();
        previousWeatherData = cachedBeforeUpdate
            && Math.abs(cachedBeforeUpdate.location.latitude - location.latitude) < 0.001
            && Math.abs(cachedBeforeUpdate.location.longitude - location.longitude) < 0.001
            ? cachedBeforeUpdate.data
            : null;
        const data = await fetchWeatherBundle(location);
        renderWeather(location, data);
        cacheWeather(location, data);

        if (shouldSaveUrlLocation) {
            upsertSavedLocation(location);
            shouldSaveUrlLocation = false;
        }

        if (shouldPinUrlLocation) {
            currentPinnedLocation = location;
            savePinnedLocation(location);
            renderSavedLocations();
            shouldPinUrlLocation = false;
        }

        setStatus(t("forecastLoaded"));
    } catch (error) {
        setStatus(error.message, true);
    } finally {
        setLoading(false);
    }
}

async function loadSearch(query) {
    setLoading(true);
    setStatus(t("searching", { query }));

    try {
        const location = getDefaultLocation(query) || await findLocation(query);
        await loadLocation(location);
    } catch (error) {
        setStatus(error.message, true);
        setLoading(false);
    }
}

function saveCurrentLocation() {
    if (!currentLocation) {
        setStatus(t("noWeatherToSave"), true);
        return;
    }

    if (upsertSavedLocation(currentLocation)) {
        setStatus(t("alreadySaved", { name: currentLocation.name }));
        return;
    }

    setStatus(t("savedLocation", { name: currentLocation.name }));
}

function updateSettings(nextSettings) {
    currentSettings = { ...currentSettings, ...nextSettings };
    saveSettings();
    applySettings();
    updateUrlState();

    if (currentLocation && currentWeatherData) {
        renderWeather(currentLocation, currentWeatherData);
    }
}

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = locationInput.value.trim();

    if (!query) {
        setStatus(t("enterLocation"), true);
        return;
    }

    loadSearch(query);
});

saveLocationButton.addEventListener("click", saveCurrentLocation);

clearSavedButton.addEventListener("click", () => {
    savedLocations = [];
    saveSavedLocations();
    renderSavedLocations();
    setStatus(t("clearedSaved"));
});

savedLocationsElement.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete-location]");

    if (deleteButton) {
        deleteSavedLocation(Number(deleteButton.dataset.locationIndex));
        return;
    }

    const pinButton = event.target.closest("[data-pin-location]");

    if (pinButton) {
        pinSavedLocation(Number(pinButton.dataset.locationIndex));
        return;
    }

    const moveButton = event.target.closest("[data-move-location]");

    if (moveButton) {
        moveSavedLocation(Number(moveButton.dataset.locationIndex), moveButton.dataset.moveLocation);
        return;
    }

    const button = event.target.closest(".saved-location-load");

    if (!button) {
        return;
    }

    const location = savedLocations[Number(button.dataset.locationIndex)];

    if (location) {
        closeSidebar();
        loadLocation(location);
    }
});

savedLocationsElement.addEventListener("dragstart", (event) => {
    const item = event.target.closest(".saved-location");

    if (item) {
        event.dataTransfer.setData("text/plain", item.dataset.locationIndex);
    }
});

savedLocationsElement.addEventListener("dragover", (event) => {
    if (event.target.closest(".saved-location")) {
        event.preventDefault();
    }
});

savedLocationsElement.addEventListener("drop", (event) => {
    const item = event.target.closest(".saved-location");
    const fromIndex = Number(event.dataTransfer.getData("text/plain"));
    const toIndex = Number(item?.dataset.locationIndex);

    if (!Number.isInteger(fromIndex) || !Number.isInteger(toIndex) || fromIndex === toIndex) {
        return;
    }

    const nextLocations = [...savedLocations];
    const [movedLocation] = nextLocations.splice(fromIndex, 1);
    nextLocations.splice(toIndex, 0, movedLocation);
    savedLocations = nextLocations;
    saveSavedLocations();
    renderSavedLocations();
});

sidebarToggle.addEventListener("click", openSidebar);
sidebarClose.addEventListener("click", closeSidebar);
sidebarBackdrop.addEventListener("click", closeSidebar);

languageSelect.addEventListener("change", () => {
    updateSettings({ language: languageSelect.value });
});

themeSelect.addEventListener("change", () => {
    updateSettings({ theme: themeSelect.value });
});

layoutSelect.addEventListener("change", () => {
    updateSettings({ layout: layoutSelect.value });
});

unitsSelect.addEventListener("change", () => {
    updateSettings({ units: unitsSelect.value });
});

activitySelect.addEventListener("change", () => {
    updateSettings({ activity: activitySelect.value });
});

rainNotificationsToggle.addEventListener("change", async () => {
    if (!rainNotificationsToggle.checked) {
        updateSettings({ rainNotifications: false });
        window.clearTimeout(rainNotificationTimer);
        return;
    }

    if (!("Notification" in window)) {
        rainNotificationsToggle.checked = false;
        setStatus(t("notificationsDenied"), true);
        return;
    }

    const permission = Notification.permission === "granted" ? "granted" : await Notification.requestPermission();
    if (permission !== "granted") {
        rainNotificationsToggle.checked = false;
        setStatus(t("notificationsDenied"), true);
        return;
    }

    updateSettings({ rainNotifications: true });
    setStatus(t("notificationsOn"));
});

rainMapControlsElement.addEventListener("click", (event) => {
    const button = event.target.closest("[data-map-frame]");
    if (button && currentWeatherData?.rainMap) {
        renderRainMapFrame(currentWeatherData.rainMap, Number(button.dataset.mapFrame));
    }
});

chartToggleElements.forEach((toggle) => {
    toggle.addEventListener("change", () => {
        updateSettings({
            charts: {
                ...currentSettings.charts,
                [toggle.value]: toggle.checked
            }
        });
    });
});

moduleToggleElements.forEach((toggle) => {
    toggle.addEventListener("change", () => {
        updateSettings({
            modules: {
                ...currentSettings.modules,
                [toggle.value]: toggle.checked
            }
        });
    });
});

hourlyPrevButton.addEventListener("click", () => scrollHourly(-1));
hourlyNextButton.addEventListener("click", () => scrollHourly(1));

locationButton.addEventListener("click", () => {
    if (!navigator.geolocation) {
        setStatus(t("geolocationUnsupported"), true);
        return;
    }

    setLoading(true);
    setStatus(t("waitingPermission"));

navigator.geolocation.getCurrentPosition(
        async (position) => {
            try {
                const geolocationLocation = await findNearestLocation(
                    position.coords.latitude,
                    position.coords.longitude
                );

                upsertSavedLocation(geolocationLocation);
                loadLocation(geolocationLocation);
            } catch {
                const fallbackLocation = {
                    name: t("yourLocation"),
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    timezone: "auto"
                };

                upsertSavedLocation(fallbackLocation);
                loadLocation(fallbackLocation);
            }
        },
        () => {
            setLoading(false);
            setStatus(t("locationDenied"), true);
        },
        { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 }
    );
});

window.addEventListener("offline", updateConnectionStatus);
window.addEventListener("online", () => {
    setStatus(t("online"));
});

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    showInstallBanner("installReady", "installButton");
});

installButton.addEventListener("click", async () => {
    if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        await deferredInstallPrompt.userChoice;
        deferredInstallPrompt = null;
        hideInstallBanner();
        return;
    }

    window.location.reload();
});

dismissInstallButton.addEventListener("click", () => {
    writeJson(installDismissedKey, true);
    hideInstallBanner();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.body.classList.contains("sidebar-open")) {
        closeSidebar();
    }
});

async function initializeApp() {
    requestPersistentStorage();

    currentSettings = readSettings();
    savedLocations = readSavedLocations();
    currentPinnedLocation = readPinnedLocation();

    applyUrlOptions();
    applySettings();
    renderSavedLocations();
    registerServiceWorker();
    updateConnectionStatus();

    const cachedWeather = readCachedWeatherSync();
    const lastLocation = readLastLocation();
    const startupLocation = startupUrlLocation || currentPinnedLocation || lastLocation;
    startupUsedFallbackLocation = !startupLocation;

    if (cachedWeather && (!startupLocation || cachedWeather.location.name === startupLocation.name)) {
        renderWeather(cachedWeather.location, cachedWeather.data);

        if (isStale(cachedWeather.savedAt)) {
            setStatus(t("staleData", { time: formatDate(cachedWeather.savedAt, { hour: "2-digit", minute: "2-digit" }) }));
        } else {
            setStatus(t("cachedForecast"));
        }
    }

    if (startupLocation && typeof startupLocation === "string") {
        locationInput.value = startupLocation;
        loadSearch(startupLocation);
    } else if (startupLocation) {
        locationInput.value = startupLocation.name;
        loadLocation(startupLocation);
    } else {
        loadSearch(locationInput.value.trim() || "Berlin");
    }

    restorePersistentStorage().then(() => {
        const restoredPinnedLocation = readPinnedLocation();
        const restoredLastLocation = readLastLocation();
        const restoredStartupLocation = restoredPinnedLocation || restoredLastLocation;

        if (startupUsedFallbackLocation && restoredStartupLocation) {
            startupUsedFallbackLocation = false;
            locationInput.value = restoredStartupLocation.name;
            loadLocation(restoredStartupLocation);
        }

        savedLocations = readSavedLocations();
        currentPinnedLocation = restoredPinnedLocation;
        renderSavedLocations();
    }).catch(() => {});
}

initializeApp().catch(() => {
    currentSettings = readSettings();
    savedLocations = readSavedLocations();
    applyUrlOptions();
    applySettings();
    renderSavedLocations();
    registerServiceWorker();
    updateConnectionStatus();
    loadSearch(locationInput.value.trim() || "Berlin");
});
