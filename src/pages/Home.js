import React from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>All Products</h1>
      <ProductList />
    </div>
  );
};

export default Home;
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ProductList from '../components/ProductList';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { categoryName } = useParams(); // from URL

  return (
    <div>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductList searchTerm={searchTerm} category={categoryName} />
    </div>
  );
};
import AnalyseButton from '../components/AnalyseButton';

// Inside your return:
<AnalyseButton />


export default Home;
import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import AnalyseButton from './components/AnalyseButton';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductList searchTerm={searchTerm} />
      <AnalyseButton />
    </div>
  );
}

export default App;

