import './RecipesDisplay.css'
import { useNavigate } from 'react-router-dom'

interface Props {
    currentRecipes: CurrentRecipe[]
  }
  
  interface CurrentRecipe {
    id: string
    name: string
    image: string
  }

const RecipesDisplay = ({currentRecipes}:Props) => {

  const navigate = useNavigate()

  const imageDisplay = (id:string) => {
    navigate(`/${id}`)  
}

    const displayRecipe = currentRecipes.map((recipe:CurrentRecipe) => {
        return (
          <div className='recipe-container'>
            <img onClick={() => imageDisplay(recipe.id)} className='all-recipe-image' src={recipe.image}></img>
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
