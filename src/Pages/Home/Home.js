import React from 'react';
import styles from "./Home.module.css";
import  Login from "../Login/Login";
import Header from "./Components/Header/Header";
import Feed from "./Components/Feed/Feed";
import Ads from "./Components/Ads/Ads";
import Sidebar from "./Components/Sidebar/Sidebar";
import {useSelector}  from "react-redux";

const Home = () => {
   const user= useSelector((state)=> state.user);

    return (
        <div className={styles.home}>
            {!user? (
                <Login/>
            ):(
               <div>
                    <Header/>  
                <div className={styles.contentBox}>
                    <Sidebar/>
                    <Feed></Feed>
                <div className={styles.add}>
                    <Ads/>
                </div>
                </div>
                </div>
         )}
        </div>
    )
}

export default Home
