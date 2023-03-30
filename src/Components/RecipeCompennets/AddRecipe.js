import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function AddRecipe() {
  let navigate = useNavigate()

  const PostRecipe = (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    // const values = [...formData.entries()];
    // console.log(values);
    // console.log(formData);
    
    let url = "https://recipe-app-oy34.onrender.com/api/recipeapi";
    // let url = "http://localhost:8080/api/recipeapi";

    axios.post(url,formData)
    .then(res=>{
      console.log(res);
        navigate("/recipe")
    })
    .catch(err=>{
      alert("Oops Something went wrong!")
      console.log(err.message)})
  }

  const AddInputForIngredient = () => {
    let list = document.getElementById('ingredientList');
    let inputName = document.createElement('input');
    inputName.placeholder = 'Ingredient Name';
    inputName.name = 'ingredientName';
    inputName.type = 'text';
    let inputImage = document.createElement('input');
    inputImage.type = 'file';
    inputImage.name = 'ingredientImage'
    let groupInput = document.createElement('div')
    groupInput.className = 'ingredientList'

    groupInput.appendChild(inputName)
    groupInput.appendChild(inputImage)
    list.appendChild(groupInput)
  }

  return (
    <div id='form-for-recipe'>
      <h1>Add Recipe</h1>
      <form id='form' onSubmit={(e) => PostRecipe(e)}>

        <div className='recipeInput'>
          <label htmlFor="recipeName">Name of Recipe:-</label>
          <input type="text" name="recipeName" id="recipeName" placeholder='  Recipe Name' />
        </div>
        <div className='recipeInput'>
          <label htmlFor="ingredientImage">Final Image:-</label>
          <input type="file" name="ingredientImage" id="recipeImage"/>
        </div>
        <div className='recipeInput'>
          <label htmlFor="recipeType">Type of Food:-</label>
          <input type="text" name="recipeType" id="recipeType" placeholder='Food Type eg. Veg, Non-Veg etc.'/>
        </div>
        <div className='recipeInput'>
          <label htmlFor="typeofMeal">Type of Meal:-</label>
          <input type="text" name="typeofMeal" id="typeofMeal"  placeholder='Meal type eg. Breakfast, dinner, fast food etc.'/>
        </div>
        <div className='recipeInput'>
          <label htmlFor="making">Making:-</label>
          <select name="making" id="making">
            <option value="select">Select</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

          <div id='ingredient'>
            <h2>Ingredients:-</h2>
            <div id='ingredientList'></div>
            <button type='button' onClick={AddInputForIngredient}>Add Ingredient</button>
          </div>
        
        <div className='recipeInput'>
          <label htmlFor="description">Description :-</label>
          <textarea name="description" id="description" cols="60" rows="10" placeholder='Recipe Description write with points'></textarea>
        </div>
        <div className='recipeInput'>
          <button type='submit' onClick={(e) => PostRecipe(e)}>Add Recipe</button>
        </div>
      </form>
    </div>
  )
}

export default AddRecipe