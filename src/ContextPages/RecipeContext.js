import React, { createContext, useReducer, useContext, useEffect, useRef } from 'react';
import RecipeReducer from './RecipeReducer';
import axios from 'axios';


let recipeContextCreated = createContext();

function RecipeContext({ children }) {
    //page get unmounted so data was not capturing hence used usref hook to store previous data
    let recipeRef = useRef([]);
    let favRef = useRef([])
    const [state, dispatch] = useReducer(RecipeReducer, {
        recipe: recipeRef,
        favourite:favRef,
        byQuickEasy: '',
        byType: '',
        byMealType: '',
        byRating: 0,
        searchQuery: ''
    })
    useEffect(() => {
        GetRecipe();
    }, [])

    function GetRecipe() {
        axios.get("http://localhost:8080/api/recipeapi")
            .then((res) => {
                // console.log(res.data)
                recipeRef.current = res.data.recipe;
                favRef.current = res.data.recipe.filter((data)=>data.favourite===true)
                console.log(favRef.current)
            }).catch((error) => {
                console.error(error);
            });
    }
console.log("recipe")
    console.log(recipeRef);
    console.log("favour")
    console.log(favRef);

    return (
        <recipeContextCreated.Provider value={{state, dispatch}}>
            {children}
        </recipeContextCreated.Provider>
    )
}

export default RecipeContext;

export function UseRecipeContext() {
    return useContext(recipeContextCreated)
} 