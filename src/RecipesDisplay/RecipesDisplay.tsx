import './RecipesDisplay.css'

interface Props {
    currentRecipes: CurrentRecipe[]
  }
  
  interface CurrentRecipe {
    id: string
    name: string
    image: string
  }

const RecipesDisplay = ({currentRecipes}:Props) => {

    const displayRecipe = currentRecipes.map((recipe:CurrentRecipe) => {
        return (
          <div className='recipe-container'>
            <img className='all-recipe-image' src={recipe.image}></img>
            <p>{recipe.name}</p>
          </div>
        )
      })

  return (
    <div className='all-recipes-container'>
      {displayRecipe}
    </div>
  )
}

export default RecipesDisplay
