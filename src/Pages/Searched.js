import React, { useEffect, useState } from 'react'
import './Searched.css';
import { Link, useParams } from 'react-router-dom';

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] =useState([])
let params= useParams()
  const getSearched = async (name) =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7fb48b8d24114b76b2cd73884bc63d23&query=${name}`)
    const response = await data.json();
    setSearchedRecipes(response.results)
  }
  useEffect (()=>{
  getSearched(params.search)
  }, [params.search])
  return (
    <div className='searched-wrapper'>
      {searchedRecipes.map((item)=>{
        return(
          <Link to={'/recipes/' + item.id}>
          <div key={item.id} >
            <div className='searched-card'>
              <img src={item.image} alt={item.title}/>
              <h4>{item.title}</h4>
            </div>
          </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Searched
