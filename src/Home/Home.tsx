import { allRecipes, allIngredients, allUsers } from "../APIData"
import { useState, useEffect, FC } from "react"
import { Link } from "react-router-dom"
import Recipes from "../Recipes/Recipes"
import './Home.css'

//Data types: UsersData, IngredientsData

interface RecipeArray {
    allRecipes: SingleRecipe[]
    filter: any
  }

  interface SingleRecipe {
    id: string
    name: string
    image: string
    tags: string
  }

const Home = () => {
    
    const [recipes, setRecipes] = useState<RecipeArray>()
    const [starters, setStarters] = useState<RecipeArray>()
    const [singleRecipe, setRecipe] = useState<SingleRecipe>()
    const [users, setUsers] = useState<any>()
    const [ingredients, setIngredients] = useState<any>()

    useEffect(() => {
        Promise.all([allRecipes, allUsers, allIngredients])
        .then(data => {            
            setRecipes(data[0].recipes)
            setUsers(data[1])
            setIngredients(data[2])
        })
        if(recipes){
            let onlyStarters = recipes.filter((food:SingleRecipe) => {
                if(food.tags !== undefined){
                    return food.tags.includes('lunch')
                }
            })
            setStarters(onlyStarters)
            setRecipe(onlyStarters[0])
        }
        
    }, [recipes])

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
                        {starters && 
                        <div>
                            <img className="recipe-image" src={singleRecipe?.image}></img>
                            <h3>{singleRecipe?.name}</h3>
                        </div>}
                          
                    </div>
                    <div className="related-recipes">
                        {starters && <Recipes currentRecipes={starters}/>}
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Home