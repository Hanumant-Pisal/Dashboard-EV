import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const ComparisonChart = () => {
  const data = {
    labels: ["North", "South", "East", "West"],
    datasets: [
      {
        label: "Revenue",
        data: [5000, 4000, 3000, 7000],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-10">
      <h3 className="text-xl font-semibold mb-4">Revenue by Region</h3>
      <Bar data={data} />
    </div>
  );
};

export default ComparisonChart;
