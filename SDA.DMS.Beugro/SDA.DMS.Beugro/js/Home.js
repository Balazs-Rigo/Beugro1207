
const api_url =
	"https://localhost:7053/api/Beers";


$(document).ready(function () {

	const dropdownlist = document.getElementById("name");
	const tagline = document.getElementById("tagline");
	const description = document.getElementById("description");
	const ibu = document.getElementById("ibu");
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

		let newBeer = beers.filter(function (beer) {
			return beer.name === beerName;
		})[0];

		tagline.value = newBeer.tagline;
		description.innerHTML = newBeer.description;
		ibu.value = newBeer.ibu;
		kep.src = newBeer.image_URL;
		createFillTable(newBeer);
		
	});
});

function createFillTable(newBeer) {

	//const tableBody = document.getElementById("ingredients");
	const tableBody = document.getElementById('ingredients').getElementsByTagName('tbody')[0];
	const ingredients = document.getElementById("ingredients");

	$("#tbody").remove();

	let tbody = document.createElement("tbody");

	newBeer.ingredients.malt.forEach(malt => {	
		
		let row = document.createElement("tr");
		let name = document.createElement("td");
		let amountValue = document.createElement("td");
		let amountUnit = document.createElement("td");

		tbody.id = "tbody";
		ingredients.appendChild(tbody);

		name.innerHTML = malt.name;
		amountValue.innerHTML = malt.amount.value;
		amountUnit.innerHTML = malt.amount.unit;

		row.appendChild(name);
		row.appendChild(amountValue);
		row.appendChild(amountUnit);

		tbody.appendChild(row);
	});
}



