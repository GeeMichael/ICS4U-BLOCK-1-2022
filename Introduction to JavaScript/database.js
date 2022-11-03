const sumo = [];

let wrestler = {
    "id": 1,
    "Name": "Name",

    "Wins": 6,
    "Losses": 6,

    "Games": [
        {
            "Opp": 7,
            "OurScore": 5,
            "OppScore": 3,
        },
        {
            "Opp": 7,
            "OurScore": 5,
            "OppScore": 3,
        },
        {
            "Opp": 7,
            "OurScore": 5,
            "OppScore": 3,
        }
    ]
}
sumo.push(wrestler);
console.log(JSON.stringify(wrestler));

wrestler = {
    "id": 2,
    "Name": "Name",

    "Wins": 6,
    "Losses": 6,

    "Games": [
        {
            "Opp": 7,
            "OurScore": 5,
            "OppScore": 3,
        },
        {
            "Opp": 7,
            "OurScore": 5,
            "OppScore": 3,
        },
        {
            "Opp": 7,
            "OurScore": 5,
            "OppScore": 3,
        }
    ]
}
sumo.push(wrestler);


localStorage.setItem('sumo', JSON.stringify(sumo));