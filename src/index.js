// alert("hi");
function handleSearchSubmit(event) {
  //   console.log(searchFormElement);
  event.preventDefault;
  let searchInput = document.querySelector("#search-form-input");
  //   console.log(searchInput.value);
  let cityElement = document.querySelector("#city");
  // console.log("cityElement.value");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
// console.log(searchFormElement);
searchFormElement.addEventListener("submit", handleSearchSubmit);
