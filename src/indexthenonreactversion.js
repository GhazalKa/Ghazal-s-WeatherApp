// alert("hi");
//declaring seprated functions is good seprate concern

function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  console.log(response.data.temperature.current);
  temperatureElement.innerHTML = response.data.temperature.current;

  //I had a bug here! the temperature.current wasn't updating cus the element wasn't declared
  let temperature = response.data.temperature.current;
  temperature.innerHTML = Math.round(temperature);

  let cityElement = document.querySelector("#city");
  console.log("cityElement.value");
  cityElement.innerHTML = response.data.city;

  // for updating condition of the searched city
  let descriptionElement = document.querySelector("#description");
  console.log(response.data.condition.description);
  descriptionElement.innerHTML = response.data.condition.description;

  // for updating the humidity
  let humidityElement = document.querySelector("#humidity");
  console.log(response.data.temperature.humidity);
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

  //for wind-speed
  let windSpeedElement = document.querySelector("#wind-speed");
  console.log(response.data.wind.speed);
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;

  //for time
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  // timeElement.innerHTML = `${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
  timeElement.innerHTML = formatDate(date);

  //for icon
  let iconElement = document.querySelector("#icon");
  console.log(response.data.condition.icon_url);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon"/>`;

  getForecast(response.data.city);
}

//function to turn days of the week  (number between 0-6)to sat,sun,...
function formatDate(date) {
  let hours = date.getHours();
  let minuntes = date.getMinutes();
  // if (minutes < 10) {
  //   minutes = `0${minutes}`;
  // }

  // if (hours < 10) {
  //   hours = `0${hours}`;
  // }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minuntes}`;
}

function searchCity(city) {
  //make api call and update the interface
  let apiKey = "5362bd34cf050a03d30tbfffa6oc1faa";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(refreshWeather);
}
function handleSearchSubmit(event) {
  //   console.log(searchFormElement);
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  //   console.log(searchInput.value);

  //the value of search input is send to above function by the following code
  searchCity(searchInput.value);
}

//function to map data.time to current day
function formatDay(timestemp) {
  let date = new Date(timestemp * 1000);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[date.getDay()];
}

//the goal of this function is to get the forcast of a city
function getForecast(city) {
  let apiKey = "5362bd34cf050a03d30tbfffa6oc1faa";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&unit=metric`;
  console.log(apiUrl);
  axios(apiUrl).then(displayForecast);
}

//forecast :
function displayForecast(response) {
  console.log(response.data);

  let forecastHtml = "";
  response.data.daily.forEach(function (day) {
    // forecast.innerHTML = `
    forecastHtml =
      forecastHtml +
      `
          <div class="col-2">
            <div class="weather-forecast-date">${formatDay(day.time)}</div>
            <br />
            <img
              src="${day.condition.icon_url}"
              alt=""
              width="42"
            />
            <div class="weather-forecast-temperatures">
              <span class="weather-forecast-temperatures-max">${Math.round(
                day.temperature.maximum
              )}°</span>
              <span class="weather-forecast-temperatures-min">${Math.round(
                day.temperature.minimum
              )}°</span>
            </div>
          </div>
`;
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#search-form");
// console.log(searchFormElement);
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");

// displayForecast();
