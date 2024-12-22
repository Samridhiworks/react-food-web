import React, { useState } from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
import { food_list } from '../../assets/assets'

const ExploreMenu = ( category) =>{
  
    return(
        <>
        <div className='explore-menu' id='explore-menu'>
            <h2>Explore Our Menu</h2>
            <p className='explore-menu-text'>"Discover a world of flavors with our diverse menu! From savory starters to mouthwatering mains and indulgent desserts, there’s something for everyone. Explore dishes crafted with fresh ingredients and bold tastes. Whether you crave comfort food or exotic cuisine, our menu is sure to delight. Start your culinary adventure today!"</p>
            <div className='explore-menu-list'>
                {menu_list.map((item,index)=>(
                 <div className='explore-menu-list-item' key={index}>
            
                 <div className='menu-image'>
                 <img src={item.menu_image} alt=''/>
                 </div>
                 <p>{item.menu_name}</p>

                 </div>
                    

          
                         
                ))}
               
            </div>
            <hr></hr>
        </div>
        </>
    )
}

export default ExploreMenu;