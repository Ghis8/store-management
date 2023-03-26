import React from "react";
// import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June","july","september","october","november","december"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Chart",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [5, 10, 5, 2, 20, 30, 40,35,25,70,75],
      },
    ],
  };
  return (
    <div className="w-2/4 bg-white rounded-md shadow-md py-2 px-3">
      {/* <Bar data={data} /> */}
    </div>
  );
};

export default BarChart;