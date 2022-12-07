
// api url
const api_url =
	"https://localhost:7053/api/Beers";


$(document).ready(function () {

	const dropdownlist = document.getElementById("name");
	const tagline = document.getElementById("tagline");
	const description = document.getElementById("description");
	const ibu = document.getElementById("ibu");
	const ingredients = document.getElementById("ingredients");
	const kep = document.getElementById("kep");

	const beers = [];

	fetch(api_url)
		.then(res => {
			return res.json();
		})
		.then(data => {
			data.forEach(beer => {
				
				let option = document.createElement("option");
				option.text = beer.name;
				dropdownlist.add(option);
				beers.push(beer);

			})
		})
		.catch(error => console.log(error));

	dropdownlist.addEventListener("change", e => {
			
		var beerName = dropdownlist.options[dropdownlist.selectedIndex].text;
		console.log(beerName);
		console.log(beers);

		let newBeer = beers.filter(function (beer) {
			return beer.name === beerName;
		})[0];
		console.log(newBeer);

		tagline.value = newBeer.tagline;
		description.innerHTML = newBeer.description;
		ibu.value = newBeer.ibu;
		kep.src = newBeer.image_URL;
		
	} );
});


