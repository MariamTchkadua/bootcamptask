import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import emailPh from './photos/email.svg'
import phonePh from './photos/phone.svg'
import redstar from './photos/redstar.svg'
import { MyContext } from './MyContext'


export default function Cv() {
  const [em, setEm]=useState("none")
  const [ph, setPh]=useState("none")
  const [aM, setAM]=useState("none")

  let context = useContext(MyContext)
  // getting Email value and changing display of photo

  useEffect(() => {
    if (context.valueEmail.length > 0) {
      setEm("block");
    } else {
      setEm("none");
    }
  }, [context.valueEmail]);

 // getting phone value and changing display of photo

  useEffect(() => {
    if (context.valuePhone.length > 0) {
      setPh("block");
    } else {
      setPh("none");
    }
  }, [context.valuePhone]);

// getting aboutMe value and changing display of text header

  useEffect(() => {
    if (context.valueAboutMe.length > 0) {
      setAM("block");
    } else {
      setAM("none");
    }
  }, [context.valueAboutMe]);


 

  return (

    <div className='cvPage'>
      <div style={{height: "994px"}}>
        <div className='addPageTwoSection'>
          <div className='allPrivateInfo'>

            {/* name and surname */}

            <div className='getNameSurname'>
              <p>{context.valueName}</p>
              <p style={{marginLeft: "20px", height: "42px"}}>{context.valueSurname}</p>
            </div>

              {/* email */}

            <div className='getEm'>
              <img style={{display: em, height: "16.6px"}} src={emailPh} alt="" />
              <p style={{marginLeft: "11.6px"}}>{context.valueEmail} </p>
            </div>

            {/* phone */}

            <div className='getPh'>
              <img style={{display: ph, height: "16.6px"}}  src={phonePh} alt="" />
              <p style={{marginLeft: "11.6px"}}>{context.valuePhone}</p>
            </div>
            
            {/* about me */}

            <div className='aM'>
              <p className='allCvHeadres' style={{display: aM}} >ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</p>
              <p className='abMTx'>{context.valueAboutMe}</p>
            </div>
            
          </div>
          <div className='setImage'>
            <img className='cvImg' src={context.previewUrl} alt="" />
          </div>
        </div>
      </div>
      <img style={{marginLeft: "80px"}} src={redstar} alt="" />
      
    </div>
  )
}

