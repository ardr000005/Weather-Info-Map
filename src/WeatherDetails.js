import React from 'react';

const WeatherDetails = ({ weather }) => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
      <h3>Weather Details</h3>
      <p>City: {weather.city}</p>
      <p>Temperature: {weather.temp} °C</p>
      <p>Description: {weather.description}</p>
      <p>Country: {weather.sys.country}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Pressure: {weather.main.pressure} hPa</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
      <p>Clouds: {weather.clouds.all}%</p>
    </div>
  );
};

export default WeatherDetails;
