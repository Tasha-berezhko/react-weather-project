import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Kyiv",
    temperature: 12,
    date: "Tuesday 12:40",
    description: "Clear",
    humidity: 80,
    wind: 10,
    precipitation: 0,
  };
  return (
    <div className="weather-app">
      <div className="Weather">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>Last updated: {weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="{weatherData.description}"
              />
              <div>
                <strong> {weatherData.temperature}</strong>
                <span className="units">
                  <a href="/"> ℃</a> | <a href="/">℉</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation {weatherData.precipitation}%</li>
              <li>Humidity {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
        <div className="weather-forecast"></div>
      </div>
      <small>
        <a
          href="https://github.com/Tasha-berezhko/react-weather-project"
          target="blank"
        >
          Open-source code
        </a>
      </small>
    </div>
  );
}
