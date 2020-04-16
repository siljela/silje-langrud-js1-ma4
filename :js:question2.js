const gamesUrl = "https://api.rawg.io/api/games";
const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + gamesUrl;

async function fetchGames() {
  try {
    const response = await fetch(corsEnabledUrl);
    const games = await response.json();
    createGames(games);
  } catch (error) {
    console.log(error);
  }
}
fetchGames();
function createGames(games) {
  const gamesContainer = document.querySelector(".results");
  let html = "";
  for (let i = 0; i < games.results.length; i++) {
    //if (!games.results[i].name) {
    //  continue;
    //}
    //console.log(games.results[i].name);
    html += `<div class="game">
          <h2>${games.results[i].name}</h2>
          <img src="${games.results[i].background_image}" alt="Name of game" /></div>
          `;
  }
  gamesContainer.innerHTML = html;
}
