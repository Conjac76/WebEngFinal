function navigateToIngredientsPage(ingredients) {
    var mainContent = document.getElementById("recipe-list");
    mainContent.innerHTML = "";

    var ingredientsHeader = document.createElement("h2");
    ingredientsHeader.textContent = "Ingredients";
    mainContent.appendChild(ingredientsHeader);

    var ingredientsList = document.createElement("ul");
    ingredientsList.id = "ingredients-list";

    ingredients.forEach(function (ingredient) {
        var ingredientItem = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = ingredient;
        ingredientItem.appendChild(checkbox);
        ingredientItem.appendChild(document.createTextNode(ingredient));
        ingredientsList.appendChild(ingredientItem);
    });

    mainContent.appendChild(ingredientsList);

    var backButton = document.createElement("button");
    backButton.textContent = "Back to Recipe List";
    backButton.onclick = function () {
        location.reload(); 
    };

    mainContent.appendChild(backButton);
}
