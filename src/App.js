import React from 'react';
import './App.css';
import {questions} from './data';
import { useState } from 'react';


function App() {
  const [faq,setFaq]=useState(questions)
  const [showInfo,setShowInfo]=useState(false)
  const [selId,setSelId]=useState(null)
  const handlePLus=(e)=>{
    console.log(e.target.id)
    setSelId(e.target.id)
    if(showInfo==false)
    setShowInfo(true)
    if(showInfo==true)
    setShowInfo(false)
  }
  console.log(faq)

  return (
    <div className='container text-center'>
      <h2>FAQ</h2>
      {faq.map(obj=>(
        <div className='kerdesek' key={obj.id}>
          <h4>{obj.title}</h4>
          <button id={obj.id} onClick={handlePLus}>{showInfo && obj.id==selId ? "-" : "+"}</button>
          {showInfo && obj.id==selId && <div>{obj.info}</div>}
        </div>
      ))}
    </div>

  );
}

export default App;
