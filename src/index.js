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

  //function for updating condition of the searched city
  let descriptionElement = document.querySelector("#description");
  console.log(response.date.condition.description);
  descriptionElement.innerHTML = response.condition.description;
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
