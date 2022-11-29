function start() {
    // store data from local storage
    const dataString = localStorage.getItem('sumo');
    const gameData = localStorage.getItem('games');
    const sumos = JSON.parse(dataString);
    const games = JSON.parse(gameData);

    // take parameter from url
    let params = (new URL(document.location)).searchParams;
    const sumo = sumos.filter(sumo => sumo.id == params.get('id'));

    // put each thing in textContent
    document.querySelector('#name').textContent = sumo[0].surname + " " + sumo[0].firstname;
    document.querySelector('#sumo-name').textContent = document.querySelector('#name').textContent;
    document.querySelector('#real-name').textContent = sumo[0].name;
    document.querySelector('#win-loss').textContent = sumo[0].w + " - " + sumo[0].l;
    document.querySelector('#rank').textContent = sumo[0].rank;

    // avoid dividing with zeros
    if (sumo[0].w + sumo[0].l <= 0) document.querySelector('#win-percent').textContent = "0%"; else document.querySelector('#win-percent').textContent = Math.round((sumo[0].w / (parseInt(sumo[0].w) + parseInt(sumo[0].l)) * 100) * 10) / 10 + "%";

    document.querySelector('#stable').textContent = sumo[0].stable + " Stable";
    document.querySelector('#height').textContent = sumo[0].height;
    document.querySelector('#weight').textContent = sumo[0].weight;

    createTable(sumos, sumo, games);
}

function createTable(sumos, sumo, games) { // create games table
    let gameBody = document.querySelector('#games tbody');
    gameBody.replaceChildren();

    games.forEach((game) => { // every game with a specific wrestler
        if (game.east == sumo[0].id || game.west == sumo[0].id) {
            addGame(sumos, sumo, game, gameBody);
        }
    });
}

function addGame(sumos, sumo, game, gameBody) { // add game to table
    let row = document.createElement('tr');
    let td = document.createElement('td');
    let link1 = document.createElement('a');
    let link2 = document.createElement('a');

    let winIcon = document.createElement('i');
    let loseIcon = document.createElement('i');
    winIcon.classList.add("fa-solid", 'fa-trophy');
    loseIcon.classList.add("fa-solid", 'fa-circle-xmark');

    // game date
    td.textContent = game.date;
    row.appendChild(td);

    // east sumo
    td = document.createElement('td');
    link1.href = 'sumos.html?id=' + game.east;
    link1.textContent = sumos[game.east - 1].surname;
    td.appendChild(link1);
    row.appendChild(td);

    // west sumo
    td = document.createElement('td');
    link2.href = 'sumos.html?id=' + game.west;
    link2.textContent = sumos[game.west - 1].surname;
    td.appendChild(link2);
    row.appendChild(td);

    // win icon
    td = document.createElement('td');
    td.classList.add("has-text-centered");
    if (game.winner == "east" && game.east == sumo[0].id || game.winner == "west" && game.west == sumo[0].id) {
        td.appendChild(winIcon);
    } else {
        td.appendChild(loseIcon);
    }
    row.appendChild(td);

    gameBody.appendChild(row);
}