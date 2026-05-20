# julianverse-weather

A small static weather app using Open-Meteo.

Live app: <https://julianverse.de/weather/>

## Features

- Search weather by city name.
- Use browser geolocation for the current position.
- Show current temperature, conditions, wind, humidity, and apparent temperature.
- Show weather icons, an hourly forecast, and a seven day forecast with precipitation, UV, wind, and sunrise/sunset details.
- Show temperature and rain chance charts for the next hours.
- Save places locally and switch between them from the sidebar.
- Pin a default place, delete saved places, and reorder them with buttons or drag and drop.
- Choose English or German, light or dark theme, compact or expanded layout, and metric or imperial units.
- Show derived weather alerts, a today-at-a-glance summary, and stale offline data indicators.
- Install as a basic PWA on supported browsers.
- Cache the app shell for repeat visits.
- No API key required.

## Local Usage

Open `index.html` directly in a browser for a quick static preview.

For PWA testing, serve the folder with a local static server so the service worker can register:

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

Geolocation requires browser permission and may require a secure context outside localhost.

## URL Parameters

The app state can be shared or preconfigured through query parameters:

| Parameter | Values | Description |
| --- | --- | --- |
| `place` | City search text, for example `Berlin` | Searches and loads a place by name. |
| `lat` / `lon` | Coordinates, for example `52.52` and `13.41` | Loads weather for exact coordinates. Use both parameters together. |
| `name` | Display name | Optional label for coordinate URLs. |
| `lang` | `en`, `de` | Sets the UI language. |
| `theme` | `light`, `dark` | Sets the color theme. |
| `layout` | `expanded`, `compact` | Sets the density of the weather layout. |
| `units` | `metric`, `imperial` | Sets weather units. |
| `charts` | Comma-separated list: `temperature`, `rain`, `wind`, `uv` | Controls which weather trend charts are visible. `rain` maps to precipitation. |
| `save` | `1` | Saves the loaded place locally. |
| `pin` | `1` | Pins the loaded place as the default place. |
| `install` | `0` | Hides install prompts. |

Examples:

```text
https://julianverse.de/weather/?place=Berlin
https://julianverse.de/weather/?lat=52.52&lon=13.41&name=Berlin
https://julianverse.de/weather/?place=Hannover&lang=de&theme=dark&units=metric
https://julianverse.de/weather/?place=Berlin&charts=temperature,rain,wind,uv&save=1&pin=1
```

When used as an installed PWA, the app usually starts from the manifest `start_url` instead of the last visible URL. Last selected places, saved places, pinned places, settings, and cached weather are therefore persisted locally in browser storage.
