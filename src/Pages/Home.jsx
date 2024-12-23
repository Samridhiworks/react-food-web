import React from 'react'
import '../Components/App.css';
import AppDownload from '../Components/AppDownload';
import ExploreMenu from '../Components/ExploreMenu';
import FoodDisplay from '../Components/FoodDisplay';
import Header from '../Components/Header';

const Home = () =>{
    return(
        <>
        <Header/>
      <ExploreMenu/>
      <FoodDisplay/>
   <AppDownload/>
        </>
    )
}

export default Home;