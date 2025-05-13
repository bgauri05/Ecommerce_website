import React from 'react';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header style={styles.header}>
      <h2>Shopping App</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.input}
      />
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    background: '#f5f5f5',
    alignItems: 'center'
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    width: '250px'
  }
};

export default Header;
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCategories } from '../utils/api';

const Header = ({ searchTerm, setSearchTerm }) => {
  const [categories, setCategories] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchCats = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchCats();
  }, []);

  return (
    <header style={styles.header}>
      <div>
        <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        {menuOpen && (
          <div style={styles.menu}>
            <Link to="/">All</Link>
            {categories.map(cat => (
              <Link key={cat} to={`/category/${cat}`}>{cat}</Link>
            ))}
          </div>
        )}
      </div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.input}
      />
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    background: '#f5f5f5',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 999
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    width: '250px'
  },
  menu: {
    position: 'absolute',
    top: '3rem',
    left: '1rem',
    background: '#fff',
    border: '1px solid #ccc',
    padding: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }
};

export default Header;

