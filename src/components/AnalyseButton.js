import React, { useEffect, useState } from 'react';
import { getProducts } from '../utils/api';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const AnalyseButton = () => {
  const [open, setOpen] = useState(false);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchAndGroup = async () => {
      const data = await getProducts();
      const categoryCount = {};
      data.forEach(p => {
        categoryCount[p.category] = (categoryCount[p.category] || 0) + 1;
      });

      setChartData({
        labels: Object.keys(categoryCount),
        datasets: [{
          label: 'Products by Category',
          data: Object.values(categoryCount),
          backgroundColor: ['#f87171', '#60a5fa', '#34d399', '#fbbf24'],
        }]
      });
    };
    fetchAndGroup();
  }, []);

  return (
    <>
      <button onClick={() => setOpen(!open)} style={styles.button}>
        Analyse
      </button>

      {open && chartData && (
        <div style={styles.modal}>
          <button onClick={() => setOpen(false)} style={styles.close}>X</button>
          <h3 style={{ textAlign: 'center' }}>Product Distribution</h3>
          <Pie data={chartData} />
        </div>
      )}
    </>
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '1rem 1.5rem',
    backgroundColor: '#f87171',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    zIndex: 999
  },
  modal: {
    position: 'fixed',
    top: '10%',
    left: '10%',
    width: '80%',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: '2rem',
    zIndex: 1000
  },
  close: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer'
  }
};

export default AnalyseButton;
