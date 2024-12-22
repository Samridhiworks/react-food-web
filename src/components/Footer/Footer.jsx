import React  from "react";
import './Footer.css';
import {assets} from '../../assets/assets'

const Footer =()=>{
    return(
        <>
        <div className="footer" id="footer">
           <div className="footer-content-left">
            <img src={assets.logo} alt="" className="footer-logo"/>
            <p>Delight your taste buds with our curated menu of fresh, flavorful dishes crafted with care. Whether you're craving hearty meals, light bites, or indulgent desserts, we bring quality and passion to every plate. Visit us or order online for a memorable dining experience that satisfies every craving!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt=""/>
                <img src={assets.twitter_icon} alt=""/>
                <img src={assets.linkedin_icon} alt=""/>
            </div>
           </div>
           <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
           </div>
           <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 58725773467</li>
                <li>contact@tomato.com</li>
            </ul>
           </div>
        </div>
        <hr/>
        <div className="footer-2">
         <p className="footer-copyright">
          Copyright 2025 @ Tomato.com - All Right Reserved 
         </p>
         </div>
         
        </>
        
    )
}

export default Footer;

