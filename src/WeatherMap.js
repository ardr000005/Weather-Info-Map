import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet'; // Import Leaflet to define a custom icon
import 'leaflet/dist/leaflet.css';
import WeatherDetails from './WeatherDetails'; // Import WeatherDetails component

// Define a custom icon
const customIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // Custom marker image URL
  iconSize: [32, 32], // Size of the icon [width, height]
  iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -32], // Point from which the popup should open
});

const WeatherMap = () => {
  const [position, setPosition] = useState(null); // Store the clicked coordinates
  const [weather, setWeather] = useState(null);   // Store fetched weather data

  const API_KEY = "<API KEY HERE>"; // Replace with your OpenWeatherMap API key

  // Function to fetch weather data
  const fetchWeather = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setWeather({
        city: data.name || "Unknown",
        temp: data.main.temp,
        description: data.weather[0].description,
        sys: data.sys,
        main: data.main,
        wind: data.wind,
        clouds: data.clouds
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // Custom component to handle map clicks
  function LocationMarker() {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng; // Get latitude and longitude
        setPosition(e.latlng);
        fetchWeather(lat, lng); // Fetch weather for the clicked location
      },
    });

    return position === null ? null : (
      <Marker position={position} icon={customIcon}> {/* Set custom icon here */}
        <Popup>
          Latitude: {position.lat} <br />
          Longitude: {position.lng}
        </Popup>
      </Marker>
    );
  }

  return (
    <div>
      <h2>Weather Information Map</h2>
      <MapContainer
        center={[20.5937, 78.9629]} // Center map on India
        zoom={5}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker /> {/* Custom marker component */}
      </MapContainer>

      {weather && <WeatherDetails weather={weather} />} {/* Display weather details */}
    </div>
  );
};

export default WeatherMap;
