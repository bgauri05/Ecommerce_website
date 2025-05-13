import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import PieChartModal from './components/PieChartModal';

function App() {
  const [showChart, setShowChart] = useState(false);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(setCategories)
      .catch(err => console.error("Category fetch error:", err));
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <header className="app-header">
        <div className="logo">CMA</div>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <div className="menu">
          <button className="menu-btn">☰</button>
          <div className="dropdown">
            <a href="#all" onClick={() => handleCategoryClick('all')}>All</a>
            {categories.map(cat => (
              <a key={cat} href={`#${cat}`} onClick={() => handleCategoryClick(cat)}>
                {cat}
              </a>
            ))}
          </div>
        </div>
      </header>

      <h1 style={{ textAlign: 'center' }}>
        {selectedCategory === 'all' ? 'All Products' : `Category: ${selectedCategory}`}
      </h1>

      <ProductList searchTerm={searchTerm} category={selectedCategory} />

      <button className="analyse-btn" onClick={() => setShowChart(true)}>
        Analyse
      </button>

      {showChart && <PieChartModal onClose={() => setShowChart(false)} />}
    </div>
  );
}

export default App;
