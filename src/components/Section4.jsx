import React from "react";
import "../styles/Section4.css";
import Number from "../images/emojione-monotone_keycap-1.png";
import profile from "../images/cuate.png";
import piggy from "../images/piggy.png";
import Number2 from "../images/emojione-monotone_keycap-2.png";
import Number3 from "../images/emojione-monotone_keycap-3.png"
import bitcoin from "../images/bitcoin.png"

const Section4 = () => {
  return (
    <div className="section4 container">
      <h2 className="head1">
        Buy and Sell your Cryptocurrency in 3 simple steps
      </h2>
      <p className="ptag4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est lectus
        faucibus et nunc id sollicitudin pretium nulla. Et nunc tempus mauris
        ullamcorper mauris, rhoncus sed magna. Eu consectetur nulla aliquam
        consectetur lectus. Rutrum feugiat et, tellus mattis donec et odio.
      </p>

      <div className="div4">
        <div className="sec4-div">
          <img src={Number} alt="" className="  img4" />
          <div>
            <h2 className="head22 text-start text-black">
              Create a free Account
            </h2>
            <p className="ptag44 text-start">
              Sign up for your free TradExpress Wallet on web, iOS, or Android
              devices and follow our easy process to set up your profile.
            </p>
          </div>
        </div>
        <div className="img-box">
          <img src={profile} alt="" />
        </div>
      </div>

      <div className="div4  d-flex">
        <div className="sec4-div">
          <img src={Number2} alt="" className="  img4" />
          <div>
            <h2 className="head22 text-start text-black">Deposit</h2>
            <p className="ptag44 text-start">
              Choose your preferred deposit option like bank transfer,
              credit/debit card or send digital asset directly to your wallet
              for easy funding/withdrawal.
            </p>
          </div>
        </div>
        <div className="img-box">
          <img src={piggy} alt="" />
        </div>
      </div>

      <div className="div4 d-flex">
        <div className="sec4-div">
          <img src={Number3} alt="" className="  img4" />
          <div>
            <h2 className="head22 text-start text-black">
            Buy/ Sell Crypto
            </h2>
            <p className="ptag44 text-start">
              Sign up for your free TradExpress Wallet on web, iOS, or Android
              devices and follow our easy process to set up your profile.
            </p>
          </div>
        </div>
        <div className="img-box">
          <img src={bitcoin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section4;
