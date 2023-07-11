import './RecipeCard.css'
import { FC } from 'react'


interface CurrentRecipe {
  imageDisplay: (id:string) => void
  key: string
  id: string
  name: string
  image: string
}

const RecipeCard: FC<CurrentRecipe> = ({id, key, image, name, imageDisplay}) => {
  return (
    <div className='recipe-card-display'>
      <img onClick={() => imageDisplay(id)} className='mini-image' id={id} src={image}></img>
      <p>{name}</p>
    </div>
  )
}

export default RecipeCard;