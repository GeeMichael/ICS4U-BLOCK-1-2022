let sumoData;
let currentSort = "none";
let startId = 0;
let currentPage = 1;

function getData() {
    sumoData = JSON.parse(localStorage['sumo']);
}

sumoData = JSON.parse(localStorage.getItem('sumo'));
createTable(sumoData);

function createTable(sumoData) {
    let tableBody = document.querySelector('#standings tbody');
    tableBody.replaceChildren();
    let counter = startId + 10;
    let currentPageId = "page" + currentPage;

    createPagination(sumoData, currentPage);

    sumoData.forEach((sumo) => {
        if (sumoData.indexOf(sumo) >= startId) {
            if (counter > startId) {
                const row = document.createElement('tr');
                let td = document.createElement('td');
                let link = document.createElement('a');

                td.textContent = sumo.rank;
                row.appendChild(td);

                td = document.createElement('td');
                link.href = 'sumos.html?id=' + sumo.id;
                link.textContent = sumo.surname;
                td.appendChild(link);
                row.appendChild(td);

                td = document.createElement('td');
                td.textContent = sumo.name;
                td.classList.add('is-hidden-mobile');
                row.appendChild(td);

                td = document.createElement('td');
                td.textContent = sumo.w;
                row.appendChild(td);

                td = document.createElement('td');
                td.textContent = sumo.l;
                td.classList.add('is-hidden-mobile');
                row.appendChild(td);

                td = document.createElement('td');
                td.textContent = (Math.round((sumo.w / (parseInt(sumo.w) + parseInt(sumo.l)) * 100) * 10) / 10 + "%");
                td.classList.add('is-hidden-touch');
                row.appendChild(td);

                td = document.createElement('td');
                td.textContent = sumo.stable;
                td.classList.add('is-hidden-touch');
                row.appendChild(td);

                td = document.createElement('td');
                td.textContent = sumo.height;
                td.classList.add('is-hidden-touch');
                row.appendChild(td);

                td = document.createElement('td');
                td.textContent = sumo.weight;
                td.classList.add('is-hidden-touch');
                row.appendChild(td);

                tableBody.appendChild(row);
                counter--;
            }
        }
    });
}

function createPagination(sumoData, currentPage) {
    const list = document.querySelector('.pagination-list');
    const maxPage = Math.ceil(sumoData.length / 10);

    const maxRight = document.querySelector('.max-right');
    maxRight.setAttribute('onclick', 'setPage(' + maxPage + ', sumoData);');

    for (let page = maxPage; page > -1; page--) {
        let previous = document.querySelector('#page-' + (parseInt(page) + 1));
        if (previous != null) {
            previous.remove();
        }
    }

    for (let page = maxPage; page > 0; page--) {
        let li = document.createElement('li');
        let a = document.createElement('a');

        a.classList.add('pagination-link', 'page-index');
        a.id = "page-" + page;
        a.setAttribute('onclick', 'setPage(' + page + ', sumoData);');
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

function sort(field) {
    if (field === 'Surname') {
        if (currentSort === 'surname') {
            sumoData = sumoData.sort((teamA, teamB) => {
                if (teamA.surname.substring(0, 1) == "Ō") {
                    teamA.surname = "O" + teamA.surname.substring(1);
                } else if (teamB.surname.substring(0, 1) == "Ō") {
                    teamB.surname = "O" + teamB.surname.substring(1);
                }
                return (teamA.surname > teamB.surname) ? -1 : 1;
            });
            currentSort = 'none';
        } else {
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
    } else if (field === 'Name') {
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
    } else if (field === 'Wins') {
        if (currentSort === 'wins') {
            sumoData = sumoData.sort((teamA, teamB) => teamA.w - teamB.w);
            currentSort = 'none';
        } else {
            sumoData = sumoData.sort((teamA, teamB) => teamB.w - teamA.w);
            currentSort = 'wins';
        }
    } else if (field === 'Losses') {
        if (currentSort === 'losses') {
            sumoData = sumoData.sort((teamA, teamB) => teamA.l - teamB.l);
            currentSort = 'none';
        } else {
            sumoData = sumoData.sort((teamA, teamB) => teamB.l - teamA.l);
            currentSort = 'losses';
        }
    } else if (field === 'Rate') {
        if (currentSort === 'rate') {
            sumoData = sumoData.sort((teamA, teamB) => (teamA.w / (parseInt(teamA.w) + parseInt(teamA.l))) - (teamB.w / (parseInt(teamB.w) + parseInt(teamB.l))));
            currentSort = 'none';
        } else {
            sumoData = sumoData.sort((teamA, teamB) => (teamB.w / (parseInt(teamB.w) + parseInt(teamB.l))) - (teamA.w / (parseInt(teamA.w) + parseInt(teamA.l))));
            currentSort = 'rate';
        }
    } else if (field === 'Rank') {
        if (currentSort === 'rank') {
            sumoData = sumoData.sort((teamA, teamB) => teamA.rankNum - teamB.rankNum);
            currentSort = 'none';
        } else {
            sumoData = sumoData.sort((teamA, teamB) => teamB.rankNum - teamA.rankNum);
            currentSort = 'rank';
        }
    } else if (field === 'Stable') {
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
    } else if (field === 'Height') {
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
    } else if (field === 'Weight') {
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

function nextPage() {
    startId += 10;
    if (startId > sumoData.length) {
        startId = sumoData.length - (sumoData.length % 10);
    }
    if (startId + 10 >= sumoData.length) {
        document.querySelector(".pagination-next").setAttribute("disabled", "");
        document.querySelector(".max-left").removeAttribute("disabled", "");
        document.querySelector(".max-right").setAttribute("disabled", "");
    }
    if (startId <= sumoData.length) {
        document.querySelector(".pagination-previous").removeAttribute("disabled", "");
        document.querySelector(".max-left").removeAttribute("disabled", "");
        if (currentPage < sumoData.length / 10) {
            currentPage++;
        }
        createTable(sumoData);
    }
}

function backPage() {
    startId -= 10;
    if (startId < 0) {
        startId = 0;
    }
    if (startId - 10 < 0) {
        document.querySelector(".pagination-previous").setAttribute("disabled", "");
        document.querySelector(".max-left").setAttribute("disabled", "");
        document.querySelector(".max-right").removeAttribute("disabled", "");
    }
    if (startId >= 0) {
        document.querySelector(".pagination-next").removeAttribute("disabled", "");
        document.querySelector(".max-right").removeAttribute("disabled", "");
        if (currentPage > 1) {
            currentPage--;
        };
        createTable(sumoData);
    }
}

function setPage(page, sumoData) {
    let maxPage = Math.ceil(sumoData.length / 10);
    startId = (page - 1) * 10;
    currentPage = page;
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
    createTable(sumoData);
}