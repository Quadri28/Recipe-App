import React from 'react'
import { useEffect, useState } from "react";
import './Veggie.css'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

const Vegie = () => {
  const [vegie, setVegie] = useState([])

useEffect (()=>{
getVegie()
}, [])
  const getVegie = async () => {
    const check= localStorage.getItem('vegie');
    if (check) {setVegie(JSON.parse(check))} 
    else{
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=9&tags=vegetarian`
    );
    const response = await api.json();
    localStorage.setItem('vegie', JSON.stringify(response.recipes))
    setVegie(response.recipes);

  }
  };
  return (<div>
    
      <div className="vegie-wrapper">
      <h3>Our Vegetarian picks</h3>
       < Splide options={{
         perPage:3,
         pagination:false,
         arrows: false,
         gap: '3rem',
         drag:'free'}}>
       {vegie.map((recipe)=>{
         return(
           <SplideSlide className="splide-slide" key={recipe.id}>
             <Link to={'/recipes/' + recipe.id}>
          <div className="vegie-card" >
            <p>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title}/>
          </div>
          </Link>
          </SplideSlide>
         )
       })}
          </Splide>
      </div>
  </div>);

}

export default Vegie
