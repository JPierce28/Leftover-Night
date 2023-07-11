import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import AllRecipies from '../AllRecipies/AllRecipies';

function App() {

  return (
    <Routes>
      <Route
      path='/'
      element={<Home/>}
      />
      <Route
      path='/allRecipies'
      element={<AllRecipies/>}
      />
    </Routes> 
  )
}

export default App;