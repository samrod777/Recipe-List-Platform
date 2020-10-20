
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        $("#MealPic").empty();
        
        var imgURL = response.meals[0].strMealThumb
        var MealImg = $('<img>').attr("src", imgURL)
        var MealName = $("<p class='Meal'>").text(response.meals[0].strMeal);


// Get Search Term
const term = search.value;

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

        var tBody6= $("tbody");
        var tRow6 = $("<tr>");

        var qty6 = $("<td>").text(response.meals[0].strMeasure6);
        var ingredient6 = $("<td>").text(response.meals[0].strIngredient6);
        tRow6.append(qty6, ingredient6);
        tBody6.append(tRow6);

        var tBody7= $("tbody");
        var tRow7 = $("<tr>");

        var qty7 = $("<td>").text(response.meals[0].strMeasure7);
        var ingredient7 = $("<td>").text(response.meals[0].strIngredient7);
        tRow7.append(qty7, ingredient7);
        tBody7.append(tRow7);

$.ajax(settings).done(function (response) {
	console.log(response);
});


// Event Listener
submit.addEventListener('submit', searchMeal)


