import React from "react";

const AlertCard = ({ value, tempValue, tempSymbol, humValue, humSymbol }) => {
  return (
    <div className="AlertCard">
      <h2>Alertas</h2>
      <span>{value}</span>
      <div className="AlertCard__maxvalues">
        {tempValue && (
          <div className="AlertCard__maxminvalue max">
            <span>Temperatura Max.</span>
            <p>
              {tempValue}
              {tempSymbol}
            </p>
          </div>
        )}
        {humValue && (
          <div className="AlertCard__maxminvalue min">
            <span>Humedad Max.</span>
            <p>
              {humValue}
              {humSymbol}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export { AlertCard };
