import { allRecipies, allIngredients, allUsers } from "../APIData"
import { useState, useEffect } from "react"

const Home = () => {
    
    const [recipies, setRecipies] = useState([{}])
    const [users, setUsers] = useState([{}])
    const [ingredients, setIngredients] = useState([{}])

    useEffect(() => {
        Promise.all([allRecipies, allUsers, allIngredients])
        .then(data => {
            setRecipies(data[0])
            setUsers(data[1])
            setIngredients(data[2])
        })
        
    }, [recipies])
    
    
    console.log(recipies)
    console.log(users)
    console.log(ingredients)
    
    
    

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home