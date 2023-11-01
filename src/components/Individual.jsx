import React from 'react'
import '../styles/Individual.css'

const Individual = () => {
  return (
    <div className='individual'>
      <form className='indi1'>
        <input className='user' type="text" placeholder='     Username' />
        <input className='full' type="text" placeholder='     Full Name' />
        <input className='email' type="text" placeholder='     Email' />
        <input className='phone' type="text" placeholder='     Phone Number' />
        <input className='code' type="text" placeholder='     Referral Code (optional)' />
      </form>
      <div className='indi2'>
        <p className='indi-ptag'>
        By clicking the Sign Up button below, you agree to TradExpress  terms and service
        </p>
        <button className='button1'>Sign Up</button>
        <p className='indi-ptag2'>Already have an account? click here</p>
      </div>
    </div>
  )
}

export default Individual