let sumoData;

let currentSort = "none";
let currentPage = 1;
let startId = 0;

function getData() { // fetch data from local storage
    sumoData = JSON.parse(localStorage['sumo']);
}

sumoData = JSON.parse(localStorage.getItem('sumo'));
createTable(sumoData);

function createTable(sumoData) { // creates table
    let tableBody = document.querySelector('#standings tbody');
    tableBody.replaceChildren();
    let counter = startId + 10;

    createPagination(sumoData, currentPage);

    sumoData.forEach((sumo) => { // for each sumo wrestler
        if (sumoData.indexOf(sumo) >= startId) { // if index > startID
            if (counter > startId) { // limits to 10 per page
                const row = document.createElement('tr');
                let link = document.createElement('a');
                let td = document.createElement('td');

                td.textContent = sumo.rank; // rank
                row.appendChild(td);
                
                td = document.createElement('td'); // surname
                link.href = 'sumos.html?id=' + sumo.id; 
                link.textContent = sumo.surname;
                td.appendChild(link);
                row.appendChild(td);

                td = document.createElement('td'); // real name
                td.textContent = sumo.name;
                td.classList.add('is-hidden-mobile');
                row.appendChild(td);

                td = document.createElement('td'); // wins
                td.textContent = sumo.w;
                row.appendChild(td);

                td = document.createElement('td'); // losses
                td.textContent = sumo.l;
                td.classList.add('is-hidden-mobile');
                row.appendChild(td);

                td = document.createElement('td'); // win rate
                td.textContent = (Math.round((sumo.w / (parseInt(sumo.w) + parseInt(sumo.l)) * 100) * 10) / 10 + "%");
                td.classList.add('is-hidden-touch');
                row.appendChild(td);

                td = document.createElement('td'); // stable name
                td.textContent = sumo.stable;
                td.classList.add('is-hidden-touch');
                row.appendChild(td);

                td = document.createElement('td'); // height
                td.textContent = sumo.height;
                td.classList.add('is-hidden-touch');
                row.appendChild(td);

                td = document.createElement('td'); // weight
                td.textContent = sumo.weight;
                td.classList.add('is-hidden-touch');
                row.appendChild(td);

                tableBody.appendChild(row);
                counter--;
            }
        }
    });
}

function createPagination(sumoData, currentPage) { // creates pagination
    const list = document.querySelector('.pagination-list');
    const maxPage = Math.ceil(sumoData.length / 10);

    const maxRight = document.querySelector('.max-right'); // makes maxRight go to maxPage
    maxRight.setAttribute('onclick', 'setPage(' + maxPage + ', sumoData);');

    for (let page = maxPage; page > -1; page--) { // removes previous pagination
        let previous = document.querySelector('#page-' + (parseInt(page) + 1));
        if (previous != null) {
            previous.remove();
        }
    }

    for (let page = maxPage; page > 0; page--) { // creates each page button
        let li = document.createElement('li');
        let a = document.createElement('a');

        a.setAttribute('onclick', 'setPage(' + page + ', sumoData);');
        a.classList.add('pagination-link', 'page-index');
        a.id = "page-" + page;
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

function sort(field) { // sorts sumo array based on parameters
    if (field === 'Surname') { // surname (alphabetical)
        if (currentSort === 'surname') { // is it currently sorted by surname? > sort backwards
            sumoData = sumoData.sort((teamA, teamB) => {
                if (teamA.surname.substring(0, 1) == "Ō") { // special case for character Ō (sorts after Z)
                    teamA.surname = "O" + teamA.surname.substring(1);
                } else if (teamB.surname.substring(0, 1) == "Ō") {
                    teamB.surname = "O" + teamB.surname.substring(1);
                }
                return (teamA.surname > teamB.surname) ? -1 : 1;
            });
            currentSort = 'none';
        } else { // is it currently not sorted by surname? > sort alphabetically
            sumoData = sumoData.sort((teamA, teamB) => {
                if (teamA.surname.substring(0, 1) == "Ō") {
                    teamA.surname = "O" + teamA.surname.substring(1);
                } else if (teamB.surname.substring(0, 1) == "Ō") {
                    teamB.surname = "O" + teamB.surname.substring(1);
                }
                return (teamA.surname < teamB.surname) ? -1 : 1;
            });
            currentSort = 'surname';
        }
    } else if (field === 'Name') { // real name (alphabetical)
        if (currentSort === 'name') {
            sumoData = sumoData.sort((teamA, teamB) => {
                return (teamA.name > teamB.name) ? -1 : 1;
            });
            currentSort = 'none';
        } else {
            sumoData = sumoData.sort((teamA, teamB) => {
                return (teamA.name < teamB.name) ? -1 : 1;
            });
            currentSort = 'name';
        }
    } else if (field === 'Wins') { // wins
        if (currentSort === 'wins') {
            sumoData = sumoData.sort((teamA, teamB) => teamA.w - teamB.w);
            currentSort = 'none';
        } else {
            sumoData = sumoData.sort((teamA, teamB) => teamB.w - teamA.w);
            currentSort = 'wins';
        }
    } else if (field === 'Losses') { // losses
        if (currentSort === 'losses') {
            sumoData = sumoData.sort((teamA, teamB) => teamA.l - teamB.l);
            currentSort = 'none';
        } else {
            sumoData = sumoData.sort((teamA, teamB) => teamB.l - teamA.l);
            currentSort = 'losses';
        }
    } else if (field === 'Rate') { // rate
        if (currentSort === 'rate') {
            sumoData = sumoData.sort((teamA, teamB) => (teamA.w / (parseInt(teamA.w) + parseInt(teamA.l))) - (teamB.w / (parseInt(teamB.w) + parseInt(teamB.l))));
            currentSort = 'none';
        } else {
            sumoData = sumoData.sort((teamA, teamB) => (teamB.w / (parseInt(teamB.w) + parseInt(teamB.l))) - (teamA.w / (parseInt(teamA.w) + parseInt(teamA.l))));
            currentSort = 'rate';
        }
    } else if (field === 'Rank') { // rank (uses rankNum)
        if (currentSort === 'rank') {
            sumoData = sumoData.sort((teamA, teamB) => teamA.rankNum - teamB.rankNum);
            currentSort = 'none';
        } else {
            sumoData = sumoData.sort((teamA, teamB) => teamB.rankNum - teamA.rankNum);
            currentSort = 'rank';
        }
    } else if (field === 'Stable') { // stable (alphabetical)
        if (currentSort === 'stable') {
            sumoData = sumoData.sort((teamA, teamB) => {
                return (teamA.stable > teamB.stable) ? -1 : 1;
            });
            currentSort = 'none';
        } else {
            sumoData = sumoData.sort((teamA, teamB) => {
                return (teamA.stable < teamB.stable) ? -1 : 1;
            });
            currentSort = 'stable';
        }
    } else if (field === 'Height') { // height
        if (currentSort === 'height') {
            sumoData = sumoData.sort((teamA, teamB) => {
                return (parseFloat(teamA.height.substring(0, 1) * 12) + parseFloat(teamA.height.substring(4, teamA.height.indexOf(".") + 2)) > parseFloat(teamB.height.substring(0, 1) * 12) + parseFloat(teamB.height.substring(4, teamB.height.indexOf(".") + 2))) ? -1 : 1;
            });
            currentSort = 'none';
        } else {
            sumoData = sumoData.sort((teamA, teamB) => {
                return (parseFloat(teamA.height.substring(0, 1) * 12) + parseFloat(teamA.height.substring(4, teamA.height.indexOf(".") + 2)) < parseFloat(teamB.height.substring(0, 1) * 12) + parseFloat(teamB.height.substring(4, teamB.height.indexOf(".") + 2))) ? -1 : 1;
            });
            currentSort = 'height';
        }
    } else if (field === 'Weight') { // weight
        if (currentSort === 'weight') {
            sumoData = sumoData.sort((teamA, teamB) => {
                return (parseFloat(teamA.weight.substring(0, 5))) > (parseFloat(teamB.weight.substring(0, 5))) ? -1 : 1;
            });
            currentSort = 'none';
        } else {
            sumoData = sumoData.sort((teamA, teamB) => {
                return (parseFloat(teamA.weight.substring(0, 5))) < (parseFloat(teamB.weight.substring(0, 5))) ? -1 : 1;
            });
            currentSort = 'weight';
        }
    }
    createTable(sumoData);
}

function nextPage() { // (>) next page in pagination
    startId += 10;
    if (startId > sumoData.length) startId = sumoData.length - (sumoData.length % 10); // is start > # of sumos? -> shorten to limit
    if (startId + 10 >= sumoData.length) { // can there not be a next page?
        document.querySelector(".pagination-next").setAttribute("disabled", "");
        document.querySelector(".max-left").removeAttribute("disabled", "");
        document.querySelector(".max-right").setAttribute("disabled", "");
    }
    if (startId <= sumoData.length) { // is start within # of sumos?
        document.querySelector(".pagination-previous").removeAttribute("disabled", "");
        document.querySelector(".max-left").removeAttribute("disabled", "");
        if (currentPage < sumoData.length / 10) currentPage++;
        createTable(sumoData);
    }
}

function backPage() { // (<) prev page in pagination
    startId -= 10;
    if (startId < 0) startId = 0; // is start < 0? -> set to 0
    if (startId - 10 < 0) { // can there not be a prev page?
        document.querySelector(".pagination-previous").setAttribute("disabled", "");
        document.querySelector(".max-left").setAttribute("disabled", "");
        document.querySelector(".max-right").removeAttribute("disabled", "");
    }
    if (startId >= 0) { // is start a valid number?
        document.querySelector(".pagination-next").removeAttribute("disabled", "");
        document.querySelector(".max-right").removeAttribute("disabled", "");
        if (currentPage > 1) currentPage--;
        createTable(sumoData);
    }
}

function setPage(page, sumoData) { // sets page for maxLeft and maxRight
    let maxPage = Math.ceil(sumoData.length / 10);
    startId = (page - 1) * 10;
    currentPage = page;

    if (page == 1) { // if currentPage is 1 > disable previous, enable next
        document.querySelector(".pagination-previous").setAttribute("disabled", "");
        document.querySelector(".pagination-next").removeAttribute("disabled", "");
        document.querySelector(".max-left").setAttribute("disabled", "");
        document.querySelector(".max-right").removeAttribute("disabled", "");
    } else if (page == maxPage) { // if currentPage is maxPage > disable next, enable prev
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
    createTable(sumoData);
}