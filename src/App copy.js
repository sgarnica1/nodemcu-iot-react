import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./style.css";
import { Dashboard } from "./views/Dashboard";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [data, setData] = useState(null);
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    // fetch("https://nodemcu-iot-app.herokuapp.com/api/data/get")
    //   .then((res) => {
    //     res.json();
    //   })
    //   .then((data) => {
    //     // DATE
    //     data.map((d) => {
    //       let date = new Date(d.date).toString().split("G")[0];
    //       d.date = date;
    //     });
    //     // TEMPERATURE
    //     let temperatures = [...data];

    //     temperatures.map((temp, index) => {
    //       temperatures[index] = temp.temperature;
    //     });

    //     setData(data);
    //   });
    async function getData() {
      try {
        const res = await fetch(
          "https://nodemcu-iot-app.herokuapp.com/api/data/get"
        );
        const data = await res.json();
        // DATE
        data.map((d) => {
          let date = new Date(d.date).toString().split("G")[0];
          d.date = date;
          console.log(d)
        });
        // TEMPERATURE
        let temperatures = [...data];

        temperatures.map((temp, index) => {
          temperatures[index] = temp.temperature;
        });

        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  let temp = [];
  for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
      temp.push(i * 500);
    } else {
      temp.push(i);
    }
  }
  let hum = [];
  for (let i = 0; i < 11; i++) {
    if (i % 2 != 0) {
      hum.push(i * 250);
    } else {
      hum.push(i);
    }
  }

  let data2 = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: temperature,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: temperature,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="App">
      <Dashboard>
        <Line data={data2} options={options} />
      </Dashboard>
      <Line data={data2} options={options} />
      {data?.map((item, index) => (
        <div key={index} className="card">
          <p>Temperature: {item.temperature}</p>
          <p>Humidity: {item.humidity}</p>
          <p>Date: {item.date}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
