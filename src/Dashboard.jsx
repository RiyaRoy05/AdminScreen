import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import './Dashboard.css';

const Dashboard = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const chartRef2 = useRef(null);
  const chartInstanceRef2 = useRef(null);
  const chartRef3 = useRef(null);
  const chartInstanceRef3 = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const ctx2 = chartRef2.current.getContext('2d');
    const ctx3 = chartRef3.current.getContext('2d');
    
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (chartInstanceRef2.current) {
      chartInstanceRef2.current.destroy();
    }

    if (chartInstanceRef3.current) {
      chartInstanceRef3.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2011', '2013', '2015', '2017', '2019'],
        datasets: [{
          label: 'Revenue',
          data: [1200, 1900, 3000, 500, 2000, 3000],
          backgroundColor: 'rgb(0, 194, 178)',
          borderColor: 'rgb(0, 194, 178)',
          borderWidth: 1,
          barThickness: 8,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    chartInstanceRef2.current = new Chart(ctx2, {
      type: 'pie',
      data: {
        labels: ['2011', '2013', '2015', '2017', '2019'],
        datasets: [{
          label: 'Expenses',
          data: [500, 700, 1500, 900, 1200],
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
          borderWidth: 1,
        }]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
      }
    });

    chartInstanceRef3.current = new Chart(ctx3, {
      type: 'line',
      data: {
        labels: ['2011', '2013', '2015', '2017', '2019'],
        datasets: [{
          label: 'Expenses',
          data: [500, 700, 1500, 900, 1200],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          fill: true,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
      if (chartInstanceRef2.current) {
        chartInstanceRef2.current.destroy();
      }
      if (chartInstanceRef3.current) {
        chartInstanceRef3.current.destroy();
      }
    };
  }, []);

  const data = [
    { product: 'iPone X', customer: 'Tiffany W. Yang', category: 'Mobile', popularity: 70, amount: 1200.00 },
    { product: 'iPad', customer: 'Dale P. Warman', category: 'Tablet', popularity: 65, amount: 1190.00 },
    { product: 'OnePlus', customer: 'Garth J. Terry', category: 'Electronics', popularity: 50, amount: 999.00 },
    { product: 'ZenPad', customer: 'Marilyn D. Bailey', category: 'Cosmetics', popularity: 45, amount: 1150.00 },
    { product: 'Pixel 2', customer: 'Denise R. Vaughan', category: 'Appliances', popularity: 80, amount: 1180.00 },
    { product: 'Pixel 2', customer: 'Jeffery R. Wilson', category: 'Mobile', popularity: 90, amount: 1180.00 },
  ];

  return (
    <div className="main-content">
      <h3 className="dashboard">Dashboard</h3>
      <div className="cards">
        <div className="card purple">Cost per Unit
          <div className="price">$17.21</div>
        </div>
        <div className="card green">Market Revenue
          <div className="price">$1875.54</div>
        </div>
        <div className="card orange">Expenses
          <div className="price">$784.62</div>
        </div>
        <div className="card blue">Daily Visits
          <div className="price">1,15,187</div>
        </div>
      </div>
      <div className="chart-container">
        <div className="chart">
          <h2>Statistics</h2>
          <canvas ref={chartRef} id="myChart"></canvas>
          <div className="container">
            <div className="detail">
              <h3>$1875.54</h3>
              <span className="value">Revenue</span>
            </div>
            <div className="detail2">
              <h3>541</h3>
              <span className="value2">Total Offers</span>
            </div>    
          </div>
        </div>

        <div className="sales-chart">
          <h2>Daily Sales</h2>
          <canvas ref={chartRef2} id="expensesChart" className="small-chart"></canvas>
        </div>

        <div className="line-chart">
          <h2>Line Chart</h2>
          <canvas ref={chartRef3} id="lineChart"></canvas>
          <div className="container">
            <div className="detail">
              <h3>$7841.12
              </h3>
              <span className="value">Total Revenue</span>
            </div>
            <div className="detail2">
              <h3>17</h3>
              <span className="value2">Open Compaign</span>
            </div>    
          </div>
        </div>
      </div>
      <div className="recent-buyers">
      <h2>Recent Buyers</h2>
      <p>Transaction period from 21 July to 25 Aug</p>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Customers</th>
            <th>Categories</th>
            <th>Popularity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.product}</td>
              <td>{item.customer}</td>
              <td><span className={`category ${item.category.toLowerCase()}`}>{item.category}</span></td>
              <td>
                <div className="popularity-bar">
                  <div className="popularity" style={{ width: `${item.popularity}%` }}></div>
                </div>
              </td>
              <td>${item.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Dashboard;
