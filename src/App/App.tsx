import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
// import AllRecipes from '../AllRecipies/AllRecipes';

function App() {

  return (
    <Routes>
      <Route
      path='/'
      element={<Home/>}
      />
      {/* <Route
      path='/allRecipies'
      element={<AllRecipes/>}
      /> */}
    </Routes> 
  )
}

export default App;