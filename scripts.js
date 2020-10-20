
// Set up function searchMeal and assign API url to variable
function searchMeal() {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        $("#MealPic").empty();

        var imgURL = response.meals[0].strMealThumb
        var MealImg = $('<img>').attr("src", imgURL)
        var MealName = $("<p class='Meal'>").text(response.meals[0].strMeal);

        $("#MealPic").append(MealImg);
        $("#MealPic").append(MealName);

        $("tbody").empty()
        var tBody1 = $("tbody");
        var tRow1 = $("<tr>");

        var qty1 = $("<td>").text(response.meals[0].strMeasure1);
        var ingredient1 = $("<td>").text(response.meals[0].strIngredient1);
        tRow1.append(qty1, ingredient1);
        tBody1.append(tRow1);

        var tBody2 = $("tbody");
        var tRow2 = $("<tr>");

        var qty2 = $("<td>").text(response.meals[0].strMeasure2);
        var ingredient2 = $("<td>").text(response.meals[0].strIngredient2);
        tRow2.append(qty2, ingredient2);
        tBody2.append(tRow2);

        var tBody3 = $("tbody");
        var tRow3 = $("<tr>");

        var qty3 = $("<td>").text(response.meals[0].strMeasure3);
        var ingredient3 = $("<td>").text(response.meals[0].strIngredient3);
        tRow3.append(qty3, ingredient3);
        tBody3.append(tRow3);

        var tBody4 = $("tbody");
        var tRow4 = $("<tr>");

        var qty4 = $("<td>").text(response.meals[0].strMeasure4);
        var ingredient4 = $("<td>").text(response.meals[0].strIngredient4);
        tRow4.append(qty4, ingredient4);
        tBody4.append(tRow4);

        var tBody5 = $("tbody");
        var tRow5 = $("<tr>");

        var qty5 = $("<td>").text(response.meals[0].strMeasure5);
        var ingredient5 = $("<td>").text(response.meals[0].strIngredient5);
        tRow5.append(qty5, ingredient5);
        tBody5.append(tRow5);

        var tBody6 = $("tbody");
        var tRow6 = $("<tr>");

        var qty6 = $("<td>").text(response.meals[0].strMeasure6);
        var ingredient6 = $("<td>").text(response.meals[0].strIngredient6);
        tRow6.append(qty6, ingredient6);
        tBody6.append(tRow6);

        var tBody7 = $("tbody");
        var tRow7 = $("<tr>");

        var qty7 = $("<td>").text(response.meals[0].strMeasure7);
        var ingredient7 = $("<td>").text(response.meals[0].strIngredient7);
        tRow7.append(qty7, ingredient7);
        tBody7.append(tRow7);

        var tBody8 = $("tbody");
        var tRow8 = $("<tr>");

        var qty8 = $("<td>").text(response.meals[0].strMeasure8);
        var ingredient8 = $("<td>").text(response.meals[0].strIngredient8);
        tRow8.append(qty8, ingredient8);
        tBody8.append(tRow8);

        var tBody9 = $("tbody");
        var tRow9 = $("<tr>");

        var qty9 = $("<td>").text(response.meals[0].strMeasure9);
        var ingredient9 = $("<td>").text(response.meals[0].strIngredient9);
        tRow9.append(qty9, ingredient9);
        tBody9.append(tRow9);

        var tBody10 = $("tbody");
        var tRow10 = $("<tr>");

        var qty10 = $("<td>").text(response.meals[0].strMeasure10);
        var ingredient10 = $("<td>").text(response.meals[0].strIngredient10);
        tRow10.append(qty10, ingredient10);
        tBody10.append(tRow10);

        var tBody11 = $("tbody");
        var tRow11 = $("<tr>");

        var qty11 = $("<td>").text(response.meals[0].strMeasure11);
        var ingredient11 = $("<td>").text(response.meals[0].strIngredient11);
        tRow11.append(qty11, ingredient11);
        tBody11.append(tRow11);

        var tBody12 = $("tbody");
        var tRow12 = $("<tr>");

        var qty12 = $("<td>").text(response.meals[0].strMeasure12);
        var ingredient12 = $("<td>").text(response.meals[0].strIngredient12);
        tRow12.append(qty12, ingredient12);
        tBody12.append(tRow12);

        var tBody13 = $("tbody");
        var tRow13 = $("<tr>");

        var qty13 = $("<td>").text(response.meals[0].strMeasure13);
        var ingredient13 = $("<td>").text(response.meals[0].strIngredient13);
        tRow13.append(qty13, ingredient13);
        tBody13.append(tRow13);

        var tBody14 = $("tbody");
        var tRow14 = $("<tr>");

        var qty14 = $("<td>").text(response.meals[0].strMeasure14);
        var ingredient14 = $("<td>").text(response.meals[0].strIngredient14);
        tRow14.append(qty14, ingredient14);
        tBody14.append(tRow14);

        var tBody15 = $("tbody");
        var tRow15 = $("<tr>");

        var qty15 = $("<td>").text(response.meals[0].strMeasure15);
        var ingredient15 = $("<td>").text(response.meals[0].strIngredient15);
        tRow15.append(qty15, ingredient15);
        tBody15.append(tRow15);

        var instruction = $("<p>").text(response.meals[0].strInstructions);
        $("#Direction").empty()
        $("#Direction").append("<h2>Direction</h2>", instruction);

        localStorage.setItem("Meal", JSON.stringify(response.meals[0].strMeal))
        console.log(localStorage)

    })
}
pageload()

function pageload() {
    var lastMeal = JSON.parse(localStorage.getItem("Meal"));
    var lastMealURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + lastMeal

    $.ajax({
        url: lastMealURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        $("#MealPic").empty();

        var imgURL = response.meals[0].strMealThumb
        var MealImg = $("<img>").attr("src", imgURL)
        var MealName = $("<p class='Meal'>").text(response.meals[0].strMeal);

        $("#MealPic").append(MealImg);
        $("#MealPic").append(MealName);

        $("tbody").empty()

        var tBody1 = $("tbody");
        var tRow1 = $("<tr>");

        var qty1 = $("<td>").text(response.meals[0].strMeasure1);
        var ingredient1 = $("<td>").text(response.meals[0].strIngredient1);
        tRow1.append(qty1, ingredient1);
        tBody1.append(tRow1);

        var tBody2 = $("tbody");
        var tRow2 = $("<tr>");

        var qty2 = $("<td>").text(response.meals[0].strMeasure2);
        var ingredient2 = $("<td>").text(response.meals[0].strIngredient2);
        tRow2.append(qty2, ingredient2);
        tBody2.append(tRow2);

        var tBody3 = $("tbody");
        var tRow3 = $("<tr>");

        var qty3 = $("<td>").text(response.meals[0].strMeasure3);
        var ingredient3 = $("<td>").text(response.meals[0].strIngredient3);
        tRow3.append(qty3, ingredient3);
        tBody3.append(tRow3);

        var tBody4 = $("tbody");
        var tRow4 = $("<tr>");

        var qty4 = $("<td>").text(response.meals[0].strMeasure4);
        var ingredient4 = $("<td>").text(response.meals[0].strIngredient4);
        tRow4.append(qty4, ingredient4);
        tBody4.append(tRow4);

        var tBody5 = $("tbody");
        var tRow5 = $("<tr>");

        var qty5 = $("<td>").text(response.meals[0].strMeasure5);
        var ingredient5 = $("<td>").text(response.meals[0].strIngredient5);
        tRow5.append(qty5, ingredient5);
        tBody5.append(tRow5);

        var tBody6 = $("tbody");
        var tRow6 = $("<tr>");

        var qty6 = $("<td>").text(response.meals[0].strMeasure6);
        var ingredient6 = $("<td>").text(response.meals[0].strIngredient6);
        tRow6.append(qty6, ingredient6);
        tBody6.append(tRow6);

        var tBody7 = $("tbody");
        var tRow7 = $("<tr>");

        var qty7 = $("<td>").text(response.meals[0].strMeasure7);
        var ingredient7 = $("<td>").text(response.meals[0].strIngredient7);
        tRow7.append(qty7, ingredient7);
        tBody7.append(tRow7);

        var tBody8 = $("tbody");
        var tRow8 = $("<tr>");

        var qty8 = $("<td>").text(response.meals[0].strMeasure8);
        var ingredient8 = $("<td>").text(response.meals[0].strIngredient8);
        tRow8.append(qty8, ingredient8);
        tBody8.append(tRow8);

        var tBody9 = $("tbody");
        var tRow9 = $("<tr>");

        var qty9 = $("<td>").text(response.meals[0].strMeasure9);
        var ingredient9 = $("<td>").text(response.meals[0].strIngredient9);
        tRow9.append(qty9, ingredient9);
        tBody9.append(tRow9);

        var tBody10 = $("tbody");
        var tRow10 = $("<tr>");

        var qty10 = $("<td>").text(response.meals[0].strMeasure10);
        var ingredient10 = $("<td>").text(response.meals[0].strIngredient10);
        tRow10.append(qty10, ingredient10);
        tBody10.append(tRow10);

        var tBody11 = $("tbody");
        var tRow11 = $("<tr>");

        var qty11 = $("<td>").text(response.meals[0].strMeasure11);
        var ingredient11 = $("<td>").text(response.meals[0].strIngredient11);
        tRow11.append(qty11, ingredient11);
        tBody11.append(tRow11);

        var tBody12 = $("tbody");
        var tRow12 = $("<tr>");

        var qty12 = $("<td>").text(response.meals[0].strMeasure12);
        var ingredient12 = $("<td>").text(response.meals[0].strIngredient12);
        tRow12.append(qty12, ingredient12);
        tBody12.append(tRow12);

        var tBody13 = $("tbody");
        var tRow13 = $("<tr>");

        var qty13 = $("<td>").text(response.meals[0].strMeasure13);
        var ingredient13 = $("<td>").text(response.meals[0].strIngredient13);
        tRow13.append(qty13, ingredient13);
        tBody13.append(tRow13);

        var tBody14 = $("tbody");
        var tRow14 = $("<tr>");

        var qty14 = $("<td>").text(response.meals[0].strMeasure14);
        var ingredient14 = $("<td>").text(response.meals[0].strIngredient14);
        tRow14.append(qty14, ingredient14);
        tBody14.append(tRow14);

        var tBody15 = $("tbody");
        var tRow15 = $("<tr>");

        var qty15 = $("<td>").text(response.meals[0].strMeasure15);
        var ingredient15 = $("<td>").text(response.meals[0].strIngredient15);
        tRow15.append(qty15, ingredient15);
        tBody15.append(tRow15);

        var instruction = $("<p>").text(response.meals[0].strInstructions);
        $("#Direction").empty()
        $("#Direction").append("<h2>Direction</h2>", instruction);

    })

}


$("#select-meal").on("click", function (event) {
    searchMeal()
});


