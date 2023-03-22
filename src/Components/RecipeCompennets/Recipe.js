import React, { useState,useEffect } from 'react';
import { UseRecipeContext } from '../../ContextPages/RecipeContext';
import RatingStars from './RatingStars';
import CompleteRecipe from './CompleteRecipe';

function Recipe() {
  //since using useref and value stotrred in current need to relode or render page again hence used this extra usestate
  const [renderPage, setRenderPage] = useState(false);
  const [CompleteData, setCompleteData] = useState();
  const [show, setShow] = useState(false);
  const { state: { recipe } } = UseRecipeContext();
  console.log(recipe);

  useEffect(()=>{
    setTimeout(()=>{
      setRenderPage(true);
      // console.log(renderPage)
    },0)
  },[renderPage])

  const getCompleteERecipe = (data) => {
    setTimeout(()=>{
      setRenderPage(!renderPage);
    },0)
    setCompleteData(data)
    setShow(!show)
  }
  let url = "http://localhost:8080/";
  return (
    <div class='recipe-card-container'>
      {!show ? (renderPage && recipe && recipe.current.map((data, i) => {
        // console.log(data)
        return <div key={i} className='recipeCard' onClick={() => {getCompleteERecipe(data)}}>
          <img src={url + data.IngredientImages[0].path} alt={data.IngredientImages[0].originalname} />
          <div><h2>{data.recipeName} Recipe</h2></div>
          <div className='card-sub-container'>
            <div >{data.typeofMeal} </div>
            <div className='rating'>Making:- {data.making} <div><RatingStars stars={data.rating} /></div> </div>
          </div>
        </div>
      })
      ) : (
        <CompleteRecipe data={CompleteData} setShow={setShow}/>)}
    </div>
  )
}

export default Recipe