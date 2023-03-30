import React from 'react';
import NavigationPage from './NavigationPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recipe from './RecipeCompennets/Recipe';
import Favourite from './RecipeCompennets/Favourite';
import AddRecipe from './RecipeCompennets/AddRecipe';
import AboutUs from './RecipeCompennets/AboutUs';
import Home from './RecipeCompennets/Home';
import CompleteRecipe from './RecipeCompennets/CompleteRecipe';


function HomePage() {
  return (
    <div id='homepage'>
        <NavigationPage/>
        <div>
        <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/completeRecipe' element={<CompleteRecipe/>}/>
                    <Route path='/recipe' element={<Recipe />}/>
                    <Route path='/quick&easy' element={<Favourite/>}/>
                    <Route path='/addrecipe' element={<AddRecipe />}/>
                    <Route path='/aboutus' element={<AboutUs />}/>
                </Routes>
            </Router>
        </div>
    </div>
  )
}

export default HomePage