import { allRecipes, allIngredients, allUsers } from "../APIData"
import { useState, useEffect } from "react"
import './Home.css'

const Home = () => {
    
    const [recipes, setRecipes] = useState([{}])
    const [starters, setStarters] = useState<any>()
    const [users, setUsers] = useState([{}])
    const [ingredients, setIngredients] = useState([{}])

    useEffect(() => {
        Promise.all([allRecipes, allUsers, allIngredients])
        .then(data => {
            setRecipes(data[0].recipes)
            setUsers(data[1])
            setIngredients(data[2])
        })
        if(recipes.length !== undefined){
            let onlyStarters = recipes.filter((food:any) => {
                if(food.tags !== undefined){
                    return food.tags.includes('starter')
                }
            })
           
            setStarters(onlyStarters)
        }
        
    }, [recipes])

    console.log(starters);
    
    
    return (
        <section className="home-page">
            <header className="home-header">
                <div className="home-logo">

                </div>
                <div className="home-title">
                    <h1>Leftover Night!</h1>
                </div>
                <div className="home-nav">

                </div>
            </header>
            <section className="home-container">
                <div className="recipes-display">
                    <div className="main-recipe">
                    </div>
                    <div className="related-recipes">

                    </div>
                </div>
            </section>
        </section>
    )
}

export default Home