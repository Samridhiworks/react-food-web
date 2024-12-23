import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LoginPopup from './Components/LoginPopup';
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import PlaceOrder from './Pages/PlaceOrder'
import Footer from './Components/Footer';


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
