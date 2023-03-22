import React from 'react';
import { BsSearchHeart } from 'react-icons/bs'

function Home() {
    return (
        <div id='home'>
            <div id='searchHeading'>
            <h1>Find a Recipe</h1>
            </div>
            
            <div id='serachRecipe'>
                <input type="text" name="recipe" id="recipe" placeholder=' Search Recipe.....' />
                <BsSearchHeart id='icon'/>
            </div>
            <div id='headPara'>
                <p>
                    <div id='curveText'>LESS STRESS & MORE JOY</div>
                    <div className='para-text'>
                        <div className='seperatedText'>Helping 15 Million <br /> Home Cooks a month</div>
                        <div className='seperatedText'><img src="https://www.spiceupthecurry.com/wp-content/uploads/2014/04/batata-poha-recipe-1-360x360.jpg" alt="pohe" /></div>
                        <div className='seperatedText'>Over 3000 tested <br />and proven recipes</div>
                    </div>
                </p>
            </div>
        </div>
    )
}

export default Home