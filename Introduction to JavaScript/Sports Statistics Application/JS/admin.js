let sumoData;
let gameData
function loadPlease() {
    sumoData = JSON.parse(localStorage['sumo']);
    gameData = JSON.parse(localStorage['games']);
    createOptions(sumoData);
}

function createOptions(sumoData) {
    let optionBody = document.querySelector('.option-1');
    let optionBody2 = document.querySelector('.option-2');
    optionBody.replaceChildren();
    optionBody2.replaceChildren();
    let i = 0;

    sumoData.forEach((sumo) => {
        let option = document.createElement('option');
        let option2 = document.createElement('option');
        option.setAttribute("id", i);
        option.textContent = sumo.surname;
        option2.textContent = sumo.surname;
        optionBody.appendChild(option);
        optionBody2.appendChild(option2);
        i++
    })
}

function checkGame() {
    const wrestler1 = document.querySelector(".option-1").value;
    const wrestler2 = document.querySelector(".option-2").value;
    const win1 = document.querySelector(".win-1").value;
    const win2 = document.querySelector(".win-2").value;
    let error = document.createElement('p');
    let popup = document.querySelector('.send-parent')
    error.setAttribute("class", "is-danger");
    let buttonText = document.querySelector('.send');
    buttonText.replaceChildren();
    if (wrestler1 == wrestler2) {
        error.textContent = "Please choose two different names.";
        buttonText.appendChild(error);
        popup.classList.remove("is-white");
        popup.classList.remove("error-height");
        popup.classList.add("is-danger");
    } else if (win1 == win2 && win1 == "L") {
        error.textContent = "Please choose a winning wrestler.";
        buttonText.appendChild(error);
        popup.classList.remove("is-white");
        popup.classList.remove("error-height");
        popup.classList.add("is-danger");
    } else if (win1 == win2 && win1 == "W") {
        error.textContent = "Please choose a losing wrestler.";
        buttonText.appendChild(error);
        popup.classList.remove("is-white");
        popup.classList.remove("error-height");
        popup.classList.add("is-danger");
    } else if (document.querySelector(".date").value == "") {
        error.textContent = "Please choose a valid date.";
        buttonText.appendChild(error);
        popup.classList.remove("is-white");
        popup.classList.remove("error-height");
        popup.classList.add("is-danger");
    } else {
        popup.classList.add("is-white");
        popup.classList.add("error-height");
        popup.classList.remove("is-danger");
        submitGame();
    }
}

function checkSumo() {
    const newSurname = document.querySelector(".surname").value;
    const newFirstname = document.querySelector(".firstname").value;
    const newRealname = document.querySelector(".realname").value;
    const newW = document.querySelector(".w").value;
    const newL = document.querySelector(".l").value;
    const newRank = document.querySelector(".rank").value;
    const newFeet = document.querySelector(".feet").value;
    const newInches = document.querySelector(".inches").value;
    const newStable = document.querySelector(".stable").value;
    const newWeight = document.querySelector(".weight").value;

    let error = document.createElement('p');
    error.classList.add('is-danger');
    let buttonText = document.querySelector('.send-2');
    buttonText.replaceChildren();
    let popup = document.querySelector('.send-parent-2');

    if (newSurname == "" || newFirstname == "" || newRealname == "" || newW == "" || newL == "" || newFeet == "" || newInches == "" || newWeight == "" || newStable == "") {
        error.textContent = "Please fill out all inputs.";
        buttonText.appendChild(error);
        popup.classList.remove("is-white");
        popup.classList.remove("error-height");
        popup.classList.add("is-danger");
    } else if (isNaN(parseInt(newW)) || isNaN(parseInt(newL))) {
        error.textContent = "Please input numbers for wins and losses.";
        popup.classList.remove("is-white");
        popup.classList.remove("error-height");
        popup.classList.add("is-danger");
        buttonText.appendChild(error);
    } else if (isNaN(parseInt(newFeet)) || isNaN(parseInt(newInches))) {
        error.textContent = "Please input numbers for wrestler height.";
        buttonText.appendChild(error);
        popup.classList.remove("is-white");
        popup.classList.remove("error-height");
        popup.classList.add("is-danger");
    } else if (isNaN(parseInt(newWeight))) {
        error.textContent = "Please input numbers for wrestler weight.";
        buttonText.appendChild(error);
        popup.classList.remove("is-white");
        popup.classList.remove("error-height");
        popup.classList.add("is-danger");
    } else if (newW < 0 || newL < 0 || newFeet < 0 || newInches < 0 || newWeight < 0) {
        error.textContent = "Please input positive numbers.";
        buttonText.appendChild(error);
        popup.classList.remove("is-white");
        popup.classList.remove("error-height");
        popup.classList.add("is-danger");
    } else {
        popup.classList.add("is-white");
        popup.classList.add("error-height");
        popup.classList.remove("is-danger");
        submitSumo();
    }
}

const sumo = [
    {
        "id": 1,
        "surname": "Terunofuji",
        "firstname": "Haruo",
        "name": "Seizan Suginomori",
        "rank": "Yokozuna",
        "rankNum": 1,
        "w": 50,
        "l": 26,
        "stable": "Isegahama",
        "height": "6ft 3.6in",
        "weight": "399.0lb"
    },
    {
        "id": 2,
        "surname": "Takakeishō",
        "firstname": "Mitsunobu",
        "name": "Takanobu Satō",
        "rank": "Ōzeki",
        "rankNum": "2",
        "w": 50,
        "l": 29,
        "stable": "Tokiwayama",
        "height": "5ft 8.9in",
        "weight": "359.4lb"
    },
    {
        "id": 3,
        "surname": "Shōdai",
        "firstname": "Naoya",
        "name": "Naoya Shōdai",
        "rank": "Ōzeki",
        "rankNum": "2",
        "w": 43,
        "l": 47,
        "stable": "Tokitsukaze",
        "height": "6ft 0.0in",
        "weight": "357.1lb"
    },
    {
        "id": 4,
        "surname": "Wakatakakage",
        "firstname": "Atsushi",
        "name": "Atsushi Ōnami",
        "rank": "Sekiwake",
        "rankNum": "3",
        "w": 51,
        "l": 28,
        "stable": "Arashio",
        "height": "6ft 0.0in",
        "weight": "291.0lb"
    },
    {
        "id": 5,
        "surname": "Hōshōryu",
        "firstname": "Tomokatsu",
        "name": "Sugarragchaa Byambasuren",
        "rank": "Sekiwake",
        "rankNum": "3",
        "w": 47,
        "l": 32,
        "stable": "Tatsunami",
        "height": "6ft 0.8in",
        "weight": "308.6lb"
    },
    {
        "id": 6,
        "surname": "Mitakeumi",
        "firstname": "Hisashi",
        "name": "Hisashi Ōmichi",
        "rank": "Sekiwake",
        "rankNum": "3",
        "w": 40,
        "l": 33,
        "stable": "Dewanoumi",
        "height": "5ft 10.5in",
        "weight": "377.0lb"
    },
    {
        "id": 7,
        "surname": "Tamawashi",
        "firstname": "Ichirō",
        "name": "Batjargal Munkh-orgil",
        "rank": "Komusubi",
        "rankNum": "4",
        "w": 43,
        "l": 36,
        "stable": "Kataonami",
        "height": "6ft 2.4in",
        "weight": "383.6lb"
    },
    {
        "id": 8,
        "surname": "Kiribayama",
        "firstname": "Tetsuo",
        "name": "Byambachuluun Lkhagvasuren",
        "rank": "Komusubi",
        "rankNum": "4",
        "w": 46,
        "l": 35,
        "stable": "Michinoku",
        "height": "6ft 0.8in",
        "weight": "304.2lb"
    },
    {
        "id": 9,
        "surname": "Tobizaru",
        "firstname": "Masaya",
        "name": "Masaya Iwazaki",
        "rank": "Komusubi",
        "rankNum": "4",
        "w": 43,
        "l": 36,
        "stable": "Oitekaze",
        "height": "5ft 8.5in",
        "weight": "293.2lb"
    },
    {
        "id": 10,
        "surname": "Daieishō",
        "firstname": "Hayato",
        "name": "Hayato Takanishi",
        "rank": "Komusubi",
        "rankNum": "4",
        "w": 42,
        "l": 37,
        "stable": "Oitekaze",
        "height": "5ft 11.7in",
        "weight": "354.9lb"
    },
    {
        "id": 11,
        "surname": "Takayasu",
        "firstname": "Akira",
        "name": "Akira Takayasu",
        "rank": "Maegashira 1",
        "rankNum": "5",
        "w": 33,
        "l": 18,
        "stable": "Tagonoura",
        "height": "6ft 1.2in",
        "weight": "401.2lb"
    },
    {
        "id": 12,
        "surname": "Kotonowaka",
        "firstname": "Masahiro",
        "name": "Masakatsu Kamatani",
        "rank": "Maegashira 1",
        "rankNum": "5",
        "w": 48,
        "l": 29,
        "stable": "Sadogatake",
        "height": "6ft 2.4in",
        "weight": "368.2lb"
    }
];

const games = [
    {
        "id": 1,
        "east": 2,
        "west": 10,
        "winner": "east",
        "date": "2022-11-13"
    },
    {
        "id": 2,
        "east": 9,
        "west": 3,
        "winner": "east",
        "date": "2022-11-13"
    },
    {
        "id": 3,
        "east": 4,
        "west": 11,
        "winner": "west",
        "date": "2022-11-13"
    },
    {
        "id": 4,
        "east": 12,
        "west": 5,
        "winner": "west",
        "date": "2022-11-13"
    },
    {
        "id": 5,
        "east": 13,
        "west": 6,
        "winner": "west",
        "date": "2022-11-13"
    },
    {
        "id": 6,
        "east": 7,
        "west": 14,
        "winner": "west",
        "date": "2022-11-13"
    },
    {
        "id": 7,
        "east": 15,
        "west": 8,
        "winner": "west",
        "date": "2022-11-13"
    },
    {
        "id": 8,
        "east": 17,
        "west": 16,
        "winner": "east",
        "date": "2022-11-13"
    },
    {
        "id": 9,
        "east": 19,
        "west": 18,
        "winner": "west",
        "date": "2022-11-13"
    }
]

function submitSumo() {
    let sumoData = JSON.parse(localStorage['sumo']);
    let id = 1;

    sumoData.forEach((sumo) => {
        if (id == sumo.id) {
            id++;
        }
    })

    let ranks = document.querySelector(".rank");

    let newSumo = {
        "id": id,
        "surname": document.querySelector(".surname").value,
        "firstname": document.querySelector(".firstname").value,
        "name": document.querySelector(".realname").value,

        "rank": ranks.options[ranks.value].text,
        "rankNum": parseInt(ranks.value) + 1,

        "w": document.querySelector(".w").value,
        "l": document.querySelector(".l").value,

        "stable": document.querySelector(".stable").value,
        "height": document.querySelector(".feet").value + "ft " + document.querySelector(".inches").value + "in",
        "weight": document.querySelector(".weight").value + "lb"
    }
    sumoData.push(newSumo);
    localStorage.setItem('sumo', JSON.stringify(sumoData));
    location.reload();
}

function submitGame() {
    let id = 1;
    let sumoData = JSON.parse(localStorage['sumo']);
    let gameData = JSON.parse(localStorage['games']);

    gameData.forEach((game) => {
        if (id == game.id) {
            id++;
        }
    })

    let east;
    let west;
    sumoData.forEach((sumo) => {
        if (sumo.surname == document.querySelector(".option-1").options[document.querySelector(".option-1").selectedIndex].text) {
            east = sumo;
        } else if (sumo.surname == document.querySelector(".option-2").options[document.querySelector(".option-2").selectedIndex].text) {
            west = sumo;
        }
    })

    let winner;
    if (document.querySelector(".win-1").value == "Won") {
        winner = "east";
        sumoData[sumoData.indexOf(east)].w++;
        sumoData[sumoData.indexOf(west)].l++;
    } else {
        winner = "west";
        sumoData[sumoData.indexOf(west)].w++;
        sumoData[sumoData.indexOf(east)].l++;
    }

    let newGame = {
        "id": id,
        "east": east.id,
        "west": west.id,
        "winner": winner,
        "date": document.querySelector(".date").value
    };

    gameData.push(newGame);
    localStorage.setItem('sumo', JSON.stringify(sumoData));
    localStorage.setItem('games', JSON.stringify(gameData));
    location.reload();
}

    //localStorage.setItem('sumo', JSON.stringify(sumo));
    //localStorage.setItem('games', JSON.stringify(games));