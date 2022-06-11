import React from "react";
import { useEffect, useState } from "react";
import './Popular.css'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css'
import { Link} from "react-router-dom";

const Popular = () => {
const [popular, setPopuar] = useState([])
useEffect (()=>{
getPopular()
}, [])
  const getPopular = async () => {
    const check= localStorage.getItem('popular');
    if (check) {setPopuar(JSON.parse(check))} 
    else{
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=7fb48b8d24114b76b2cd73884bc63d23&number=9`
    );
    const response = await api.json();
    localStorage.setItem('popular', JSON.stringify(response.recipes))
    setPopuar(response.recipes);
  }
  };
  return (<div>
      <div className="wrapper">
      <h3>Popular picks</h3>
       < Splide options={{
         perPage:4,
         pagination:false,
         arrows: false,
         gap: '1rem',
         drag:'free'}}>
       {popular.map((recipe)=>{
         return(
           <SplideSlide className="splide-slide" key={recipe.id}>
             <Link to={'/recipes/' + recipe.id}>
          <div className="card" >
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

export default Popular;
