import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div ClassName="Weather">
      <ul>
        <li>Thursday 02:00</li>
        <li>Partly Cloudy</li>
      </ul>
      <div ClassName="row">
        <div ClassName="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly Cloudy"
          />
          26°C
        </div>
        <div ClassName="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 90%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
