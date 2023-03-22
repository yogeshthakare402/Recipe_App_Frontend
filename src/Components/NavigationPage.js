import React from 'react';
import './RecipePage.css';

function NavigationPage() {
    return (
        <div id="navbar">
            <div id='logo'><a href='/'><img src="https://www.pngitem.com/pimgs/m/623-6238143_free-recipe-pedia-is-a-site-for-sharing.png" alt="logo" /> <h1>Recipe</h1></a></div>
            <div className='navContainer'>
                <ul className='navbar'>
                    <li><a href="/">Home</a></li>
                    <li><a href='/recipe'>Recipe</a></li>
                    <li><a href='/quick&easy'>Favourite</a></li>
                    <li><a href='/addrecipe'>Add Recipe</a></li>
                    <li><a href='/aboutus'>About us</a></li>
                </ul>
            </div>

        </div>
    )
}

export default NavigationPage