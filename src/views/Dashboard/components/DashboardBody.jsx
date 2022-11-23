import { DataTable } from "../../../components/DataTable/DataTable";
import { LineChart } from "../../../components/LineChart/LineChart";
import { useTempHum } from "../../../hooks/useTempHum";
import { data } from "../../../config/data";

const DashboardBody = ({ data: entries }) => {
  const { getRawDataFromEntries } = useTempHum();

  const { temperatureData, humidityData, dates } = getRawDataFromEntries(
    entries[0]
  );

  // DATA SETS
  const tempDatasets = [
    {
      label: data.labels.temperature.title,
      data: temperatureData,
      fill: false,
      borderColor: data.labels.temperature.color,
      tension: 0.1,
    },
  ];
  const humDatasets = [
    {
      label: data.labels.humidity.title,
      data: humidityData,
      fill: false,
      borderColor: data.labels.humidity.color,
      tension: 0.1,
    },
  ];

  return (
    <section className="Dashboard__body">
      <DataTable
        headers={["Hora", "Temperatura", "Humedad"]}
        data={entries[0].slice(0, 1440)}
        params={data.params}
      />
      <LineChart
        title="Temperatura"
        datasets={tempDatasets}
        labels={dates}
        scales={{ max: 100, min: 0 }}
      />
      <LineChart
        title="Humedad"
        datasets={humDatasets}
        labels={dates}
        scales={{ max: 100, min: 0 }}
      />
    </section>
  );
};

export { DashboardBody };
