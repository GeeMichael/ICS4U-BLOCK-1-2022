let gameData;
let sumoData;
let startId = 0;
let currentPage = 1;
let isSorted = false;
let date1;
let date2;

let counter = 0;

function getData() {
    gameData = JSON.parse(localStorage['games']);
    sumoData = JSON.parse(localStorage['sumo']);
}

gameData = JSON.parse(localStorage.getItem('games'));
sumoData = JSON.parse(localStorage.getItem('sumo'));

createTable();

function checkMatches() {
    date1Val = document.querySelector('.date1');
    date2Val = document.querySelector('.date2');
    let error = document.createElement('p');
    let i = document.createElement('i');
    i.classList.add("fa-solid", "fa-triangle-exclamation", "has-text-white")
    error.setAttribute("class", "help has-text-white is-centered");
    let hero = document.querySelector('.is-error');
    let buttonText = document.querySelector('.error');
    buttonText.replaceChildren();
    if (date1Val.value > date2Val.value || date1Val.value == null || date2Val.value == null) {
        error.textContent = "Invalid dates!";
        buttonText.appendChild(i);
        buttonText.appendChild(error);
        hero.classList.remove('error-height');
    } else {
        hero.classList.add('error-height');
        isSorted = true;
        currentPage = 1;
        startId = 0;
        date1 = date1Val.value;
        date2 = date2Val.value;
        createTable();
    }
}

function createTable() {
    if (!isSorted) {
        date1 = "0000-00-00";
        date2 = "9999-99-99"
    }
    counter = 0;
    const table = document.querySelector(".games-list");
    table.replaceChildren();
    gameNum = 0;
    gameData.forEach((game) => {
        if (game.date >= date1 && game.date <= date2) {
            if (gameNum < 8 && counter >= startId) {
                let div = document.createElement('div');
                div.classList.add('column', 'is-6');

                let article = document.createElement('article');
                article.classList.add('box');

                let date = document.createElement('p');
                date.classList.add('has-text-weight-light', 'date-text');
                date.textContent = getDate(game.date);

                let columns = document.createElement('div');
                columns.classList.add('columns');
                let columnEast = document.createElement('div');
                columnEast.classList.add('column', 'has-text-left');
                let columnWest = document.createElement('div');
                columnWest.classList.add('column', 'has-text-right');

                let textEast = document.createElement('p');
                textEast.textContent = "EAST";
                textEast.classList.add('subtitle');
                let textWest = document.createElement('p');
                textWest.textContent = "WEST";
                textWest.classList.add('subtitle');

                let eastSpan = document.createElement('span');
                eastSpan.classList.add('is-pulled-right');
                let westSpan = document.createElement('span');
                westSpan.classList.add('is-pulled-left');

                let sumo = sumoData.filter(sumo => sumo.id == game.east);
                let east = document.createElement('a');
                east.classList.add('title');
                east.textContent = sumo[0].surname;
                east.href = 'sumos.html?id=' + sumo[0].id;
                eastSpan.appendChild(east);

                sumo = sumoData.filter(sumo => sumo.id == game.west);
                let west = document.createElement('a');
                west.classList.add('title');
                west.textContent = sumo[0].surname;
                west.href = 'sumos.html?id=' + sumo[0].id;
                westSpan.appendChild(west);

                let trophy = document.createElement('i');
                trophy.classList.add('fa-solid', 'fa-trophy', 'has-text-success');

                if (game.winner == "east") {
                    columnEast.classList.add('has-background-success-light');
                    textEast.classList.add('has-text-success');
                    eastSpan.appendChild(trophy);
                } else {
                    columnWest.classList.add('has-background-success-light');
                    textWest.classList.add('has-text-success');
                    westSpan.appendChild(trophy);
                }

                columnEast.appendChild(eastSpan);
                columnWest.appendChild(westSpan);

                columnEast.appendChild(textEast);
                columnEast.appendChild(east);
                columnWest.appendChild(textWest);
                columnWest.appendChild(west);

                columns.appendChild(columnEast);
                columns.appendChild(columnWest);
                article.appendChild(date);
                article.appendChild(columns);
                div.appendChild(article);
                table.appendChild(div);
                gameNum++;
            }
            counter++;
        }
    })
    createPagination();
}

function createPagination() {
    numGames = 0;
    gameData.forEach((game) => {
        if (game.date >= date1 && game.date <= date2) {
            numGames++;
        }
    })

    const gamesList = document.querySelector('.games-list');
    const list = document.querySelector('.pagination-list');
    const maxMaxPage = Math.ceil(gameData.length / 8);
    const maxLeft = document.querySelector('.max-left');
    const back = document.querySelector('.pagination-previous')
    const next = document.querySelector('.pagination-next');
    const maxRight = document.querySelector('.max-right');
    let maxPage = Math.ceil(numGames / 8);
    let hero = document.querySelector('.is-error');

    maxRight.setAttribute('onclick', 'setPage(' + maxPage + ', gameData);');

    if (maxPage == 0) {
        let error = document.createElement('p');
        let hero = document.querySelector('.is-error');
        let buttonText = document.querySelector('.error');
        let i = document.createElement('i');

        error.setAttribute("class", "help has-text-white is-centered");
        i.classList.add("fa-solid", "fa-triangle-exclamation", "has-text-white")
        error.textContent = "No games found!";
        buttonText.replaceChildren();
        buttonText.appendChild(i);
        buttonText.appendChild(error);

        hero.classList.remove('error-height');

        next.setAttribute('disabled', '');
        maxRight.setAttribute('disabled', '');
        maxPage = 1;
    } else if (maxPage == 1) {
        hero.classList.add('error-height');
        next.setAttribute('disabled', '');
        maxRight.setAttribute('disabled', '');
    }
    if (currentPage == 1 && maxPage !== 1) {
        hero.classList.add('error-height');
        back.setAttribute('disabled', '');
        maxLeft.setAttribute('disabled', '');
        next.removeAttribute('disabled');
        maxRight.removeAttribute('disabled');
    }

    for (let page = maxMaxPage; page > 0; page--) {
        let previous = document.querySelector('#page-' + page);
        if (previous != null) {
            previous.remove();
        }
    }

    for (let page = maxPage; page > 0; page--) {
        let li = document.createElement('li');
        let a = document.createElement('a');

        a.classList.add('pagination-link', 'page-index');
        a.id = "page-" + page;
        a.setAttribute('onclick', 'setPage(' + page + ', gameData);');
        a.textContent = page;

        if (page == currentPage) {
            a.classList.add('is-current');
        } else {
            a.classList.remove('is-current');
        }

        li.appendChild(a);
        list.insertBefore(li, list.children[2]);
    }
}

function nextPage() {
    numGames = 0;
    gameData.forEach((game) => {
        if (game.date >= date1 && game.date <= date2) {
            numGames++;
        }
    })
    startId += 8;
    if (startId > numGames) {
        startId = numGames - (numGames % 8);
    }
    if (startId + 8 >= numGames) {
        document.querySelector(".pagination-next").setAttribute("disabled", "");
        document.querySelector(".max-left").removeAttribute("disabled", "");
        document.querySelector(".max-right").setAttribute("disabled", "");
    }
    if (startId < numGames) {
        document.querySelector(".pagination-previous").removeAttribute("disabled", "");
        document.querySelector(".max-left").removeAttribute("disabled", "");
        if (currentPage < numGames / 8) {
            currentPage++;
            console.log(currentPage);
        }
        createTable();
    }
}

function backPage() {
    startId -= 8;
    if (startId < 0) {
        startId = 0;
    }
    if (startId - 8 < 0) {
        document.querySelector(".pagination-previous").setAttribute("disabled", "");
        document.querySelector(".max-left").setAttribute("disabled", "");
        document.querySelector(".max-right").removeAttribute("disabled", "");
    }
    if (startId >= 0) {
        document.querySelector(".pagination-next").removeAttribute("disabled", "");
        document.querySelector(".max-right").removeAttribute("disabled", "");
        if (currentPage > 1) {
            currentPage--;
            console.log(currentPage);
        };
        createTable(date1, date2);
    }
}

function setPage(page, date1, date2) {
    let maxPage = Math.ceil(gameData.length / 8);
    startId = (page - 1) * 8;
    currentPage = page;
    console.log(currentPage);
    if (page == 1) {
        document.querySelector(".pagination-previous").setAttribute("disabled", "");
        document.querySelector(".pagination-next").removeAttribute("disabled", "");
        document.querySelector(".max-left").setAttribute("disabled", "");
        document.querySelector(".max-right").removeAttribute("disabled", "");
    } else if (page == maxPage) {
        document.querySelector(".pagination-previous").removeAttribute("disabled", "");
        document.querySelector(".pagination-next").setAttribute("disabled", "");
        document.querySelector(".max-left").removeAttribute("disabled", "");
        document.querySelector(".max-right").setAttribute("disabled", "");
    } else {
        document.querySelector(".pagination-next").removeAttribute("disabled", "")
        document.querySelector(".pagination-previous").removeAttribute("disabled", "");
        document.querySelector(".max-left").removeAttribute("disabled", "");
        document.querySelector(".max-right").removeAttribute("disabled", "");
    }
    createTable(date1, date2);
}

function getDate(date) {
    let final = "";
    if (date.substring(5, 7) == "01") {
        final += "Jan. ";
    } else if (date.substring(5, 7) == "02") {
        final += "Feb. ";
    } else if (date.substring(5, 7) == "03") {
        final += "Mar. ";
    } else if (date.substring(5, 7) == "04") {
        final += "Apr. ";
    } else if (date.substring(5, 7) == "05") {
        final += "May ";
    } else if (date.substring(5, 7) == "06") {
        final += "Jun. ";
    } else if (date.substring(5, 7) == "07") {
        final += "Jul. ";
    } else if (date.substring(5, 7) == "08") {
        final += "Aug. ";
    } else if (date.substring(5, 7) == "09") {
        final += "Sep. ";
    } else if (date.substring(5, 7) == "10") {
        final += "Oct. ";
    } else if (date.substring(5, 7) == "11") {
        final += "Nov. ";
    } else if (date.substring(5, 7) == "12") {
        final += "Dec. ";
    }
    return final + date.substring(8, 10) + ", " + date.substring(0, 4);
}