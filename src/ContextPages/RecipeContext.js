import React, { createContext, useReducer, useContext, useEffect } from 'react';
import RecipeReducer from './RecipeReducer';
import axios from 'axios';


let recipeContextCreated = createContext();

function RecipeContext({ children }) {
    //page get unmounted so data was not capturing hence used usref hook to store previous data
    // let recipeRef = useRef([]);
    // let favRef = useRef([])
    const [state, dispatch] = useReducer(RecipeReducer, {
        recipe: [],
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
        let url = "https://recipe-app-oy34.onrender.com/api/recipeapi";
        // let url = "http://localhost:8080/api/recipeapi";
        axios.get(url)
            .then((res) => {
                // console.log(res.data)
                // recipeRef.current = res.data.recipe;
                // favRef.current = res.data.recipe.filter((data)=>data.favourite===true)
                // let fav = res.data.recipe.filter((data)=>data.favourite===true)
                dispatch({
                    type:"FetechedRecipe",
                    payload: res.data.recipe
                })
                // dispatch({
                //     type:"FavouriteRecipe",
                //     payload: fav
                // })
            }).catch((error) => {
                console.error(error);
                alert("Something went Wrong!")
            });
    }
// console.log("recipe")
    // console.log(recipeRef);
    // console.log("favourite")
    // console.log(favRef);

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