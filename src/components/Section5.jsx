import React from 'react'
import '../styles/Section5.css'
import Group119 from '../images/Group 119.png'
import Group120 from '../images/Group 120.png'
import { Link } from 'react-router-dom'

const Section5 = () => {
  return (
    <div className='sec5 py-3'>
      <p className='ptag5 py-2 w-50'>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
      <h2 className='head5 w-75'>Create your account for free and start trading today!</h2>
      <Link className='button5 mt-3 py-2 w-50'>Get Started</Link>
      <div className='d-flex gap-2 mx-auto justify-content-center py-3 mt-3 w-50'>
        <img src={Group119} alt="" />
        <img src={Group120} alt="" />
      </div>
    </div>
  )
}

export default Section5