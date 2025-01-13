import React from "react";
import { Line } from "react-chartjs-2";

const TrendChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [120, 150, 180, 220, 250, 300],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-10 w-full">
      <h3 className="text-xl font-semibold mb-4">Sales Trend (Last 6 Months)</h3>
      <Line data={data} />
    </div>
  );
};

export default TrendChart;
