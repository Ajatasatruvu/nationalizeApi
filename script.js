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
