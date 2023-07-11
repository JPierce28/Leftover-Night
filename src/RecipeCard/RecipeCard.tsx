import './RecipeCard.css'
import { FC } from 'react'


interface CurrentRecipe {
    key: string
    id: string
    name: string
    image: string
  }

const RecipeCard: FC<CurrentRecipe> = ({id, key, image, name}) => {
  return (
    <div className='recipe-card-display'>
      <img className='mini-image' id={id} src={image}></img>
      <p>{name}</p>
    </div>
  )
}

export default RecipeCard;