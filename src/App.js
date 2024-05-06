import "./index.css";

export default function App() {
  return (
    <div className="weather-app">
      <header>
        <form className="search-form" id="search-form">
          <input
            type="search"
            placeholder="Enter a city.."
            className="search-form-input"
            id="search-form-input"
            required=""
          />
          <input
            type="submit"
            className="search-form-button"
            defaultValue="Search"
          />
        </form>
      </header>
      <main>
        <div className="weather-app-data">
          <div>
            <h1 className="weather-app-city" id="city">
              Paris
            </h1>
            <p className="weather-app-details">
              <span id="time" />
              Tuesday 14:49,
              <span id="description">scattered clouds</span>
              <br />
              Humidity: <strong id="humidity">66%</strong> , Wind:
              <strong id="wind-speed">3.13km/h</strong>
            </p>
            {/* <p>testttttttttttttttt</p> */}
          </div>
          <div className="weather-app-temperature-container">
            <div id="icon">
              {/* 🌤️ */}
              <img
                className="weather-app-icon"
                src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
                alt=""
              />
            </div>
            <div className="weather-app-temperature" id="temperature">
              12
            </div>
            <div className="weatehr-app-unit">°C</div>
          </div>
        </div>
        <div className="weather-forecast" id="forecast">
          {/* there must be something wrong with this row!but I cannot find it why it's not making columns for each day and all of it is in one column! */}
          {/* <div class="row">
      <div class="col-2">
        <div class="weather-forecast-date">Thu</div>
        <br />
        <img
          src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
          alt=""
          width="42"
        />
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperatures-max">18°</span>
          <span class="weather-forecast-temperatures-min">20°</span>
        </div>
      </div>
    </div> */}
        </div>
      </main>
      <footer>
        <p>
          This project was coded by
          <a href="https://github.com/GhazalKa" target="_blank">
            Ghazal Kamari
          </a>
          and is
          <a
            href="https://github.com/GhazalKa/Ghazal-s-WeatherApp"
            target="_blank"
          >
            on GitHub
          </a>
          and
          <a href="https://ghazal-s-weather-app.vercel.app/" target="_blank">
            hosted on vercel
          </a>
        </p>
      </footer>
    </div>
  );
}
