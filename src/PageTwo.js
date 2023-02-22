import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

import vector from './photos/Vector.png'
import correct from './photos/Correct.svg'
import wrong from './photos/wrong.svg'
import Cv from './Cv';
import { MyContext } from './MyContext';


export default function PageTwo() {
  const [correctId, setCorrectId]=useState(sessionStorage.getItem("correctId")|| "")
  const [wrongId, setWrongId]=useState(sessionStorage.getItem("wrongId"|| ""))
  const [valueName, setValueName]=useState(sessionStorage.getItem("name")|| "")
  const [color, setColor]=useState(sessionStorage.getItem("color") || "")
  const [borderName, setBorderName]=useState(sessionStorage.getItem("borderName") || "")

  const [valueSurname, setValueSurname]=useState(sessionStorage.getItem("surname")|| "")
  const [correctId1, setCorrectId1]=useState(sessionStorage.getItem("correctId1")|| "")
  const [wrongId1, setWrongId1]=useState(sessionStorage.getItem("wrongId1")|| "")
  const [borderName1, setBorderName1]=useState(sessionStorage.getItem("borderName1") || "")
  
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const [valueAboutMe, setValueAboutMe]=useState(sessionStorage.getItem("aboutMe")|| "")
  const [valueEmail, setValueEmail]=useState(sessionStorage.getItem("email")|| "")
  const [correctId2, setCorrectId2]=useState(sessionStorage.getItem("correctId2")|| "")
  const [wrongId2, setWrongId2]=useState(sessionStorage.getItem("wrongId2"||""))

  const [borderEmail, setBorderEmail]=useState("")
  const [valuePhone, setValuePhone]=useState(sessionStorage.getItem("phone")|| "")
  const [correctId3, setCorrectId3]=useState(sessionStorage.getItem("correctId3")|| "")
  const [wrongId3, setWrongId3]=useState(sessionStorage.getItem("wrongId3"||""))

  const [borderPhone, setBorderPhone]=useState("")


  //name input
  let changeName= (e) =>{
      setValueName(e.target.value);
      let onlyGeorgianLetters = /^[ა-ჰ\s]+$/;
    if (onlyGeorgianLetters.test(e.target.value)) {
      setCorrectId("correctAll")
      setWrongId("")
      setColor("")
      setBorderName1("1px solid #98E37E");

      sessionStorage.setItem("color", "")
      sessionStorage.setItem("wrongId", "")
      sessionStorage.setItem("correctId", "correctAll")
      sessionStorage.setItem("borderName1", "1px solid #98E37E")
    } else {

      setCorrectId("")
      setWrongId("wrongAll")
      setColor("red")
      setBorderName1("1px solid #EF5050")
      sessionStorage.setItem("color", "red")
      sessionStorage.setItem("wrongId", "wrongAll")
      sessionStorage.setItem("correctId", "")
      sessionStorage.setItem("borderName1", "1px solid #EF5050")
    }
  }

//surname input
  let changeSurname= (e) =>{
      setValueSurname(e.target.value);
      let onlyGeorgianLetters = /^[ა-ჰ\s]+$/;
    if (onlyGeorgianLetters.test(e.target.value)) {
      setCorrectId1("correctAll")
      setWrongId1("")
      setBorderName("1px solid #98E37E");
      sessionStorage.setItem("wrongId1", "")
      sessionStorage.setItem("correctId1", "correctAll")
      sessionStorage.setItem("borderName", "1px solid #98E37E")
    } else {
      setCorrectId1("")
      setWrongId1("wrongAll")
      setBorderName("1px solid #EF5050")
      sessionStorage.setItem("wrongId1", "wrongAll")
      sessionStorage.setItem("correctId1", "")
      sessionStorage.setItem("borderName", "1px solid #EF5050")
    }
  }

  //about me input
  let changeAboutMe = (e) => {
    setValueAboutMe(e.target.value)
  }
  
  //saving photo in storage
  useEffect(() => {
    const storedPreviewUrl = sessionStorage.getItem("photo");
    if (storedPreviewUrl) {
      setPreviewUrl(storedPreviewUrl);
    
    }
  }, []);

  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile)
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = function(event) {
      const previewUrl = event.target.result;
      setPreviewUrl(previewUrl);
      sessionStorage.setItem("photo", previewUrl);
    };
    reader.readAsDataURL(selectedFile);
  };

 

// email input

let changeEmail= (e) =>{
    setValueEmail(e.target.value);
    let onlyGeorgianLetters = /^[a-zA-z0-9]+@redberry\.ge$/ ;
  if (onlyGeorgianLetters.test(e.target.value)) {
    setCorrectId2("correctAll")
      setWrongId2("")
      setBorderEmail("1px solid #98E37E")
      
      sessionStorage.setItem("correctId2", "correctAll")
      sessionStorage.setItem("wrongId2", "")
      sessionStorage.setItem("borderEmail", "1px solid #98E37E")
  } else {
    setCorrectId2("")
      setWrongId2("wrongAll")
      setBorderEmail("1px solid #EF5050")
      
      sessionStorage.setItem("correctId2", "")
      sessionStorage.setItem("wrongId2", "wrongAll")
      sessionStorage.setItem("borderEmail", "1px solid #EF5050")
  }
}

// phone input

let changePhone= (e) =>{
  setValuePhone(e.target.value);
  let onlyGeorgianLetters = /^(\+995)?(\s)?[5-9]\d{8}$/ ;
if (onlyGeorgianLetters.test(e.target.value)) {
  setCorrectId3("correctAll")
  setWrongId3("")
  setBorderPhone("1px solid #98E37E")
  
  sessionStorage.setItem("correctId3", "correctAll")
  sessionStorage.setItem("wrongId3", "")
  sessionStorage.setItem("borderPhone", "1px solid #98E37E")
} else {
  setCorrectId3("")
  setWrongId3("wrongAll")
  setBorderPhone("1px solid #EF5050")
 
  sessionStorage.setItem("correctId3", "")
  sessionStorage.setItem("wrongId3", "wrongAll")
  sessionStorage.setItem("borderPhone", "1px solid #EF5050")
}
}
  //sending other items to storage
  useEffect(() => {
    sessionStorage.setItem("name", valueName)
    sessionStorage.setItem("surname", valueSurname)
    sessionStorage.setItem("aboutMe", valueAboutMe)
    sessionStorage.setItem("email", valueEmail)
    sessionStorage.setItem("phone", valuePhone)
  }, [valueName, valueSurname, valueAboutMe, valueEmail, valuePhone]);
  

  

  
 
 
  return (
    <MyContext.Provider value={{valueName: valueName, valueSurname: valueSurname, valueEmail: valueEmail, valueAboutMe: valueAboutMe, valuePhone: valuePhone, previewUrl:previewUrl}}>
      <div className='App'>
        <div className='container2'>
          <div className='header1'>
            <div className='vectorBox'>
              <img src={vector} alt="" />
            </div>
            <div className='headerContainer'>
              <div className='headerBox'>
                <p className='infoTxt'>ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ</p>
                <p className='pageNumber'>1/3</p>
              </div>
              <hr />
            </div>
          </div>


          <div className='nameSection'>

            {/* name input */}

            <div className='nameSurnameBox'>
              <p style={{ color: color }} className='allHeaders'>სახელი</p>
              <div className='nameInputs'>
                <div style={{border: borderName1}} className='inpuBox'>
                  
                  <input className='nameSurnameInput' type="text"  placeholder='ანზორი' value={valueName} onChange={changeName}/>
                  <img className='correct' id={correctId} src={correct} alt=""  />
                </div>
                <div>
                  <img className='wrong' id={wrongId} src={wrong} alt="" />
                </div>
              </div>
              <p className='allInstruction'>მინიმუმ 2 ასო, ქართული ასოები</p>
            </div>

            {/* surname Input */}

            <div className='nameSurnameBox'>
              <p className='allHeaders'>გვარი</p>
              <div className='nameInputs'>
                <div style={{border: borderName}} className='inpuBox'>
                  <input className='nameSurnameInput' type="text"  placeholder='მუმლაძე' value={valueSurname} onChange={changeSurname}/>
                  <img  className='correct' id={correctId1} src={correct} alt="" />
                </div>
                <div>
                  <img className='wrong' id={wrongId1} src={wrong} alt="" />
                </div>
              </div>
              <p className='allInstruction'>მინიმუმ 2 ასო, ქართული ასოები</p>
            </div>
          </div>


          {/* photo section */}


          <div className='photoSection'>
            <p className='allHeaders'>პირადი ფოტოს ატვირთვა</p>
            <input
              className='input'
              type="file"
              style={{ display: "none" }}
              onChange={handleChange}
              id="inputFile"
            />
            <label htmlFor="inputFile">ატვირთვა</label>
            
          </div>
              


          {/* about me section */}


          <div className='aboutMeSection'>
            <p className='allHeaders'>ჩემ შესახებ (არასავალდებულო)</p>
            <div className='aboutMeBox'>
              <textarea  style={{
                border: "none",
                outline: "none",}} 
                className='aboutMe'
                placeholder='ზოგადი ინფო შენს შესახებ' 
                value={valueAboutMe} 
                onChange={changeAboutMe}/>
            </div>
            
          </div>

          {/* contact info email */}

          <div className='contactInfo'>
                <div className='emailSection'>
                  <p className='allHeaders'>ელ.ფოსტა</p>
                  <div className='emailInputBox'>
                    <div className='emailInputDiv' style={{border: borderEmail}} >
                      <input className='emailInput' type="text" value={valueEmail} onChange={changeEmail} placeholder='anzorr666@redberry.ge'/>
                      <img src={correct} className='correct' id={correctId2} alt="" />
                    </div>
                    <img src={wrong} className='wrong' id={wrongId2} alt="" />
                  </div>
                  <p className='allInstruction'>უნდა მთავრდებოდეს @redberry.ge-ით</p>
                </div>

                {/* phone section */}


                <div className='phoneSection'>
                  <p className='allHeaders'>მობილურის ნომერი</p>
                    <div className='emailInputBox'>
                      <div className='emailInputDiv' style={{border: borderPhone}} >
                        <input className='emailInput' type="text" value={valuePhone} onChange={changePhone} placeholder='+995 597 63 45 16'/>
                        <img src={correct} className='correct' id={correctId3} alt="" />
                      </div>
                      <img src={wrong} className='wrong' id={wrongId3} alt="" />
                    </div>
                    <p className='allInstruction'>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
                </div>
            </div>
            <NavLink to="/page3">
              <button className='next1'>
                შემდეგი
              </button>
            </NavLink>
              
          
        </div>
        <Cv />
      </div>
    </MyContext.Provider> 
  )
}

