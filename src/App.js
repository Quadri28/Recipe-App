import './App.css';
import Category from './Components/Category';
import Search from './Components/Search';
import Cuisine from './Pages/Cuisine';
import Searched from './Pages/Searched';
import Home from './Pages/Home'

import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Recipes from './Pages/Recipes';
import {GiKnifeFork} from 'react-icons/gi'
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const location= useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
    <motion
    animate= {{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}>
      
      <div className='logo'>
        <GiKnifeFork/>
      <Link className='nav' to='/'>
        Delicious
        </Link>
      </div>
    
      <Search/>
      <Category/>
      <Routes Location={location} key={location.pathname}>
      <Route path='/' element={<Home/>}/>
      <Route path='/cuisine/:type' element={<Cuisine/>} />
      <Route path='/searched/:search' element={<Searched/>} />
      <Route path='/recipes/:name' element={<Recipes/>} />
      </Routes>
      </motion>
      </AnimatePresence>
  )
}

export default App
