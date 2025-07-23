# 🌦️ Weather Info Map

An interactive weather application built with **React**, **Leaflet.js**, and the **OpenWeatherMap API**. Click anywhere on the map to view real-time weather information for that location.
---

## 🔍 Features

- 🌍 Interactive world map using **React Leaflet**
- 📍 Click any location to place a marker and get weather data
- ☀️ Displays temperature, wind speed, humidity, pressure, and more
- 📡 Live data from **OpenWeatherMap API**
- 📌 Custom marker icons and responsive UI

---

## 📦 Tech Stack

- **React** (Frontend)
- **React Leaflet** & **Leaflet.js** (Map)
- **OpenWeatherMap API** (Weather data)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ardr000005/Weather-Info-Map.git
cd Weather-Info-Map
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## 🔑 API Key Setup

This app uses **OpenWeatherMap API**. Get a free API key here:  
👉 https://openweathermap.org/api

Then, in `WeatherMap.js`, replace:

```js
const API_KEY = "YOUR_API_KEY";
```

with your actual API key.

---

## 📁 Project Structure

```
Weather-Info-Map/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   ├── style.css
│   ├── WeatherDetails.js      # Component to display weather info
│   └── WeatherMap.js          # Component with map and fetch logic
│
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
└── README.md
```

---

## 📸 Demo Screenshot

<img width="1916" height="900" alt="image" src="https://github.com/user-attachments/assets/93caa9b4-ddc6-482d-8b7d-94e2702f4c5b" />


---

## 🌍 Deployment Options

You can deploy this React app using:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)

---

## 📜 License

This project is licensed under the **MIT License**.

---

