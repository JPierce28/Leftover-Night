import './AllRecipes.css'
import { Link } from 'react-router-dom';


const AllRecipes = () => {
  return (
    <section className='all-recipes-page'>
        <header>
            <h1>All Recipes</h1>
            <Link to='/'>
                <button>Home</button>
            </Link>
            
        </header>

    </section>
  )
}

export default AllRecipes;