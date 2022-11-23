import React from "react";

const CurrentCard = ({ title, value, symbol, maxParam }) => {
  return (
    <div className="CurrentCard">
      <h2>{title}</h2>
      <div className="CurrentCard__value">
        <span>
          {value}
          {symbol}
        </span>
      </div>
      <progress max={maxParam} value={value}></progress>
      <div className="CurrentCard__maxlimit">
        <p>
          Límite de {title.toLowerCase()}: {maxParam}
          {symbol}{" "}
        </p>
      </div>
    </div>
  );
};

export { CurrentCard };
