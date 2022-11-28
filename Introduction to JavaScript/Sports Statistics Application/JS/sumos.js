function start() {
    const dataString = localStorage.getItem('sumo');
    const gameData = localStorage.getItem('games');

    const sumos = JSON.parse(dataString);
    const games = JSON.parse(gameData);

    let params = (new URL(document.location)).searchParams;
    const sumo = sumos.filter(sumo => sumo.id == params.get('id'));
    let tableBody = document.querySelector('#standings tbody');

    document.querySelector('#name').textContent = sumo[0].surname + " " + sumo[0].firstname;
    document.querySelector('#sumo-name').textContent = document.querySelector('#name').textContent;
    document.querySelector('#real-name').textContent = sumo[0].name;
    document.querySelector('#win-loss').textContent = sumo[0].w + " - " + sumo[0].l;
    document.querySelector('#rank').textContent = sumo[0].rank;

    if (sumo[0].w + sumo[0].l <= 0) {
        document.querySelector('#win-percent').textContent = "0%";
    } else {
        document.querySelector('#win-percent').textContent = Math.round((sumo[0].w / (parseInt(sumo[0].w) + parseInt(sumo[0].l)) * 100) * 10) / 10 + "%";
    }

    document.querySelector('#stable').textContent = sumo[0].stable + " Stable";
    document.querySelector('#height').textContent = sumo[0].height;
    document.querySelector('#weight').textContent = sumo[0].weight;

    createTable(sumos, sumo, games);
}

function createTable(sumos, sumo, games) {
    let gameBody = document.querySelector('#games tbody');
    gameBody.replaceChildren();

    games.forEach((game) => {
        if (game.east == sumo[0].id || game.west == sumo[0].id) {
            addGame(sumos, sumo, game, gameBody);
        }
    });
}

function addGame(sumos, sumo, game, gameBody) {
    const row = document.createElement('tr');
    let td = document.createElement('td');
    let link1 = document.createElement('a');
    let link2 = document.createElement('a');
    let winIcon = document.createElement('i');
    winIcon.classList.add("fa-solid", 'fa-trophy');
    let loseIcon = document.createElement('i');
    loseIcon.classList.add("fa-solid", 'fa-circle-xmark');

    td.textContent = game.date;
    row.appendChild(td);

    td = document.createElement('td');
    //let sumo = sumoData.filter(sumo => sumo.id == game.east);
    link1.href = 'sumos.html?id=' + game.east;
    link1.textContent = sumos[game.east - 1].surname;
    td.appendChild(link1);
    row.appendChild(td);


    td = document.createElement('td');
    //sumo = sumoData.filter(sumo => sumo.id == game.west);
    link2.href = 'sumos.html?id=' + game.west;
    link2.textContent = sumos[game.west - 1].surname;
    td.appendChild(link2);
    row.appendChild(td);

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