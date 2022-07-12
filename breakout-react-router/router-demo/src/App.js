import './App.css';

import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Product from './components/Product';
import Nav from './components/Nav';

const App = () => {
  const products = [
    'apple',
    'banana'
  ];

  return (
    <div className="App">
      <h2>React Router Demo</h2>

      <BrowserRouter>
        <Nav />

        <Routes>
          {/* <Route path="*" element={<h2>This is not the page you are looking for</h2>}></Route> */}
          <Route path="*" element={<Navigate to="/about" />} />
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products products={products} />}></Route>
          <Route path="/products/:productId" element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
