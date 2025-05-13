import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

function PieChartModal({ onClose }) {
  const data = {
    labels: ['Men', 'Women', 'Accessories', 'Electronics'],
    datasets: [
      {
        data: [40, 30, 20, 10],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Analyse Products</h2>
        <Pie data={data} />
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
}

export default PieChartModal;
