import React from 'react';
import styles from "./Sidebar.module.css";
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";

const Sidebar = () => {
    const user = useSelector((state) => state.user);

    return (
        <div >
            <div className={styles.topBox}>
                <img className={styles.image1}
                    src="https://raw.githubusercontent.com/prakashvaithianathan/linkedIn-clone-react-firebase/c6d729bd598dc7e04162bc53b77c72ec41437a9c/src/images/card-bg.svg"
                    alt="card" />
                <img className={styles.logo}
                     src="https://material-ui.com/static/images/avatar/1.jpg"
                      alt="logo" />
                    <h5 className={styles.name}> Prasanna Kumar </h5>
                <p className={styles.para1}> &nbsp;&nbsp;&nbsp;&nbsp; Student at SSM College of <br/> Engineering, Komarapalayam</p>
                <br/>

                <div className={styles.connection}>
                    <p>Connections  <span className={styles.innerpara}>14</span></p>
                    <p className={styles.same}>Grow Your networks</p>
                    <br/>
                </div>

                <div className={styles.access}>
                     <p>Access exclusive tools & insights</p>
                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Solid_orange.svg/1024px-Solid_orange.svg.png"
                    alt="img" />
                    <p className={styles.same}>Try premium for free</p>
                </div>

                <div className={styles.items}>
                    <img className={styles.itemimg}
                      src="https://image.flaticon.com/icons/png/128/484/484270.png"
                    alt="item"  />
                    <p className={styles.same}>My items</p>
                </div>
            </div>
            <div className={styles.second_box}>
                <Link to='/'>Groups</Link>
             <p><Link className={styles.link} to='/'>Events </Link> <span> + </span></p>    
                <Link to='/'>Follow Hashtags </Link>
            <div className={styles.last}>
                Discover
            </div>
            </div>
        </div>
    )
}

export default Sidebar
