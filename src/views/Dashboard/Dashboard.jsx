import React from "react";
import { config } from "../../config/config";
import { DashboardHeader } from "./components/DashboardHeader";
import { DashboardBody } from "./components/DashboardBody";
import { useFetchMultiple } from "../../hooks/useFetchMultiple";
import { useTempHum } from "../../hooks/useTempHum";

const Dashboard = () => {
  // FETCH DATA
  const { isLoading, data, error } = useFetchMultiple([
    `${config.BASE_API_URL}/data/get`,
    `${config.BASE_API_URL}/data/params`,
  ]);

  // FORMAT HOUR
  const { formatDate } = useTempHum();
  if (!isLoading) {
    data[0] = formatDate(data[0]);
  }

  return (
    <div className="Dashboard">
      {/* CURRENT DATE */}
      <div className="Dashboard__date">
        <p>{new Date().toLocaleDateString("es-MX")}</p>
      </div>

      {/* HEAD*/}
      {!isLoading && <DashboardHeader data={data} />}

      {/* BODY */}
      {!isLoading && <DashboardBody data={data} />}
    </div>
  );
};

export { Dashboard };
