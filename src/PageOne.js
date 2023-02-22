import React from 'react';
import { NavLink } from 'react-router-dom';
import roundLogo from './photos/logoRound.svg'
import redBerry from './photos/redberrypng.png'


export default function PageOne(props) {
  
  return (
    <div className='container'>
      <img className='redberry' src={redBerry} alt="" />
      <hr className='hr' />
      <NavLink to="/page2">
        <button className='but'> რეზიუმეს დამატება </button>
      </NavLink>
      
      <img className='roundlogo' src={roundLogo} alt="" />
      
      
    </div>
  )
}

