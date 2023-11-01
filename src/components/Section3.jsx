import React, { useState } from "react";
import "../styles/Section3.css";
import payment from '../images/payment.png'
import freelence from '../images/freelence.png'
import Amico from "../images/amico.png";
const Section3 = () => {
const [open, setOpen] = useState(true)
const btnText = open ? 'see less' : 'see more'
const isActive = open ? 'd-grid' : 'd-none'

  return (
    <div className="sec3 py-5">
      <h4 className="head4">
        Why do people get involved with Cryptocurrencies
      </h4>
      <button onClick={()=>{
        setOpen(!open)
        
      }} className="sec3-button">{btnText}</button>
      <div className={`display  ${isActive}`}>
        <div className="image1 py-4 px-3 w-100" >
          <img src={payment} alt="" />
          <h3 className="head3">Easy Mode of Payment</h3>
          <p className="ptag3">
            People can now easily send and receive money from anywhere in the
            world to purchase goods and pay for services.
          </p>
        </div>

        <div className="image1  px-3 w-100">
          <img src={freelence} alt="" />
          <h3 className="head3">Financial Freedom</h3>
          <p className="ptag3">
            Just like the internet no single entity controls the Crypto network
            which provides users transparency and privacy, which puts you in
            absolute control of your money.
          </p>
        </div>

        <div className="image1 px-3 w-100">
          <img src={Amico} alt="" />
          <h3 className="head3">Investment</h3>
          <p className="ptag3">
            The constant demand as made Cryptocurrecies a Digital Gold used for
            alternative store of wealth on long term investments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
