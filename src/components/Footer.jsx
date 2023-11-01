import React from 'react'
import '../styles/Footer.css'
import twitter from '../images/twitter.png'
import telegram from '../images/cib_telegram.png'
import whatsapp from '../images/ri_whatsapp-fill.png'
import facebook from '../images/bxl_facebook.png'
import copyright from '../images/copyright.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-sub'>
        <div className='box1-foot'>
          <div>
            <h3>Products</h3>
            <ul>
              <li>Bitcoin</li>
              <li>Alt</li>
              <li>Fiat</li>
              <li>Refill</li>
              <li>P2P</li>
            </ul>
          </div>

          <div>
            <h3>Learn</h3>
            <ul>
              <li>Blog</li>
              <li>Help Center</li>
            </ul>
          </div>
        </div>

        <div className='box2-foot'>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>hello@tradexpress</li>
              <li>support@tradexpress</li>
            </ul>
            <div className='socials'>
              <img src={twitter} alt="" />
              <img src={telegram} alt="" />
              <img src={whatsapp} alt="" />
              <img src={facebook} alt="" />
            </div>
          </div>

          <div>
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Rates</li>
              <li>Mobile</li>
            </ul>
          </div>
        </div>

        <div className='box3-foot'>
          <h3>Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Anti-Money Laundary</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>

      <div className='bottom'>
        <img src={copyright} alt="" />
        <span>2023 Tradexpress Technologies. All Right Reserved </span>
      </div>
    </div>
  )
}

export default Footer