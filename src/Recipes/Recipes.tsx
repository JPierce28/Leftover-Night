import './Recipes.css'
import RecipeCard from '../RecipeCard/RecipeCard'

interface Props {
  currentRecipes: any
  imageDisplay: (id:string) => void
}

interface CurrentRecipe {
  id: string
  name: string
  image: string
}


const Recipes = ({currentRecipes, imageDisplay}: Props) => {

  const displayRecipe = currentRecipes.map((recipe:CurrentRecipe) => {
    return (
      <RecipeCard
        imageDisplay={imageDisplay}
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