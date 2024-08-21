import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.scss';
import './index.css';
import { Home } from './pages/Home'
import { ProductPage } from './pages/ProductPage'; 
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';
import { Announcement } from './components/Announcement';
import { NavBarSection } from './containers/NavBarSection';
import { Footer } from './containers/Footer';
import { PageNotFound } from './pages/PageNotFound';
import { Policies } from './pages/Policies';
import { CheckoutForm } from './components/CheckoutButtonStripe';

function App() {
  return (
    <>
    <Announcement />
    <NavBarSection />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={< Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<ProductPage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/policies/:pageName' element={<Policies />} />
            <Route path='/checkout' element={<CheckoutForm />} />
            <Route path='*' element={<PageNotFound/>} />
          </Routes>
        </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
