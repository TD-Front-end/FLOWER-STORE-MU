// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Header from './Header';
import Category from './Category/Category';
import Flowers from './Flowers/Flowers';
import { Routes, Route } from "react-router-dom"
import PageNotFound from './PageNotFound';
import Home from './Home';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import Supplier from './Supplier/Supplier';

function App() {
  return (
    <React.Fragment>
      <html>
        <head>

        </head>

        <body>
          <Header />
          <div className='container'>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<Home />} />
              <Route path="/" element={<Header />} />
              <Route path="/category" element={<Category />} />
              <Route path="/flower" element={<Flowers />} />
              <Route path='/supplier' element={<Supplier />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </div>
          <footer>
            <div className='text-cennter'>NHUOM DO TROI AU | CUP C2</div>
          </footer>
        </body>
      </html>
      {/* <Container>
        <Footer />
      </Container> */}

    </React.Fragment>
  );
}

export default App;
