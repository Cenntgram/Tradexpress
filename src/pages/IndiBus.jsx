import React, { useState } from 'react'
import Individual from '../components/Individual'
import Business from '../components/Business'
import '../styles/IndiBus.css'




const IndiBus = () => {
const [active, setActive]= useState('indi')
const [display, setDisplay]= useState(true)
  return (
    <div className='main-individual'>
      <div className='main-individual-inner'>
      <h2>Welcome</h2>
      <div className="toggle-button">
        <button
        onClick={()=>{
          setActive('indi')
          setDisplay(true)
        }}
        className={active === 'indi' ? 'active' : ''}> Individual </button>
        <button 
        onClick={()=>{
          setActive('business')
          setDisplay(false)
        }}
        className={active === 'business' ? 'active' : ''}> Business </button>
      </div>
      {display === true ?  <Individual/> : <Business/>}
      </div>
    </div>
  
  )
}

export default IndiBus