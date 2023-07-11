import './Recipes.css'
import RecipeCard from '../RecipeCard/RecipeCard'

interface Props {
  currentRecipes: any
}

interface CurrentRecipe {
  id: string
  name: string
  image: string
}


const Recipes = ({currentRecipes}: Props) => {

  const filteredRecipes = [currentRecipes[1], currentRecipes[2], currentRecipes[3]]

  const displayRecipe = filteredRecipes.map((recipe:CurrentRecipe) => {
    return (
      <RecipeCard
        key={recipe.id}
        id={recipe.id}
        image={recipe.image}
        name={recipe.name}
      />
    )
  })
  
  return (
    <div className='recipe-card-container'>
      {displayRecipe}
    </div>
    
  )
}

export default Recipes;