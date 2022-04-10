import React from 'react'
import Hero from '../Hero/Hero';
import Card from '../Card/Card';
import Button from '../Button/Button';
import './Start.style.css';
import { useNavigate } from 'react-router-dom';

const Strat = () => {
  
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/addLocation')
  }

  return (
    <>
    <Hero/>
    <div className='card-btn-container'>
        <Card/> 
        <div onClick={handleClick}>
           <Button buttonText="Add Location" />
        </div>
        
    </div>
  
    </>
  )
}

export default Strat