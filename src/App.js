import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFour from './PageFour';


function App() {


  
  return (
    <div className='App'>
      <Routes>
        <Route path="/bootcamptask" element={<PageOne />} />  
        <Route  path="/page2" element={<PageTwo/> } />
        <Route  path="/page3" element={<PageThree/>} />
        <Route  path="/page4" element={<PageFour/>} />
        
      </Routes>   
    </div>
    
  
  
  );
}

export default App;
