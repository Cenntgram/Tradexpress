import React from 'react'
import '../styles/Section1.css'
import Group127 from '../images/Group 127.png'
import Group68 from '../images/Group 68@2x.png'
import Group69 from '../images/Group 69.png'

const Section1 = () => {
  return (
    <div className='sec1'>
      <h2 className='head2'>Buy, sell and manage your Crypto on TradExpress.</h2>
      <p className='ptag1'>Easy Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with NGN</p>
      <button className='border-white button-width bg-white'>Get Started</button>
      <img className='background-image' src={Group127} alt="" />
      <div className='sec1-img'>
        <img src={Group68} alt="" />
        <img src={Group69} alt="" />
      </div>
      </div>
  )}

export default Section1