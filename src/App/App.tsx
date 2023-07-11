import './App.css';
import { useState, useEffect, FC } from "react"
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import AllRecipes from '../AllRecipes/AllRecipes';
import { allRecipes, allIngredients, allUsers } from "../APIData"

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


function App() {

  const [recipes, setRecipes] = useState<RecipeArray>()
  const [users, setUsers] = useState<any>()
  const [ingredients, setIngredients] = useState<any>()

  useEffect(() => {
      Promise.all([allRecipes, allUsers, allIngredients])
      .then(data => {            
          setRecipes(data[0].recipes)
          setUsers(data[1])
          setIngredients(data[2])
      })
      
  }, [recipes])

  return (
    <Routes>
      <Route
      path='/'
      element={<Home recipes={recipes}/>}
      />
      <Route
      path='/allRecipes'
      element={<AllRecipes allTheRecipes={recipes}/>}
      />
    </Routes> 
  )
}

export default App;