const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const name = params.get("name");

const gameUrl = "https://api.rawg.io/api/games/4200";
const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + gameUrl;

async function createGameDetails() {
  const heading = document.querySelector("h1");
  const description = document.querySelector(".description");
  const image = document.querySelector(".image");
  try {
    const response = await fetch(corsEnabledUrl);
    const details = await response.json();
    console.log("details", details);

    heading.innerHTML = details.name;
    description.innerHTML = details.description;
    image.innerHTML += `<div
              class="image"
              style="background-image: url('${details.background_image}');"
              ></div>`;
  } catch (error) {
    heading.innerHTML = "An error occured";
    console.log(error);
  }
}
createGameDetails();
