import { Link, useNavigate } from "react-router-dom"
import Recipes from "../Recipes/Recipes"
import './Home.css'

//Data types: UsersData, IngredientsData

interface RecipeArray {
    recipes: SingleRecipe[]
    filter: any
  }

  interface SingleRecipe {
    id: string
    name: string
    image: string
    tags: string
  }

const Home = ({recipes}:any) => {

    const navigate = useNavigate()


    let lunchDisplay = recipes?.filter((food:SingleRecipe) => {
        if(food.tags){
            return food.tags.includes('lunch')
        }
    })

    const imageDisplay = (id:string) => {
        navigate(`/${id}`)  
    }
    

    return (
        <section className="home-page">
            <header className="home-header">
                <div className="home-logo">

                </div>
                <div className="home-title">
                    <h1>Leftover Night!</h1>
                </div>
                <div className="home-nav">
                    <Link to='/allRecipes'>
                        <button>All Recipes</button>
                    </Link>
                    
                </div>
            </header>
            <section className="home-container">
                <h1>Lunch Time </h1>
                <div className="recipes-display">
                    <div className="main-recipe">
                        {recipes !== undefined && 
                        <div>
                            <img onClick={() => imageDisplay(lunchDisplay[4].id)} className="recipe-image" src={lunchDisplay[4].image}></img>
                            <h3>{lunchDisplay[4].name}</h3>
                        </div>}
                        {!recipes && <h1>loading...</h1>}
                          
                    </div>
                    <div className="related-recipes">
                        {recipes && <Recipes imageDisplay={imageDisplay} currentRecipes={[lunchDisplay[1], lunchDisplay[2], lunchDisplay[3]]}/>}
                        {!recipes && <h1>loading...</h1>}
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Home