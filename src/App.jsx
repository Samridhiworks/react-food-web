import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'


function App() {
 const [showLogin,setShowLogin] = useState(false)


  return (
  <>
 {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> :<></>}
  <BrowserRouter>
  <div className='app'>
  <Navbar setShowLogin = {setShowLogin}/>
 
  <Routes>
    <Route path='/' element={<Home/>} />
     <Route path='/cart' element={<Cart/>} />
    <Route path='/place-order' element={<PlaceOrder/>} /> 

  </Routes>   
  </div>
  <Footer/>

  </BrowserRouter>
 
  </>
  )
}

export default App