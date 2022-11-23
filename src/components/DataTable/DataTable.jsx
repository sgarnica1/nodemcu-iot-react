import React from "react";

const DataTable = ({ headers, data, params }) => {
  

  return (
    <article className="DataTable">
      <header className="DataTable__header">
        {headers.map((header, index) => {
          return (
            <div className="DataTable__header-value" key={index}>
              {header}
            </div>
          );
        })}
        {data.map((entry, index) => {
          return (
            <div className="DataTable__row" key={index}>
              <div className="DataTable__row-value">{entry.date.split(" ")[4]}</div>
              <div className={`DataTable__row-value ${entry.temperature > params.maxTemp ? "alert" : ""}`}>{entry.temperature}</div>
              <div className={`DataTable__row-value ${entry.temperature > params.maxHum ? "alert" : ""}`}>{entry.humidity}</div>
            </div>
          );
        })}
      </header>
    </article>
  );
};

export { DataTable };
