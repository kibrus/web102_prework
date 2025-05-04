/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
*/

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA)

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
*/

// grab the element with the id games-container
const gamesContainer = document.getElementById("games-container");

// create a function that adds all data from the games array to the page
function addGamesToPage(games) {
    // 1) loop over each game object
    for (let i = 0; i < games.length; i++) {
        const game = games[i];

        // 2) create a card <div> and add the CSS class
        const card = document.createElement("div");
        card.classList.add("game-card");

        // 3) fill the card with an image and two properties
        card.innerHTML = `
          <img class="game-img"
               src="${game.img}"
               alt="${game.name} screenshot" />
          <h3>${game.name}</h3>
          <p>${game.description}</p>
          <p><strong>Pledged:</strong> $${game.pledged.toLocaleString()}</p>
        `;

        // 4) append the card to the games container
        gamesContainer.appendChild(card);
    }
}

addGamesToPage(GAMES_JSON);

/*************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page
 ************************************************************************/

// Step 1: Total individual contributions
const contributionsCard = document.getElementById("num-contributions");
const totalContributions = GAMES_JSON
    .reduce((acc, game) => acc + game.backers, 0);
contributionsCard.innerText = totalContributions.toLocaleString();

// Step 2: Total amount raised
const raisedCard = document.getElementById("total-raised");
const totalRaised = GAMES_JSON
    .reduce((acc, game) => acc + game.pledged, 0);
raisedCard.innerText = `$${totalRaised.toLocaleString()}`;

// Step 3: Total number of games
const gamesCard = document.getElementById("num-games");
gamesCard.innerText = GAMES_JSON.length;


// show only games that do not yet have enough funding
function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);
    const unfundedGames = GAMES_JSON.filter(game => game.pledged < game.goal);
    addGamesToPage(unfundedGames);
    console.log(unfundedGames.length);  // 👉 for your own debugging
}

// show only games that are fully funded
function filterFundedOnly() {
    deleteChildElements(gamesContainer);
    const fundedGames = GAMES_JSON.filter(game => game.pledged >= game.goal);
    addGamesToPage(fundedGames);
    console.log(fundedGames.length);
}

// show all games
function showAllGames() {
    deleteChildElements(gamesContainer);
    addGamesToPage(GAMES_JSON);
}

// select each button in the "Our Games" section
const unfundedBtn = document.getElementById("unfunded-btn");
const fundedBtn = document.getElementById("funded-btn");
const allBtn = document.getElementById("all-btn");

// add event listeners with the correct functions to each button
unfundedBtn.addEventListener("click", filterUnfundedOnly);
fundedBtn.addEventListener("click", filterFundedOnly);
allBtn.addEventListener("click", showAllGames);



/*************************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
*/
/*****************************************************************************
 * Challenge 6: Add more information at the top of the page about the company
 *****************************************************************************/

// grab the description container
const descriptionContainer = document.getElementById("description-container");

// Step 1: count unfunded games
const unfundedCount = GAMES_JSON.filter(game => game.pledged < game.goal).length;

// Step 2: build the summary string with a ternary for pluralization
const summaryStr = `
  A total of $${totalRaised.toLocaleString()} has been raised for 
  ${GAMES_JSON.length} games. 
  ${unfundedCount} ${unfundedCount === 1 ? "game remains" : "games remain"} unfunded.
`;

// Step 3: create a <p>, set its text, and append it
const summaryEl = document.createElement("p");
summaryEl.innerText = summaryStr;
descriptionContainer.appendChild(summaryEl);


// grab the containers for top games
const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

// sort a copy of the games by pledged amount descending
const sortedGames = [...GAMES_JSON].sort((a, b) => b.pledged - a.pledged);

// destructure to grab the top two and the rest
const [top1, top2, ...rest] = sortedGames;

// create & append the top pledge game
const top1El = document.createElement("p");
top1El.innerText = top1.name;
firstGameContainer.appendChild(top1El);

// create & append the runner-up game
const top2El = document.createElement("p");
top2El.innerText = top2.name;
secondGameContainer.appendChild(top2El);
