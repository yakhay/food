import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';


// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

// window.hrima = 1888;
export default function Navbar() {
    // const item = useSelector((state) => state.recipes.recipes);
    
    
    // const dispatch = useDispatch();

//   const handleRecipeClick = (id) => {
//     dispatch(selectRecipe(id));
//   }
    

    return (
        <div className='w-[100%] h-[110px] flex justify-center items-center border-b-[1px]'>
            <div className="flex justify-between items-center w-[1279.96px] h-[30px] ">
                
                <div className="navbar__logo">
                    <h1 className="font-lobster text-[24px]" >Foodieland<span className="text-[#D22B2B]">.</span></h1>
                </div>
                
                    <ul className="flex justify-around items-center w-[505px] ">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to={`/recipes/${1}`}>Recipes</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About us</Link></li>
                    </ul>
                
                    <div className="flex justify-around items-center w-[133.96px] h-[22px]">
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                    </div>

                
            </div>
        </div>
    )
}