import React from 'react'
import { useState, useEffect } from 'react'
import emailPh from './photos/email.svg'
import phonePh from './photos/phone.svg'
import redstar from './photos/redstar.svg'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import vector from './photos/Vector.png'
import correct from './photos/Correct.svg'
import wrong from './photos/wrong.svg'

export default function PageFour() {
    //university
    const [university, setUniversity]=useState(sessionStorage.getItem("university")|| "")
    const [border21, setBorder21]=useState(sessionStorage.getItem("border21")||"")
    const [correctId21, setCorrectId21]=useState(sessionStorage.getItem("correctId21")||"")
    const [wrongId21, setWrongId21]=useState(sessionStorage.getItem("wrongId21")||"")

    //degree
    const [degrees, setDegrees] = useState([]);
    const [selected, setSelected]=useState(sessionStorage.getItem("selected")||"")
    const [border22, setBorder22]=useState(sessionStorage.getItem("border22")|| "")

    //date of finish education
    const [finish, setFinish] = useState(sessionStorage.getItem("finish" || ""))
    const [border23, setBorder23]=useState(sessionStorage.getItem("border23"||""))

    //describe
    const [describe1, setDescribe1]=useState(sessionStorage.getItem("describe1")||"")
    const [border15, setBorder15]=useState(sessionStorage.getItem("border15"||""))

   
   

    

    //set University

    let saveUniversity = (e) =>{
        setUniversity(e.target.value)
        let tv=e.target.value
    if (tv.length > 1){ 
      setBorder21("1px solid #98E37E")
      setCorrectId21("corractAll")
      setWrongId21("")
      sessionStorage.setItem("wrongId21", "")
      sessionStorage.setItem("border21", "1px solid #98E37E")
      sessionStorage.setItem("correctId21", "correctAll")
    }else{
      setCorrectId21("")
      setWrongId21("wrongAll")
      setBorder21("1px solid #EF5050")
      sessionStorage.setItem("wrongId21", "wrongAll")
      sessionStorage.setItem("correctId21", "")
      sessionStorage.setItem("border21", "1px solid #EF5050")
    }
    }

    // get degree components from API
    useEffect(() => {
        axios.get("https://resume.redberryinternship.ge/api/degrees").then((response) => {
          setDegrees(response.data.map((degree) => degree.title));
        });
    }, []);


    //set dagree borders

    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    useEffect(()=>{
        let ev = selected
        if(ev.length>0){
            setBorder22("1px solid #98E37E")
            sessionStorage.setItem("border22", "1px solid #98E37E")
            
            
        }else{
            setBorder22("1px solid #EF5050")
            sessionStorage.setItem("border22", "1px solid #EF5050")
        
        }
    })


    //set finish
    const saveFinish = e => {
        setFinish(e.target.value);
        
        console.log(e.target.value)
        let st=e.target.value
        if(st.length>0){
          setBorder23("1px solid #98E37E")
          sessionStorage.setItem("border23", "1px solid #98E37E")
        }else{
          setBorder23("1px solid #EF5050")
          sessionStorage.setItem("border23", "1px solid #EF5050")
        }
    };


     //set describe

    const saveDescribe = e => {
        setDescribe1(e.target.value);
        let st=e.target.value
        if(st.length>0){
        setBorder15("1px solid #98E37E")
        sessionStorage.setItem("border15", "1px solid #98E37E")
        }else{
        setBorder15("1px solid #EF5050")
        sessionStorage.setItem("border15", "1px solid #EF5050")
        }
    };
  
    sessionStorage.removeItem("descrybe1")
    useEffect(() => {
        sessionStorage.setItem("university", university)
        sessionStorage.setItem("selected", selected)
        sessionStorage.setItem("describe1", describe1)
    }, [university, selected, describe1]);


    // consol what i have in local storage
    const sessionData = {};
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        const value = sessionStorage.getItem(key);
        try {
        sessionData[key] = JSON.parse(value);
        } catch (error) {
        sessionData[key] = value;
        }
    }
    // console.log(sessionData);






let experiencess=[
    {
      "position": "დოქტორი",
      "employer": sessionStorage.getItem('employer'),
      "start_date": sessionStorage.getItem('start'),
      "due_date": sessionStorage.getItem('end'),
      "description": sessionStorage.getItem('describe')
    }
]

const sendData = async () => {
const formData = new FormData();



formData.append("name", sessionStorage.getItem("name"));
formData.append("surname", sessionStorage.getItem("surname"));
formData.append("email", sessionStorage.getItem("email"));
formData.append("phone_number", sessionStorage.getItem("phone"));


formData.append("educations", [
    {
      "institute": sessionStorage.getItem('university'),
      "degree_id": 7,
      "due_date": "2017/06/25",
      "description": sessionStorage.getItem('describe1')
    }
])


console.log(formData.getAll)

formData.append("about_me", sessionStorage.getItem("aboutMe"));

const photo = sessionStorage.getItem("photo");

fetch(photo)
  .then(res => res.blob())
  .then(blob => {
    formData.append("image", blob);

    axios.post("https://resume.redberryinternship.ge/api/cvs", formData)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  });
}


    
  return (
    <div style={{display: "flex"}}>
        <div className='container2'>
            <div className='header1'>
                <div className='vectorBox'>
                    <img src={vector} alt="" />
                </div>
                <div className='headerContainer'>
                    <div className='headerBox'>
                        <p className='infoTxt'>ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</p>
                        <p className='pageNumber'>3/3</p>
                    </div>
                    <hr />
                </div>
            </div>


            {/* university */}
            <div className='emailSection' id='profession'>
              <p className='allHeaders'>სასწავლებელი</p>
              <div className='emailInputBox'>
                <div className='emailInputDiv' style={{border: border21}} >
                  <input className='emailInput' type="text" value={university} onChange={saveUniversity} placeholder='სასწავლებელი'/>
                  <img src={correct} className='correct' id={correctId21} alt="" />
                </div>
                <img src={wrong} className='wrong' id={wrongId21} alt="" />
              </div>
              <p className='allInstruction'>მინიმუმ 2 სიმბოლო</p>
            </div>


            {/* select section */}
            <div className='degreeSection'>

                <div>
                    <p className='allHeaders'>ხარისხი</p>

                    <div className='selectedDiv' style={{border: border22}}>

                        <select className='selected' value={selected} onChange={handleChange}>
                            <option value="">აირჩიეთ ხარისხი</option>
                            {degrees.map((degree) => (
                                <option key={degree} value={degree}>
                                {degree}
                                </option>
                            ))}
                        </select>

                    </div>
                   
                </div>

                {/* date of finish education  */}
                <div className='startContainer'>

                    <p className='allHeaders'>დამთავრების რიცხვი</p>

                    <div className='date' style={{border: border23}}>
                        <input className="dateInput" type="date"  value={finish} onChange={saveFinish}/>
                    </div>

                </div>
               
            </div>
            {/* description section */}

            <div className='describeSection'>
                <p className='allHeaders'>აღწერა</p>
                <div className='describeBox' style={{border: border15}}>
                <input className='describeInput' type="text" value={describe1} onChange={saveDescribe} placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'/>
                </div>      
            </div>

            {/* hr */}

            <hr className='hrhr'/>

            <button className='moreExperience'>მეტი გამოცდილების დამატება</button>

            {/* next and prev buttons */}

            <div className='nextPrevBut'>
                    
                <NavLink to="/page3"><button className='backBut'>ᲣᲙᲐᲜ</button></NavLink>
                <button className='nextBut' onClick={sendData}>ᲓᲐᲡᲠᲣᲚᲔᲑᲐ</button>
                
                    
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
            <p className='allCvHeadres' style={{display: "block"}}>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</p>
            <p>{sessionStorage.getItem("profession")}, {sessionStorage.getItem("employer")}</p>
            <p>{sessionStorage.getItem("start")} - {sessionStorage.getItem("end")}</p>
            <p className='cvDescribe'>{sessionStorage.getItem("describe")}</p>
            
            </div>
            <img style={{marginLeft: "80px", marginTop: "200px"}} src={redstar} alt="" />
        
        </div>

        
        
        </div>
            
    </div>
  )
}




