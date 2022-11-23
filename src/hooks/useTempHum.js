import { useEffect, useState } from "react";

const useTempHum = () => {
  const formatDate = (data) => {
    data = data.map((item) => {
      let date = new Date(item.createdAt).toString();
      item.date = date;
      return item;
    });
    return data;
  };

  const getRawDataFromEntries = (entries) => {
    // INITIAL STATES
    let temperatureData = [];
    let humidityData = [];
    let dates = [];

    // GET TEMPERATURE AND HUMIDITY DATA
    const len = entries.length > 1440 ? 1440 : entries.length;
    for (let i = len - 1; i >= 0; i--) {
      // 1440 = 24 hours * 60 minutes
      temperatureData.push(entries[i].temperature);
      humidityData.push(entries[i].humidity);

      // GET DATES
      if (len > 1440 && i % 60 === 0) {
        dates.push(entries[i].date.split(" ")[4]);
      } else {
        dates.push(entries[i].date.split(" ")[4]);
      }
    }

    return { temperatureData, humidityData, dates };
  };

  return { formatDate, getRawDataFromEntries };
};

export { useTempHum };
