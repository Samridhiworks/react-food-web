import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currstate, setCurrState] = useState("Login");

  return (
    <>
      <div className="login-popup">
        <form className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currstate}</h2>
            <div className="close" onClick={()=>{setShowLogin(false)}}>
            <img
              src={assets.cross_icon}
              alt=""
            />
           </div>
          </div>
          <div className="login-popup-inputs">
            {currstate === "Sign Up" && (
              <input type="text" placeholder="Your Name*" required />
            )}
            <input type="email" placeholder="Your Email*" required />
            <input type="password" placeholder="Enter Password*" required />
          </div>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>
              By continuing, I agree to the <b>terms and conditions</b> of use and <b>privacy policy.</b> 
            </p>
          </div>
     
          <button>
            {currstate === "Sign Up" ? "Create Account" : "Login"}
          </button>
          {currstate === "Login" ? (
            <p>
              Don't have an account?{" "}
              <span onClick={() => setCurrState("Sign Up")} className="link-here">Sign Up Here</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")} className="link-here">Login Here</span>
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default LoginPopup;
