import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Bangkok" />

        <br />
        <footer>
          🙌🏼 This project was coded by Sophia Lee and it is{" "}
          <a
            href="https://github.com/philosophially/react-weather-project-new"
            target="_blank"
            rel="noopener noreferrer"
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
