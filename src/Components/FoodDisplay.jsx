import React, { useState } from "react";
import { assets, food_list } from "../assets/assets";
import './App.css';

const FoodDisplay = ( ) => {
  const [counts, setCounts] = useState({}); 

  const increment = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  const decrement = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max((prevCounts[id] || 0) - 1, 0),  
    }));
  };

  return (
    <>
      <h2>Top Dishes Near You</h2>
      <div className="food-display">
        {food_list.map((item) => (
               <div className="food-display-list" key={item._id}>
               
               <div className="image-container">
                 <img src={item.image} alt="" />
               </div>
               <p>{item.name}</p>
               <img src='/rating_starts.png' alt="Rating Stars" className="stars" />
               <p>{item.description}</p>
               <p>${item.price}</p>
               <div className="counter">
                 {!counts[item._id] ? (
                   <img
                     src={assets.add_icon_white}
                     className="add"
                     onClick={() => increment(item._id)}
                     alt=""
                   />
                 ) : (
                   <div className="food-item-counter">
                     <img
                       src={assets.remove_icon_red}
                       onClick={() => decrement(item._id)}
                       alt=""
                     />
                     <p>{counts[item._id]}</p>
                     <img
                       src={assets.add_icon_green}
                       onClick={() => increment(item._id)}
                       alt=""
                     />
                   </div>
                 )}
               </div>
             </div>
       
        ))}
      </div>
    </>
  );
};

export default FoodDisplay;
