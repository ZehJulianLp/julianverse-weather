# julianverse-weather

A small static weather app using Open-Meteo.

## Features

- Search weather by city name.
- Use browser geolocation for the current position.
- Show current temperature, conditions, wind, humidity, and a five day forecast.
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
