import React from "react";
import styles from "./Databox.module.css";
import { Line } from "react-chartjs-2";
import DataCard from "./DataCard";

const Databox = () => {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "# of Votes",
        data: [30, 42, 66, 70, 78, 102, 105, 110, 114, 130],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        <Line data={data} options={options} />
      </div>
      <section id="exerciselogs">
        <h2 href="#exerciselogs">Exercise Logs</h2>
        <div>
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
        </div>
      </section>
    </div>
  );
};

export default Databox;
