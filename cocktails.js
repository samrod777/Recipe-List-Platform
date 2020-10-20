function searchCocktail() {
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        $("#CocktailPic").empty();

        var imgURL = response.drinks[0].strDrinkThumb
        var cocktailName = $("<p class='Cocktail'>").text(response.drinks[0].strDrink);
        var cocktailImg = $('<img>').attr("src", imgURL)


        $("#CocktailPic").append(cocktailImg);
        $("#CocktailPic").append(cocktailName);

        $("tbody").empty()
        var tBody1 = $("tbody");
        var tRow1 = $("<tr>");

        var qty1 = $("<td>").text(response.drinks[0].strMeasure1);
        var ingredient1 = $("<td>").text(response.drinks[0].strIngredient1);
        tRow1.append(qty1, ingredient1);
        tBody1.append(tRow1);

        var tBody2 = $("tbody");
        var tRow2 = $("<tr>");

        var qty2 = $("<td>").text(response.drinks[0].strMeasure2);
        var ingredient2 = $("<td>").text(response.drinks[0].strIngredient2);
        tRow2.append(qty2, ingredient2);
        tBody2.append(tRow2);

        var tBody3 = $("tbody");
        var tRow3 = $("<tr>");

        var qty3 = $("<td>").text(response.drinks[0].strMeasure3);
        var ingredient3 = $("<td>").text(response.drinks[0].strIngredient3);
        tRow3.append(qty3, ingredient3);
        tBody3.append(tRow3);

        var tBody4 = $("tbody");
        var tRow4 = $("<tr>");

        var qty4 = $("<td>").text(response.drinks[0].strMeasure4);
        var ingredient4 = $("<td>").text(response.drinks[0].strIngredient4);
        tRow4.append(qty4, ingredient4);
        tBody4.append(tRow4);

        var tBody5 = $("tbody");
        var tRow5 = $("<tr>");

        var qty5 = $("<td>").text(response.drinks[0].strMeasure5);
        var ingredient5 = $("<td>").text(response.drinks[0].strIngredient5);
        tRow5.append(qty5, ingredient5);
        tBody5.append(tRow5);

        var tBody6 = $("tbody");
        var tRow6 = $("<tr>");

        var qty6 = $("<td>").text(response.drinks[0].strMeasure6);
        var ingredient6 = $("<td>").text(response.drinks[0].strIngredient6);
        tRow6.append(qty6, ingredient6);
        tBody6.append(tRow6);

        var tBody7 = $("tbody");
        var tRow7 = $("<tr>");

        var qty7 = $("<td>").text(response.drinks[0].strMeasure7);
        var ingredient7 = $("<td>").text(response.drinks[0].strIngredient7);
        tRow7.append(qty7, ingredient7);
        tBody7.append(tRow7);


        var instruction = $("<p>").text(response.drinks[0].strInstructions);
        $("#Direction").empty()

        $("#Direction").append("<h2>Direction</h2>",instruction);
        
        localStorage.setItem("cocktail", JSON.stringify(response.drinks[0].strDrink))
        console.log(localStorage)

    })
}
pageload()

function pageload(){
    var lastCocktail = JSON.parse(localStorage.getItem("cocktail"));
    var lastCocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + lastCocktail

    $.ajax({
        url: lastCocktailURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        $("#CocktailPic").empty();

        var imgURL = response.drinks[0].strDrinkThumb
        var cocktailName = $("<p class='Cocktail'>").text(response.drinks[0].strDrink);
        var cocktailImg = $('<img>').attr("src", imgURL)


        $("#CocktailPic").append(cocktailImg);
        $("#CocktailPic").append(cocktailName);

        $("tbody").empty()
        var tBody1 = $("tbody");
        var tRow1 = $("<tr>");

        var qty1 = $("<td>").text(response.drinks[0].strMeasure1);
        var ingredient1 = $("<td>").text(response.drinks[0].strIngredient1);
        tRow1.append(qty1, ingredient1);
        tBody1.append(tRow1);

        var tBody2 = $("tbody");
        var tRow2 = $("<tr>");

        var qty2 = $("<td>").text(response.drinks[0].strMeasure2);
        var ingredient2 = $("<td>").text(response.drinks[0].strIngredient2);
        tRow2.append(qty2, ingredient2);
        tBody2.append(tRow2);

        var tBody3 = $("tbody");
        var tRow3 = $("<tr>");

        var qty3 = $("<td>").text(response.drinks[0].strMeasure3);
        var ingredient3 = $("<td>").text(response.drinks[0].strIngredient3);
        tRow3.append(qty3, ingredient3);
        tBody3.append(tRow3);

        var tBody4 = $("tbody");
        var tRow4 = $("<tr>");

        var qty4 = $("<td>").text(response.drinks[0].strMeasure4);
        var ingredient4 = $("<td>").text(response.drinks[0].strIngredient4);
        tRow4.append(qty4, ingredient4);
        tBody4.append(tRow4);

        var tBody5 = $("tbody");
        var tRow5 = $("<tr>");

        var qty5 = $("<td>").text(response.drinks[0].strMeasure5);
        var ingredient5 = $("<td>").text(response.drinks[0].strIngredient5);
        tRow5.append(qty5, ingredient5);
        tBody5.append(tRow5);

        var tBody6 = $("tbody");
        var tRow6 = $("<tr>");

        var qty6 = $("<td>").text(response.drinks[0].strMeasure6);
        var ingredient6 = $("<td>").text(response.drinks[0].strIngredient6);
        tRow6.append(qty6, ingredient6);
        tBody6.append(tRow6);

        var tBody7 = $("tbody");
        var tRow7 = $("<tr>");

        var qty7 = $("<td>").text(response.drinks[0].strMeasure7);
        var ingredient7 = $("<td>").text(response.drinks[0].strIngredient7);
        tRow7.append(qty7, ingredient7);
        tBody7.append(tRow7);


        var instruction = $("<p>").text(response.drinks[0].strInstructions);
        $("#Direction").empty()

        $("#Direction").append("<h2>Direction</h2>",instruction);
    })


}

$("#select-cocktail").on("click", function (event) {
    searchCocktail()
});
