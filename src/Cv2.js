import React from 'react'
import { useContext } from 'react'
import emailPh from './photos/email.svg'
import phonePh from './photos/phone.svg'
import redstar from './photos/redstar.svg'
import { MyContext } from './MyContext'

export default function Cv2() {
    let context = useContext(MyContext)

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
              <img style={{display: "block", height: "16.6px"}} src={emailPh} alt="" />
              <p style={{marginLeft: "11.6px"}}>{context.valueEmail} </p>
            </div>

            {/* phone */}

            <div className='getPh'>
              <img style={{display: "block", height: "16.6px"}}  src={phonePh} alt="" />
              <p style={{marginLeft: "11.6px"}}>{context.valuePhone}</p>
            </div>
            
            {/* about me */}

            <div className='aM'>
              <p className='allCvHeadres' style={{display: "block"}} >ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</p>
              <p>{context.valueAboutMe}</p>
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
