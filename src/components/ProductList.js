import React, { useEffect, useState } from 'react';

function ProductList({ searchTerm, category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = category === 'all'
      ? 'https://fakestoreapi.com/products'
      : `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`;

    fetch(url)
      .then(res => res.json())
      .then(setProducts)
      .catch(err => console.error("Product fetch error:", err));
  }, [category]);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      {filtered.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <p>${product.price}</p>
          <span>{product.category}</span>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
