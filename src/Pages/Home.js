import React from 'react'
import Vegie from '../Components/Veggie';
import Popular from '../Components/Popular';
import { motion } from 'framer-motion'; 

const Home = () => {
  return (
    <motion
    animate= {{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    >
        <Vegie/>
      <Popular/>
    </motion>
  )
}

export default Home;
