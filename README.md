# julianverse-weather

A small static weather app using Open-Meteo.

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

- `place=Berlin` loads a city by search.
- `lat=52.52&lon=13.41&name=Berlin` loads coordinates with a display name.
- `lang=en|de`, `theme=light|dark`, `layout=expanded|compact`, and `units=metric|imperial` override settings.
- `charts=temperature,rain,wind,uv` controls visible charts.
- `save=1` saves the loaded place and `pin=1` makes it the default place.
- `install=0` hides install prompts.
