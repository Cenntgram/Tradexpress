import React from "react";
import "../styles/Section2.css";
import Arrowup from "../images/Arrowup.png";
import Arrowdown from "../images/Arrowdown.png";

const Section2 = ({ data }) => {
  return (
    <marquee behavior="" direction="">
  <div className="d-flex flex-column flex-md-row gap-4 text-center text-md-start section2">
        {data.map((datum) => {
          return (
            <div>
              <div className="d-md-flex gap-3 text-center text-md-start">
                <p>{datum.symbol}/NGN</p>
                <p>{datum.percent_change_24h}</p>
                <span>
                  {datum.percent_change_24h.startsWith("-") ? (
                    <img src={Arrowdown} alt="arrow down" />
                  ) : (
                    <img src={Arrowup} alt="arrow up" />
                  )}
                </span>
              </div>
              <p>{datum.price_usd}</p>
            </div>
          );
        })}
      </div>
    </marquee>
  );
};

export default Section2;
