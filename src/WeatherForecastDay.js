import React from "react";
import WeatherIconSheCodes from "./WeatherIconSheCodes";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIconSheCodes code={props.condition.icon} size={32} />
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-maximum">{maxTemperature()}</span>
        <span className="WeatherForecast-temp-minimum">{minTemperature()}</span>
      </div>
    </div>
  );
}
