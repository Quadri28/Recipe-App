
import React from 'react'
import { useState,  useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Recipes.css';

const Recipes = () => {
    const [details, setDetails] = useState({})
    const [activeTab, setActiveTab]= useState('')

    const params= useParams();
    const getDetails = async()=>{
      const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
      const detailData= await data.json();
      setDetails(detailData)
    }
    useEffect(()=>{
      getDetails()
    }, [params.name])
 
  return (
    <div className='recipes-wrapper'>
      <div className='image-container'>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title}/>
      </div>
      <div className='info'>
    <button className={activeTab==='instructions' ? 'active': ''} onClick={()=>{setActiveTab('instructions')}}>Instructions</button>
    <button className={activeTab==='ingredients' ? 'active': ''} onClick={()=>{setActiveTab('ingredients')}}>Ingredients</button>
    {activeTab === 'instructions' && (
       <div>
       <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
       <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
     </div>
    )}
    {activeTab=== 'ingredients' && (
      <ul>
       {details.extendedIngredients.map((ingredient)=>{
         return(
           <li key={ingredient.id}>{ingredient.original}</li>
         )
       })}
     </ul>
    )}
      </div>
    </div>
  )
}

export default Recipes