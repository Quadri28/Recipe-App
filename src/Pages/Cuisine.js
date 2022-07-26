import React, { useEffect, useState } from 'react'
import './Cuisine.css';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';




const Cuisine = () => {

  const [cuisine, setCuisine]= useState([])
  let params = useParams();
  const getCuisine = async (name) =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&cuisine=${name}`)
    const response = await data.json();
    setCuisine(response.results)
  }

  useEffect(()=>{
    getCuisine(params.type)
  }, [params.type])

  return (
    <div className='cuisine-wrapper'>
      {cuisine.map((item)=>{
        return(
          <Link to={'/recipes/' + item.id} > 
        <div className='cuisine-card' id={item.id}>
          <img src={item.image} alt={item.title}/>
          <h4>{item.title}</h4>
        </div>
        </Link>
        )
      })}
     
    </div>
  )
}

export default Cuisine
