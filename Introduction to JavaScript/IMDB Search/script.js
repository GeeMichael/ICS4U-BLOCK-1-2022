const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5918abb962msh9635ec5685dfbe0p14677bjsnecd82b3cb3d6',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

async function getMovies() {
    const res = await fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game', options);
    const data = await res.json();

    const list = await data.d;
    list.map((item) => {
        const name = item.l;
        const img = item.i.imageUrl;
        const movie =  `<li><img src="${img}"><h2>${name}</h2></li>`
        document.querySelector('.movies').innerHTML += movie;
    })
}
getMovies();