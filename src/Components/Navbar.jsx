import React, { useState } from 'react'
import './App.css'
import {assets}  from   '../assets/assets'
import { Link } from 'react-router-dom'
import LoginPopup from './LoginPopup'

const Navbar = ({setShowLogin})=>{
    const [menu,setMenu] = useState("home")
    return(
         <div className='navbar'>
          <Link to='/'><img src={assets.logo} alt='' className='logo'></img></Link>  
            <ul className='navbar-menu'>
                <Link to='/'className={menu === "home"?"active":""} onClick={()=>setMenu('home')}>home</Link> 
                <a href='#explore-menu' className={menu === "menu"?"active":""}onClick={()=>setMenu("menu")}>menu</a> 
                <a href='#app-download' className={menu === "mobile-app"?"active":""}onClick={()=>setMenu("mobile-app")}>mobile-app</a> 
                <a href='#footer' className={menu ==="contact-us"?"active":""}onClick={()=>setMenu('contact-us')}>contact us</a> 
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt=''></img>
                <div className='navbar-search-icon'>
                  <Link to='/cart'><img src={assets.basket_icon} alt=''></img></Link>  
                    <div className='dot'></div>
                </div>      
                <button onClick={()=>{setShowLogin(true)}}>Sign In</button>   
            </div>
           
        </div>
        
    )
}

export default Navbar;