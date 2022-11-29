let gameData;
let sumoData;

let isSorted = false;
let currentPage = 1;
let counter = 0;
let startId = 0;
let date1;
let date2;

function getData() {
    gameData = JSON.parse(localStorage['games']);
    sumoData = JSON.parse(localStorage['sumo']);
}

gameData = JSON.parse(localStorage.getItem('games'));
sumoData = JSON.parse(localStorage.getItem('sumo'));

createTable();

function checkMatches() { // check if date range is valid
    let date1Val = document.querySelector('.date1');
    let date2Val = document.querySelector('.date2');
    let hero = document.querySelector('.is-error');

    let i = document.createElement('i');
    let error = document.createElement('p');
    let buttonText = document.querySelector('.error');
    i.classList.add("fa-solid", "fa-triangle-exclamation", "has-text-white")
    error.setAttribute("class", "help has-text-white is-centered"); 
    buttonText.replaceChildren();    

    if (date1Val.value > date2Val.value || date1Val.value == null || date2Val.value == null) { // if date2 < date1 or they are null
        hero.classList.remove('error-height');
        error.textContent = "Invalid dates!";
        buttonText.appendChild(i);
        buttonText.appendChild(error);
    } else { // date is valid
        hero.classList.add('error-height');
        date1 = date1Val.value;
        date2 = date2Val.value;
        isSorted = true;
        currentPage = 1;
        startId = 0;
        createTable();
    }
}

function createTable() {
    const table = document.querySelector(".games-list");
    table.replaceChildren();

    counter = 0;
    gameNum = 0;

    if (!isSorted) { // if not sorted, set to dates to entire range
        date1 = "0000-00-00";
        date2 = "9999-99-99";
    }
    
    gameData.forEach((game) => { // for every game
        if (game.date >= date1 && game.date <= date2) { // if its in time frame
            if (gameNum < 8 && counter >= startId) { // and there are <8 games currently on screen
                
                // big columns
                let div = document.createElement('div');
                div.classList.add('column', 'is-6');

                // boxes
                let article = document.createElement('article');
                article.classList.add('box');

                // date
                let date = document.createElement('p');
                date.classList.add('has-text-weight-light', 'date-text');
                date.textContent = getDate(game.date);

                // player columns (east, west)
                let columns = document.createElement('div');
                let columnEast = document.createElement('div');
                let columnWest = document.createElement('div');
                columns.classList.add('columns');
                columnEast.classList.add('column', 'has-text-left');
                columnWest.classList.add('column', 'has-text-right');

                // EAST/WEST text
                let textEast = document.createElement('p');
                let textWest = document.createElement('p');
                textEast.textContent = "EAST";
                textEast.classList.add('subtitle');
                textWest.textContent = "WEST";
                textWest.classList.add('subtitle');

                let eastSpan = document.createElement('span');
                let westSpan = document.createElement('span');
                eastSpan.classList.add('is-pulled-right');
                westSpan.classList.add('is-pulled-left');

                // sumo names
                let sumo = sumoData.filter(sumo => sumo.id == game.east);
                let east = document.createElement('a');
                east.href = 'sumos.html?id=' + sumo[0].id;
                east.textContent = sumo[0].surname;
                east.classList.add('title');                
                eastSpan.appendChild(east);

                sumo = sumoData.filter(sumo => sumo.id == game.west);
                let west = document.createElement('a');
                west.href = 'sumos.html?id=' + sumo[0].id;
                west.textContent = sumo[0].surname;
                west.classList.add('title');                
                westSpan.appendChild(west);

                // add trophy icon to winner
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

                // append time!
                columnEast.appendChild(eastSpan);
                columnEast.appendChild(textEast);
                columnEast.appendChild(east);

                columnWest.appendChild(westSpan);
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

    gameData.forEach((game) => { // get number of valid games
        if (game.date >= date1 && game.date <= date2) {
            numGames++;
        }
    })

    const list = document.querySelector('.pagination-list');
    const maxMaxPage = Math.ceil(gameData.length / 8); // most # pages possible
    let hero = document.querySelector('.is-error');
    let maxPage = Math.ceil(numGames / 8); // max page #
    
    const maxLeft = document.querySelector('.max-left');
    const back = document.querySelector('.pagination-previous')
    const next = document.querySelector('.pagination-next');
    const maxRight = document.querySelector('.max-right');
    maxRight.setAttribute('onclick', 'setPage(' + maxPage + ', gameData);');

    if (maxPage == 0) { // if no games are within time frame
        let buttonText = document.querySelector('.error');
        let hero = document.querySelector('.is-error');
        let error = document.createElement('p');        
        let i = document.createElement('i');

        // add error
        i.classList.add("fa-solid", "fa-triangle-exclamation", "has-text-white")
        error.setAttribute("class", "help has-text-white is-centered");
        error.textContent = "No games found!";
        buttonText.replaceChildren();
        buttonText.appendChild(i);
        buttonText.appendChild(error);

        hero.classList.remove('error-height'); // set non-zero height for error
        maxRight.setAttribute('disabled', ''); // disable next buttons
        next.setAttribute('disabled', '');
    
        maxPage = 1;
    } else if (maxPage == 1) { // if only one page is available
        hero.classList.add('error-height'); // set zero height for error
        maxRight.setAttribute('disabled', '');
        next.setAttribute('disabled', '');
    }
    if (currentPage == 1 && maxPage !== 1) { // if current page is 1 AND there are more pages
        hero.classList.add('error-height');
        back.setAttribute('disabled', '');
        maxLeft.setAttribute('disabled', '');
        next.removeAttribute('disabled');
        maxRight.removeAttribute('disabled');
    }

    for (let page = maxMaxPage; page > 0; page--) { // remove previous pages
        let previous = document.querySelector('#page-' + page);
        if (previous != null) previous.remove();
    }

    for (let page = maxPage; page > 0; page--) { // create page buttons
        let li = document.createElement('li');
        let a = document.createElement('a');

        a.classList.add('pagination-link', 'page-index');
        a.id = "page-" + page;
        a.setAttribute('onclick', 'setPage(' + page + ', gameData);');
        a.textContent = page;

        if (page == currentPage) a.classList.add('is-current')
        else a.classList.remove('is-current');

        li.appendChild(a);
        list.insertBefore(li, list.children[2]);
    }
}

function nextPage() { // (>) next page functionality
    numGames = 0;
    startId += 8;

    // get # of games in time frame
    gameData.forEach((game) => {if (game.date >= date1 && game.date <= date2) numGames++});

    if (startId > numGames) { // if start > total games
        startId = numGames - (numGames % 8);
    }
    if (startId + 8 >= numGames) { // can a next page exist?
        document.querySelector(".pagination-next").setAttribute("disabled", "");
        document.querySelector(".max-left").removeAttribute("disabled", "");
        document.querySelector(".max-right").setAttribute("disabled", "");
    }
    if (startId < numGames) { // is start a valid #?
        document.querySelector(".pagination-previous").removeAttribute("disabled", "");
        document.querySelector(".max-left").removeAttribute("disabled", "");
        if (currentPage < numGames / 8) currentPage++;
        createTable();
    }
}

function backPage() { // (<) back page functionality
    startId -= 8;
    if (startId < 0) startId = 0;
    if (startId - 8 < 0) {
        document.querySelector(".pagination-previous").setAttribute("disabled", "");
        document.querySelector(".max-left").setAttribute("disabled", "");
        document.querySelector(".max-right").removeAttribute("disabled", "");
    }
    if (startId >= 0) {
        document.querySelector(".pagination-next").removeAttribute("disabled", "");
        document.querySelector(".max-right").removeAttribute("disabled", "");
        if (currentPage > 1) currentPage--;
        createTable(date1, date2);
    }
}

function setPage(page, date1, date2) { // set page for maxLeft and maxRight
    let maxPage = Math.ceil(gameData.length / 8);
    startId = (page - 1) * 8;
    currentPage = page;

    if (page == 1) { // if currentPage is 1 > disable previous, enable next
        document.querySelector(".pagination-previous").setAttribute("disabled", "");
        document.querySelector(".pagination-next").removeAttribute("disabled", "");
        document.querySelector(".max-left").setAttribute("disabled", "");
        document.querySelector(".max-right").removeAttribute("disabled", "");
    } else if (page == maxPage) {  // if currentPage is maxPage > disable next, enable prev
        document.querySelector(".pagination-previous").removeAttribute("disabled", "");
        document.querySelector(".pagination-next").setAttribute("disabled", "");
        document.querySelector(".max-left").removeAttribute("disabled", "");
        document.querySelector(".max-right").setAttribute("disabled", "");
    } else { // enable everything
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