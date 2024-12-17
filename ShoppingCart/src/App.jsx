import { useState } from 'react';

import './App.css'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './landingHome'
import ShoppingAbout from './ShoppingAbout'
import Products from './Products'
import Contact from './Contact'
import SingleProduct from './SingleProduct'
import Cart from './Cart'
import Header from './components/Header.jsx';

import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';
import theme from './Theme'


function App() {
  

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element = {<Home />}/>
              <Route path="/About" element = {<ShoppingAbout />}/>
              <Route path="/Product" element = {<Products />}/>
              <Route path="/Contact" element = {<Contact />}/>
              <Route path="/SingleProduct/:id" element = {<SingleProduct />}/>
              <Route path="/Cart" element = {<Cart />}/>
            </Routes>
        </BrowserRouter>
      </ThemeProvider>
     
    </>
  )
}

export default App
