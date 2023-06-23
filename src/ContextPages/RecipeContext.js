import React, { createContext, useReducer, useContext, useEffect, useState } from 'react';
import RecipeReducer from './RecipeReducer';
import axios from 'axios';


let recipeContextCreated = createContext();

function RecipeContext({ children }) {

    const [recipe, setMenu] = useState([])
    useEffect(() => {
        GetRecipe();
    }, []);

    function GetRecipe() {
        let url = "https://recipe-app-oy34.onrender.com/api/recipeapi";
        // let url = "http://localhost:8080/api/recipeapi";
        axios.get(url)
            .then((res) => {
                setMenu(res.data.recipe);
            }).catch((error) => {
                console.error(error);
                alert("Something went Wrong!")
            });
    }

    return (
        <recipeContextCreated.Provider value={{recipe}}>
            {children}
        </recipeContextCreated.Provider>
    )
}

export default RecipeContext;

export function UseRecipeContext() {
    return useContext(recipeContextCreated)
} 