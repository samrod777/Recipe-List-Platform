
var search = document.getElementById('search')
submit = document.getElementById('submit')
mealsEl = document.getElementById('meals')


// Get Search Term
const term = search.value;

// Search Mea API
var settings = {
	"async": true,
	"crossDomain": true,
    "url": "https://themealdb.p.rapidapi.com/search.php?s=" +searchterms,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "themealdb.p.rapidapi.com",
		"x-rapidapi-key": "fd0272f893msh544cb18b3f99e1ap1160dfjsn4872df7aba39"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});


// Event Listener
submit.addEventListener('submit', searchMeal)


