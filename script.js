let header = document.createElement("header");
let heading = document.createElement("h1");
heading.textContent = "Predict person's country using name";
header.append(heading);
document.body.append(header);

let main = document.createElement("main");
let form = document.createElement("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  processSearch();
});

let searchInput = document.createElement("input");
searchInput.type = "search";
searchInput.placeholder = "Enter person's name";
searchInput.required = true;
form.append(searchInput);

let searchButton = document.createElement("button");
searchButton.textContent = "Search";
form.append(searchButton);

main.append(form);
document.body.append(main);

function processSearch() {
  let searchText = searchInput.value;
  main.innerHTML = "";
  main.append(form);
  try {
    if (/^[a-z\s]+$/i.test(searchText)) {
      checkUserCountry(searchText.trim()).catch((error) => handleError(error));
    } else {
      throw new Error(
        "Name should be atleast 1 character length and contain only alphabets"
      );
    }
  } catch (error) {
    handleError(error);
  }
}

async function checkUserCountry(name) {
  let response = await fetch(`https://api.nationalize.io?name=${name}`);
  let countryData = await response.json();
  if (countryData.hasOwnProperty("country")) {
    if (countryData.country.length === 0) {
      throw new Error("We don't have data on this name");
    } else {
      processCountryData(countryData.country);
    }
  } else {
    throw new Error("Unable to get at the moment. Please try later");
  }
}
