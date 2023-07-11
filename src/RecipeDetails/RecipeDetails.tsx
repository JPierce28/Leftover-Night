import './RecipeDetails.css'
import { Link, useParams } from 'react-router-dom'

const RecipeDetails = ({recipes, ingredients}:any) => {

    const { id } = useParams()

    let currentRecipe = recipes?.filter((recipe:any) => {
        return recipe.id === Number(id)
    })

    let recipeTags = currentRecipe?.map((recipe:any, index:string) => {
        return (
            <ul> Associated Tags:
                <li id={index} className='list-item'>{recipe.tags[0]}</li>
                <li id={index} className='list-item'>{recipe.tags[1]}</li>
                <li id={index} className='list-item'>{recipe.tags[2]}</li>
                <li id={index} className='list-item'>{recipe.tags[3]}</li>
            </ul>
        )
    })

    let instructions = currentRecipe?.map((recipe:any) => {
        return (
            <ul>Instructions:
                <li className='list-item'>{recipe.instructions[0].instruction}</li>
                <li className='list-item'>{recipe.instructions[1].instruction}</li>
                <li className='list-item'>{recipe.instructions[2].instruction}</li>
            </ul>
        )
    })

    
  return (
    <section className='recipe-details-page'>
      <header className='details-header'>
        <h1>Recipe Details!</h1>
        <Link to='/'>
            <button>Home</button>
        </Link>
        <Link to='/allRecipes'>
            <button>All Recipes</button>
        </Link>
      </header>
      {currentRecipe && 
      <section className='details-section'>
        <div className='details-image-container'>
            <img className='details-image' src={currentRecipe[0].image}></img>
        </div>
        <ul className='details-content'> Dish Details:
            <li className='list-item'>Dish Name: {currentRecipe[0].name}</li>
            {instructions}
            <li className='list-item'>Ingredients: {currentRecipe[0].name}</li>
            {recipeTags}
        </ul>
        
      </section>}
      {!currentRecipe && <h1>Loading...</h1>}
    </section>
    )
}

export default RecipeDetails;