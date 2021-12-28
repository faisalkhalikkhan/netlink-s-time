import React from "react";
import "./clock.css";

const DigitalClock = ({ hour, minutes, second }) => {
  return (
    <div className="digital_clock">
      <div className="digital_clock_divs">
        <h2>{`${hour > 12 ? hour - 12 : hour}`} </h2>
        <h4>HOURS</h4>
      </div>
      <div className="digital_clock_divs">
        <h2>{minutes}</h2>
        <h4>MUNITES</h4>
      </div>
      <div className="digital_clock_divs">
        <h2>{second}</h2>
        <h4>SECONDS</h4>
      </div>
    </div>
  );
};

export default DigitalClock;
