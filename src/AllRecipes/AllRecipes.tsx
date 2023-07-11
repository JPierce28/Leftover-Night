import './AllRecipes.css'
import { Link } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';

interface RecipeArray {
    allTheRecipes: SingleRecipe[]
    filter: any
  }
  
  interface SingleRecipe {
    id: string
    name: string
    image: string
    tags: string
  }


const AllRecipes = ({allTheRecipes}:any) => {

    console.log(allTheRecipes);
    
  return (
    <section className='all-recipes-page'>
        <header className='all-recipes-header'>
            <h1>All Recipes</h1>
            <Link to='/'>
                <button>Home</button>
            </Link>
        </header>
        <section className='all-recipes-display'>
            {allTheRecipes && <Recipes currentRecipes={allTheRecipes}/>}
        </section>
    </section>
  )
}

export default AllRecipes;