import './AllRecipes.css'
import { Link } from 'react-router-dom';
import RecipesDisplay from '../RecipesDisplay/RecipesDisplay';

interface Props {
    allTheRecipes: CurrentRecipe[]
  }
  
  interface CurrentRecipe {
    id: string
    name: string
    image: string
  }


const AllRecipes = ({allTheRecipes}:any) => {
    
  return (
    <section className='all-recipes-page'>
        <header className='all-recipes-header'>
            <h1>All Recipes</h1>
            <Link to='/'>
                <button>Home</button>
            </Link>
        </header>
        <section className='all-recipes-display'>
            {allTheRecipes && <RecipesDisplay currentRecipes={allTheRecipes}/>}
        </section>
    </section>
  )
}

export default AllRecipes;