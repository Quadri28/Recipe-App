import React from 'react'
import './Category.css'
import { FaPizzaSlice,FaHamburger  } from 'react-icons/fa';
import {GiNoodles, GiChopsticks}  from 'react-icons/gi';
import {Link} from 'react-router-dom';

const Categories = () => {
  return (
    <ul className='list'>
      <li>
    
        <Link to={'cuisine/Italian'} className='links'>
          <FaPizzaSlice/>
          <h4>Italian slice</h4>
          </Link>
          
          </li>
          <li>
          
            <Link to={'cuisine/American'} className='links'>
          <FaHamburger/>
          <h4>American slice</h4>
          </Link>
          
          </li>
          <li>
           
         <Link to={'cuisine/Thai'} className='links'> 
         <GiNoodles/>
          <h4>Thai</h4>
          </Link>
          </li>
          <li>
          <Link to={'cuisine/Chinese'} className='links'>
            <GiChopsticks/>
          <h4>Chinese</h4>
          </Link>
          </li>
    </ul>
  )
}

export default Categories
