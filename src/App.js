import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Weather App</h1>
        <Weather defaultCity="Bangkok" />

        <br />
        <footer>
          🙌🏼 This project was coded by Sophia Lee and it is{" "}
          <a
            href="https://github.com/philosophially/weather-project-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>{" "}
          👩🏼‍💻
        </footer>
      </div>
    </div>
  );
}

export default App;
