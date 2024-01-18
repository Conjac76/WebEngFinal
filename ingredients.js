document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const ingredientsParam = urlParams.get('ingredients');
    
    if (ingredientsParam) {
        const ingredients = JSON.parse(decodeURIComponent(ingredientsParam));
        
        const ingredientsList = document.getElementById('ingredients-list-ul');
        ingredients.forEach(ingredient => {
            const listItem = document.createElement('li');
            listItem.textContent = ingredient;
            ingredientsList.appendChild(listItem);
        });
    }
});
