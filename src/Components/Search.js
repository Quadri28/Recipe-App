import './Search.css'
import { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import {  Link, useNavigate, useParams } from 'react-router-dom';


const Search =()=>{
    const [input, setInput]= useState('')
    let params = useParams();
let navigate = useNavigate();
    const submitHandler=(e)=>{
        e.preventDefault();
        navigate('/recipes/' + params.id)
    }
    return(
        <div>
            <Link to={('/searched/' + input)}>
           < form className='search-form' onSubmit={submitHandler}>
          <FaSearch/>
              <input type='text' className='search-input' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
           </form>
           </Link>
        </div>
    )
}
export default Search;