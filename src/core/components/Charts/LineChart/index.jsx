import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';
import PropTypes from 'prop-types';
import 'chartjs-plugin-datalabels';
import { Container } from './styles';

const LineChart = ({ title, labels, data }) => {
  const chartRef = useRef();
  const max = data ? Math.max(...data) + 1 : 10;
  const min = data ? Math.min(...data) - 1 : 0;
  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: title,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: true,
            lineWidth: 1,
            color: 'rgba(0,0,0,0.1)',
            drawBorder: false,
          },
          ticks: {
            beginAtZero: true,
            stepSize: 25,
            min,
            max,
            padding: 20,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };
  options.plugins = {
    datalabels: {
      display(context) {
        return context.chart.isDatasetVisible(context.datasetIndex);
      },
      font: {
        size: '10',
      },
      align: 'top',
      color: 'black',
    },
  };
  const lineChartData = {
    labels,
    datasets: [
      {
        label: title,
        borderColor: '#028d6a',
        backgroundColor: '#5fa08f',

        data,
      },
    ],
  };

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');

    new Chart(myChartRef, {
      type: 'line',
      responsive: true,
      data: lineChartData,
      options,
    });
  }, [labels, data]);

  return (
    <Container>
      <div>
        <canvas id="myChart" ref={chartRef} />
      </div>
    </Container>
  );
};

export default LineChart;

LineChart.propTypes = {
  title: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
};
