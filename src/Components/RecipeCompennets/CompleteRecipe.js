import React, { useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import RatingStars from './RatingStars';
import axios from 'axios';

function CompleteRecipe() {
    const { state } = useLocation();
    let data = state.data;
    // console.log(data);
    let navigate = useNavigate();

    const [newChanges, setNewChanges] = useState(data.favourite);
    const [stars, setStars] = useState(data.rating);

    let url = "https://recipe-app-oy34.onrender.com/";
    // let url = "http://localhost:8080/";
    
    // console.log(data)
    let ingredients = [...data.ingredientName]
    //to remove 1 image which is final product image
    let ingredientImage = data.IngredientImages.slice(1)
    let combine = []
    for (let i = 0; i < ingredients.length; i++) {
        //created array of ingredient and its image
        combine.push([ingredients[i], ingredientImage[i]])
    }

    // console.log(combine)
    let desc = data.description.split('\n')
    // console.log(desc[0])
    const updateFavourite = (id) => {
        console.log(id)
        let urlPut = `https://recipe-app-oy34.onrender.com/api/recipeapi/:${id}`;
        // let urlPut = `http://localhost:8080/api/recipeapi/:${id}`;
        axios.patch(urlPut, { favourite: !data.favourite })
            .then((res) => { console.log(res) })
            .catch((err) => { console.log(err) })
    }

    const updateRating = (id, num) => {
        // console.log(id)
        // console.log(num)
        let urlPut = `https://recipe-app-oy34.onrender.com/api/recipeapi/:${id}`;
        // let urlPut = `http://localhost:8080/api/recipeapi/:${id}`;
        axios.patch(urlPut, { rating: num })
            .then((res) => { console.log(res) })
            .catch((err) => { console.log(err) })

        axios.get(urlPut)
            .then((res) => { console.log(res) })
            .catch((err) => { console.log(err) })
    }
    return (
        <div className='completeRecipe'>
            <div id='completeDetails'>
                <div id='DetailsHeader'>
                    <img id='mainImg' src={url + data.IngredientImages[0].path} alt={data.IngredientImages[0].originalname} />
                    <h1>{data.recipeName}</h1>
                </div>
                <div id='ingredientList'>
                    <h2>Ingredients</h2>
                    <div>
                        {combine.map((array, i) => {
                            return <div key={i} className='ingredientList'>
                                <div className='firstDiv'>
                                    <div>{i + 1}.</div>
                                    <div>{array[0]}</div>
                                </div>
                                <div className='secondDiv'>
                                    <img src={url + array[1].path} alt={array[1].originalname} />
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div>
                    <h3>Description</h3>
                    <div id='desc'>{desc.map((data, i) => {
                        return <div key={i}>
                            {data}
                        </div>
                    })}</div>
                </div>
                <div>
                    <h4>Rate the Recipe</h4>
                    <div><RatingStars
                        stars={stars}
                        onClick={(i) => {
                            updateRating(data._id, i + 1);
                            setStars(i + 1)
                        }}
                        style={{ cursor: "Pointer" }}
                    /></div>
                </div>
                <div id='btn'>
                    <button type='button' id='return' onClick={()=>navigate(-1)} >Return</button>
                    {!newChanges ? (<button type='button' onClick={() => {
                        updateFavourite(data._id);
                        setNewChanges(!newChanges);
                    }}>Add To Favourite</button>) : <button style={{ "backgroundColor": "red" }} type='button' onClick={() => {
                        updateFavourite(data._id);
                        setNewChanges(!newChanges);
                    }}>Remove from Favourite</button>}
                </div>

            </div>
        </div>
    )
}

export default CompleteRecipe