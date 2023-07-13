
const number = 6; // number of recipes/dishes we want


fetch(`https://api.spoonacular.com/recipes/random?number=${number}&apiKey=80efb7bc058c4bee846bd56ae5e92b12&`).then(function(response){
    if (response.ok){
        return response.json();
    }
}).then(function(data){
    for (var i = 0; i < number; i++){
        // Getting data from the API 
        var imgUrl = data.recipes[i].image;
        var foodTitle = data.recipes[i].title;
        var ingredients = [];
        var webURL = data.recipes[i].sourceUrl;
        var ingredientsData = data.recipes[i].extendedIngredients;
    
    
        for (var j = 0; j < ingredientsData.length; j++){
            ingredients.push(ingredientsData[j].original);
        }
        var ingredientList = ingredients.join(", ");
    
    
        // Creating the elements on the page
        var contentDiv = document.createElement("div")
        contentDiv.classList.add("content-container");
        document.getElementsByClassName("main-container")[0].appendChild(contentDiv);
    
    
        var dishImg = document.createElement("img")
        dishImg.setAttribute("src", imgUrl);
        contentDiv.appendChild(dishImg);
    
        var dishHeading = document.createElement("h4")
        dishHeading.classList.add("food-title");
        dishHeading.innerHTML = foodTitle;
        contentDiv.appendChild(dishHeading);
    
    
        var ingredientPara = document.createElement("p")
        ingredientPara.classList.add("ingredient-text");
        ingredientPara.innerHTML = "<span>Ingredients: "+ingredientList;
        contentDiv.appendChild(ingredientPara);
    
    
        var anchorTag = document.createElement("a")
        anchorTag.classList.add("recipe-button", "text-white");
        anchorTag.setAttribute("href", webURL);
        anchorTag.innerHTML = "VIEW RECIPE";
        contentDiv.appendChild(anchorTag);
    }
})

