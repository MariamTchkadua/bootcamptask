import React from 'react'
import { useState, useEffect } from 'react'
import emailPh from './photos/email.svg'
import phonePh from './photos/phone.svg'
import redstar from './photos/redstar.svg'
import { NavLink } from 'react-router-dom';

import vector from './photos/Vector.png'
import correct from './photos/Correct.svg'
import wrong from './photos/wrong.svg'


export default function PageThree() {

  //proffesion
  const [profession, setProfession]=useState(sessionStorage.getItem("profession")||"")
  const [border11, setBorder11]=useState(sessionStorage.getItem("border11"||""))
  const [correctId11, setCorrectId11]=useState(sessionStorage.getItem("correctId11")|| "")
  const [wrongId11, setWrongId11]=useState(sessionStorage.getItem("wrongId11")||"")

  //employer
  const [employer, setEmployer]=useState(sessionStorage.getItem("employer")||"")
  const [border12, setBorder12]=useState(sessionStorage.getItem("border12"||""))
  const [correctId12, setCorrectId12]=useState(sessionStorage.getItem("correctId12")|| "")
  const [wrongId12, setWrongId12]=useState(sessionStorage.getItem("wrongId12")||"")

  //date start
  const [start, setStart] = useState(sessionStorage.getItem("start"|| ""))
  const [border13, setBorder13]=useState(sessionStorage.getItem("border13"||""))

  //date end
  const [end, setEnd] = useState(sessionStorage.getItem("end" || ""))
  const [border14, setBorder14]=useState(sessionStorage.getItem("border14"||""))

  //describe
  const [describe, setDescribe]=useState(sessionStorage.getItem("describe")||"")
  const [border15, setBorder15]=useState(sessionStorage.getItem("border15"||""))

  //cv header experience display
  const [dis1, setDis1]=useState(false)
  



  //set Profession
  let saveProffesion = (e) => {
    setProfession(e.target.value)
    let tv=e.target.value
    if (tv.length > 1){ 
      setBorder11("1px solid #98E37E")
      setCorrectId11("corractAll")
      setWrongId11("")
      sessionStorage.setItem("wrongId11", "")
      sessionStorage.setItem("border11", "1px solid #98E37E")
      sessionStorage.setItem("correctId11", "correctAll")
    }else{
      setCorrectId11("")
      setWrongId11("wrongAll")
      setBorder11("1px solid #EF5050")
      sessionStorage.setItem("wrongId11", "wrongAll")
      sessionStorage.setItem("correctId11", "")
      sessionStorage.setItem("border11", "1px solid #EF5050")
    }
  }

  //set Employer
  let saveEmployer = (e) => {
    setEmployer(e.target.value)
    let tv=e.target.value
    
    if (tv.length > 1){ 
      setBorder12("1px solid #98E37E")
      setCorrectId12("corractAll")
      setWrongId12("")

      sessionStorage.setItem("wrongId12", "")
      sessionStorage.setItem("border12", "1px solid #98E37E")
      sessionStorage.setItem("correctId12", "correctAll")
    }else{
      setCorrectId12("")
      setWrongId12("wrongAll")
      setBorder12("1px solid #EF5050")

      sessionStorage.setItem("wrongId12", "wrongAll")
      sessionStorage.setItem("correctId12", "")
      sessionStorage.setItem("border12", "1px solid #EF5050")
    }
  }
  

  //set date

  //start
  const saveStart = e => {
    setStart(e.target.value);
    let st=e.target.value
    setDis1(true)
    if(st.length>0){
      setBorder13("1px solid #98E37E")
      sessionStorage.setItem("border13", "1px solid #98E37E")
    }else{
      setBorder13("1px solid #EF5050")
      sessionStorage.setItem("border13", "1px solid #EF5050")
    }
  };

  //end
  const saveEnd = e => {
    setEnd(e.target.value);
    setDis1(true)
    console.log(e.target.value)
    let st=e.target.value
    if(st.length>0){
      setBorder14("1px solid #98E37E")
      sessionStorage.setItem("border14", "1px solid #98E37E")
    }else{
      setBorder14("1px solid #EF5050")
      sessionStorage.setItem("border14", "1px solid #EF5050")
    }
  };
  

  //set describe

  const saveDescribe = e => {
    setDescribe(e.target.value);
    let st=e.target.value
    if(st.length>0){
      setBorder15("1px solid #98E37E")
      sessionStorage.setItem("border15", "1px solid #98E37E")
    }else{
      setBorder15("1px solid #EF5050")
      sessionStorage.setItem("border15", "1px solid #EF5050")
    }
  };
  
  //sending other items to storage

  useEffect(() => {
    sessionStorage.setItem("profession", profession)
    sessionStorage.setItem("employer", employer)
    sessionStorage.setItem("start", start)
    sessionStorage.setItem("end", end)
    sessionStorage.setItem("describe", describe)
    
  }, [profession, employer, start, end, describe])
  
  useEffect(()=>{
    if(profession.length > 0 || employer.length >0 ||  describe.length>0){
      setDis1("block")
    }
  }, [profession, employer, describe, start, end])



 

  return (

  <div style={{display: "flex"}}>

      {/* Header section */}

    <div className='container2'>
      <div className='header1'>
              <div className='vectorBox'>
                <img src={vector} alt="" />
              </div>
              <div className='headerContainer'>
                <div className='headerBox'>
                  <p className='infoTxt'>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</p>
                  <p className='pageNumber'>2/3</p>
                </div>
                <hr />
              </div>
      </div>

      {/* profesion section */}

      <div className='emailSection' id='profession'>
              <p className='allHeaders'>თანამდებობა</p>
              <div className='emailInputBox'>
                <div className='emailInputDiv' style={{border: border11}} >
                  <input className='emailInput' type="text" value={profession} onChange={saveProffesion} placeholder='დეველოპერი, დიზაინერი, ა.შ.'/>
                  <img src={correct} className='correct' id={correctId11} alt="" />
                </div>
                <img src={wrong} className='wrong' id={wrongId11} alt="" />
              </div>
              <p className='allInstruction'>მინიმუმ 2 სიმბოლო</p>
      </div>


      {/* employer section */}


      <div className='emailSection' id='employer'>
              <p className='allHeaders'>დამსაქმებელი</p>
              <div className='emailInputBox'>
                <div className='emailInputDiv' style={{border: border12}} >
                  <input className='emailInput' type="text" value={employer} onChange={saveEmployer} placeholder='დამსაქმებელი'/>
                  <img src={correct} className='correct' id={correctId12} alt="" />
                </div>
                <img src={wrong} className='wrong' id={wrongId12} alt="" />
              </div>
              <p className='allInstruction'>მინიმუმ 2 სიმბოლო</p>
      </div>




      {/* date section */}


      <div className='dateSection'>

        {/* start */}
        <div className='startContainer' >
          <p className='allHeaders'> დაწყების რიცხვი</p>
          <div className='date' style={{border: border13}}>
            <input className="dateInput" type="date" value={start} onChange={saveStart} />
          </div>
          
        </div>

        {/* end */}
        <div className='startContainer'>
          <p className='allHeaders'> დაწყების რიცხვი</p>
          <div className='date' style={{border: border14}}>
            <input className='dateInput' type="date" value={end} onChange={saveEnd}/>
          </div>
        </div>
        
      </div>

      {/* description section */}

      <div className='describeSection'>
        <p className='allHeaders'>აღწერა</p>
        <div className='describeBox' style={{border: border15}}>
          <input className='describeInput' type="text" value={describe} onChange={saveDescribe} placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'/>
        </div>
        
      </div>

      {/* hr */}

      <hr className='hrhr'/>

      <button className='moreExperience'>მეტი გამოცდილების დამატება</button>

      {/* next and prev buttons */}

      <div className='nextPrevBut'>
        
        <NavLink to="/page2"><button className='backBut'>ᲣᲙᲐᲜ</button></NavLink>
        <NavLink to="/page4"><button className='nextBut'>ᲨᲔᲛᲓᲔᲒᲘ</button></NavLink>
        
      </div>

    </div>







    {/* Cv section */}

    <div className='cvPage'>
      <div>
        <div >
          <div className='addPageTwoSection'>
            <div className='allPrivateInfo'>

              {/* name and surname */}

              <div className='getNameSurname'>
                <p>{sessionStorage.getItem("name")}</p>
                <p style={{marginLeft: "20px", height: "42px"}}>{sessionStorage.getItem("surname")}</p>
              </div>

                {/* email */}

              <div className='getEm'>
                <img style={{display: "block", height: "16.6px"}} src={emailPh} alt="" />
                <p style={{marginLeft: "11.6px"}}>{sessionStorage.getItem("email")} </p>
              </div>

              {/* phone */}

              <div className='getPh'>
                <img style={{display: "block", height: "16.6px"}}  src={phonePh} alt="" />
                <p style={{marginLeft: "11.6px"}}>{sessionStorage.getItem("phone")}</p>
              </div>
              
              {/* about me */}

              <div className='aM'>
                <p className='allCvHeadres' style={{display: "block"}} >ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</p>
                <p className='abMTx'>{sessionStorage.getItem("aboutMe")}</p>
              </div>
              
            </div>
            <div className='setImage'>
              <img className='cvImg' src={sessionStorage.getItem("photo")} alt="" />
            </div>
          </div>
        </div>


        <hr className='cvHr1'/>

        {/* page three cv section  */}

        <div className='cvPart2'>
          <p className='allCvHeadres' style={{display: dis1 ? "block" : "none"}}>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</p>
          <p>{profession}, {employer}</p>
          <p>{start} - {end}</p>
          <p className='cvDescribe'>{describe}</p>
        
        </div>
        <img style={{marginLeft: "80px", marginTop: "436px"}} src={redstar} alt="" />
       
      </div>

      
      
    </div>
  </div>
  )
}
