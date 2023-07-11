import { allRecipes, allIngredients, allUsers } from "../APIData"
import { useState, useEffect, FC } from "react"
import { Link } from "react-router-dom"
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


    let starterDisplay = recipes?.filter((food:SingleRecipe) => {
        if(food.tags){
            return food.tags.includes('lunch')
        }
    })
    

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
                            <img className="recipe-image" src={recipes[0].image}></img>
                            <h3>{recipes[0].name}</h3>
                        </div>}
                        {!recipes && <h1>loading...</h1>}
                          
                    </div>
                    <div className="related-recipes">
                        {recipes && <Recipes currentRecipes={[starterDisplay[1], starterDisplay[2], starterDisplay[3]]}/>}
                        {!recipes && <h1>loading...</h1>}
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Home