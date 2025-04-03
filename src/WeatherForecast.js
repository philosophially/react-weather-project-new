import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [dataloaded, setDataloaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setDataloaded(false);
  }, [props.city]);

  // useEffect in place to change 'setDataloaded to (false)' when the city name changes.

  function handleResponse(response) {
    setForecast(response.data.daily);
    setDataloaded(true);
  }

  if (dataloaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "f66t20de5fb4b38bf2a054fdo3ed7389";
    let city = props.city;
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleResponse);

    return null;
  }
}
