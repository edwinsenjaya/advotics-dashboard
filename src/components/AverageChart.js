import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function AverageChart() {
  const data = [
    {
      id: 1,
      year: "Monday",
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: "Tuesday",
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: "Wednesday",
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: "Thursday",
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: "Friday",
      userGain: 4300,
      userLost: 234,
    },
  ];

  return (
    <Bar
      data={{
        labels: data.map((data) => data.year),
        datasets: [
          {
            label: "Value",
            data: data.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 1,
          },
          {
            type: "line",
            label: "Value",
            data: data.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 1,
          },
        ],
      }}
    />
  );
}

export default AverageChart;
