import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart = ({ heading, labels, data,max }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    // Create the chart
    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: "rgb(65, 191, 153)",
            borderWidth: 0,
            borderSkipped: false,
          },
        ],
      },
      options: {
        indexAxis: "y",
        scales: {
          x: {
            min: 0,
            max: max,
            ticks: {
              callback(value) {
                return Math.abs(value);
              },
            },
            title: {
              display: true,
              text: 'Revenue by November 2019' // Setting the x-axis label
            },
          },
        },
      },
    });

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  },  [data, labels, max]); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div style={{ textAlign: "left", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}>
      <h2>{heading}</h2>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
};

export default BarChart;