import React from "react";

const AverageCard = ({ title, value, symbol, max, maxValue, minValue }) => {
  return (
    <div className="AverageCard">
      <h2>{title}</h2>
      <div className="AverageCard__value">
        <span>{value}</span>
        <span>{symbol}</span>
      </div>
      <progress max={max} value={value}></progress>
      <div className="AverageCard__maxmin">
        <div className="AverageCard__maxminvalue max">
          <span>Max.</span>
          <span>{maxValue}{symbol}</span>
        </div>
        <div className="AverageCard__maxminvalue min">
          <span>Min.</span>
          <span>{minValue}{symbol}</span>
        </div>
      </div>
    </div>
  );
};

export { AverageCard };
