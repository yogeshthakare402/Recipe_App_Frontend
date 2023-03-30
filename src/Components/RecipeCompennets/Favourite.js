import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UseRecipeContext } from '../../ContextPages/RecipeContext';
import RatingStars from './RatingStars';

function Favourite() {
  const { state: { recipe } } = UseRecipeContext();
  let navigate = useNavigate();
  const getCompleteERecipe = (data) => {
    navigate("/completeRecipe", { state: { data: data } })
  }
  let url = "https://recipe-app-oy34.onrender.com/";
  // let url = "http://localhost:8080/";

  return (
    <div>
      <h1 id='favHeader'>Favourite Recipe</h1>
      <div className='recipe-card-container'>
        {recipe && recipe.filter((data) => data.favourite === true).map((data, i) => {
          return <div key={i} className='recipeCard' onClick={() => { getCompleteERecipe(data) }}>
            <img src={url + data.IngredientImages[0].path} alt={data.IngredientImages[0].originalname} />
            <div><h2>{data.recipeName} Recipe</h2></div>
            <div className='card-sub-container'>
              <div >{data.typeofMeal} </div>
              <div className='rating'>Making:- {data.making} <div><RatingStars stars={data.rating} /></div> </div>
            </div>
          </div>
        })
        }
      </div>

    </div>
  )
}

export default Favourite