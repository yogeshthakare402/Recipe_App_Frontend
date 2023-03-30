import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { BsSearchHeart } from 'react-icons/bs';
import { UseRecipeContext } from '../../ContextPages/RecipeContext';
import RatingStars from './RatingStars';

function Home() {
    const [search, setSearch] = useState("");
    const [seachedRecipe, setSearchedRecipe] = useState([])
    const { state: { recipe } } = UseRecipeContext();
    const searchRecipe = (RecipeVal) => {
        setSearch(RecipeVal);
        let rec = recipe.filter((item) => { return item.recipeName.includes(RecipeVal) || item.recipeType.includes(RecipeVal) || item.typeofMeal.includes(RecipeVal) })
        // console.log(rec);
        setSearchedRecipe(rec)
    }
    let navigate = useNavigate();

    const goToRecipe = (data)=>{
        // console.log(data);
        navigate("/completeRecipe", {state:{data:data}})
    }

    let url = "https://recipe-app-oy34.onrender.com/";
    // let url = "http://localhost:8080/";

    return (
        <div id='home'>
            <div id='searchHeading'>
                <h1>Find a Recipe</h1>
            </div>

            <div id='serachRecipe'>
                <input type="text" name="recipe" id="recipe" placeholder=' Search Recipe.....' onChange={(e) => searchRecipe(e.target.value)} />
                <BsSearchHeart id='icon'/>
            </div>
            { search.length > 0 ? (
                <div id='serachedRecipies'>{seachedRecipe.map((data, i) => {
                    return <div key={i} className='recipeCard' onClick={()=>{goToRecipe(data)}}>
                        <img src={url + data.IngredientImages[0].path} alt={data.IngredientImages[0].originalname} />
                        <div><h2>{data.recipeName} Recipe</h2></div>
                        <div className='card-sub-container'>
                            <div >{data.typeofMeal} </div>
                            <div className='rating'>Making:- {data.making} <div><RatingStars stars={data.rating} /></div> </div>
                        </div>
                    </div>
                })}</div>
            ) : (<div id='headPara'>
                <p>
                    <div id='curveText'>LESS STRESS & MORE JOY</div>
                    <div className='para-text'>
                        <div className='seperatedText'>Helping 15 Million <br /> Home Cooks a month</div>
                        <div className='seperatedText'><img src="https://www.spiceupthecurry.com/wp-content/uploads/2014/04/batata-poha-recipe-1-360x360.jpg" alt="pohe" /></div>
                        <div className='seperatedText'>Over 3000 tested <br />and proven recipes</div>
                    </div>
                </p>
            </div>)}
        </div>
    )
}

export default Home