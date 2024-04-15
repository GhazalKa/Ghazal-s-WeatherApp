// alert("hi");
//declaring seprated functions is good seprate concern

function refreshWeather(response) {
  console.log(response.data.temperature.current);
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  console.log("cityElement.value");
  cityElement.innerHTML = response.data.city;

  temperature.innerHTML = Math.round(temperature);
}
function searchcity(city) {
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
  searchcity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
// console.log(searchFormElement);
searchFormElement.addEventListener("submit", handleSearchSubmit);
