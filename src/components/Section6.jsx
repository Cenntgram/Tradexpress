import React from "react";
import "../styles/Section6.css";
import union from "../images/Union.png";
import ireti from "../images/ireti.png";
import bayo from "../images/bayo.png";
import ola from "../images/ola.png";
import quote from "../images/clarity_block-quote-line.png";

const Section6 = () => {
  return (
    <div>
      <h4 className="head6">Customer’s Review</h4>
      <div className="section6">
      <div className="union container d-flex flex-column gap-3">
        <div className="main-union">
          <img className="image1" src={union} alt="" />
          <img className="image2" src={quote} alt="" />
          <p>
            Trading on TradExpress mobile & web platforms has been a smooth
            experience for me quite easy to navigate.
          </p>
        </div>
        <div className="second-union">
          <img src={ireti} alt="" />
          <div>
          <h4>Ireti</h4>
          <p>Nigeria</p>
          </div>
        </div>
      </div>

      <div className="union container d-flex flex-column gap-3">
        <div className="main-union">
          <img className="image1" src={union} alt="" />
          <img className="image2" src={quote} alt="" />
          <p>
            Trading on TradExpress mobile & web platforms has been a smooth
            experience for me quite easy to navigate.
          </p>
        </div>
        <div className="second-union">
          <img src={bayo} alt="" />
          <div>
          <h4>Bayo</h4>
          <p>USA</p>
          </div>
        </div>
      </div>

      <div className="union container d-flex flex-column gap-3">
        <div className="main-union">
          <img className="image1" src={union} alt="" />
          <img className="image2" src={quote} alt="" />
          <p>
            Trading on TradExpress mobile & web platforms has been a smooth
            experience for me quite easy to navigate.
          </p>
        </div>
        <div className="second-union">
          <img src={ola} alt="" />
          <div>
          <h4>Olagoke</h4>
          <p>Nigeria</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Section6;
