const recipeData = 'http://localhost:3001/api/v1/recipes'
const userData = 'http://localhost:3001/api/v1/users'
const ingredientData = 'http://localhost:3001/api/v1/ingredients'

const allRecipes = fetch(recipeData, {
    method: "GET"   
})
.then(response => response.json())

const allUsers = fetch(userData, {
    method: "GET"   
})
.then(response => response.json())

const allIngredients = fetch(ingredientData, {
    method: "GET"   
})
.then(response => response.json())


export {allRecipes, allUsers, allIngredients};