import { useState } from "react";
import { CurrentCard } from "../../../components/CurrentCard/CurrentCard";
import { AverageCard } from "../../../components/AverageCard/AverageCard";
import { AlertCard } from "../../../components/AlertCard/AlertCard";
import { useTempHum } from "../../../hooks/useTempHum";

const DashboardHeader = ({ data }) => {
  const { getRawDataFromEntries } = useTempHum();
  const { temperatureData, humidityData, dates } = getRawDataFromEntries(
    data[0]
  );

  // AVERAGE TEMPERATURE && HUMIDITY
  const averageTemp =
    temperatureData.reduce((a, b) => a + b, 0) / temperatureData.length;
  const averageHum =
    humidityData.reduce((a, b) => a + b, 0) / humidityData.length;

  // MAX TEMPERATURE && HUMIDITY
  const maxTemp = Math.max(...temperatureData);
  const maxHum = Math.max(...humidityData);

  // MIN TEMPERATURE && HUMIDITY
  const minTemp = Math.min(...temperatureData);
  const minHum = Math.min(...humidityData);

  // PARAMS
  const maxTempParam = data[1][0].maxTemp;
  const maxHumParam = data[1][0].maxHum;

  // ALARMS
  let alerts = 0;
  data[0].forEach((value) => {
    if (value.alarm) alerts++;
  });

  return (
    <section className="Dashboard__header">
      <CurrentCard
        title="Temperatura Actual"
        value={temperatureData[0]}
        symbol="° C"
        maxParam={maxTempParam}
      />
      <CurrentCard
        title="Humedad Actual"
        value={humidityData[0]}
        symbol="%"
        maxParam={maxHumParam}
      />
      <AverageCard
        title="Temperatura Promedio"
        value={averageTemp.toFixed(2)}
        symbol="° C"
        max={maxTempParam}
        maxValue={maxTemp}
        minValue={minTemp}
      />
      <AverageCard
        title="Humedad Promedio"
        value={averageHum.toFixed(2)}
        symbol="%"
        max={maxHumParam}
        maxValue={maxHum}
        minValue={minHum}
      />
      <AlertCard
        value={alerts}
        tempValue={maxTemp > maxTempParam ? maxTemp : null}
        tempSymbol={maxTemp > maxTempParam ? "° C" : null}
        humValue={maxHum > maxHumParam ? maxHum : null}
        humSymbol={maxHum > maxHumParam ? "%" : null}
      />
    </section>
  );
};

export { DashboardHeader };
