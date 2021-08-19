import React,{useState} from 'react'
import styles from "./Header.module.css";
import {useSelector} from "react-redux";
import Home from './../../Home';
import {Avatar} from "@material-ui/core";

const Header = () => {
    const [state, setState] = useState("");

    const user =useSelector((state)=> state.user)

    return (
        <div className={styles.container}>
           <div className={styles.left}>
               <img className={styles.logo}
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/640px-Linkedin.svg.png"
                 alt="home" /> 
            <div className={styles.inputBox}>
                <input className={styles.input}
                  type="text"
                  placeholder="Search for jobs, skills, companies..." />
            </div>
            <div className={styles.right}>
               <div className={styles.home} onClick={()=>setState("home")} >
                   <img
                     src="https://image.flaticon.com/icons/png/512/1946/1946436.png"
                     alt="home" />
                   <p className={`${state === "home" ? styles.active:null}`} >
                     Home                      
                   </p>
               </div>

               <div className={styles.network} onClick={()=>setState("my-network")} >
                   <img 
                     src="https://image.flaticon.com/icons/png/512/82/82164.png"
                     alt="my-network" />
                   <p className={`${state === "my-network" ? styles.active:null}`} >
                     My Network                     
                   </p>
               </div>

               <div className={styles.jobs} onClick={()=>setState("jobs")} >
                   <img 
                     src="https://image.flaticon.com/icons/png/128/1063/1063299.png"
                     alt="jobs" />
                   <p className={`${state ==="jobs" ? styles.active:null}`} >
                     Jobs                     
                   </p>
               </div>

               <div className={styles.messaging} onClick={()=>setState("messaging")} >
                   <img 
                     src="https://image.flaticon.com/icons/png/128/134/134718.png"
                     alt="messaging" />
                   <p className={`${state ==="messaging" ? styles.active:null}`} >
                   Messaging                     
                   </p>
               </div>

               <div className={styles.notification} onClick={()=>setState("notification")} >
                   <img 
                     src="https://image.flaticon.com/icons/png/128/3602/3602123.png"
                     alt="notification" />
                   <p className={`${state ==="notification" ? styles.active:null}`} >
                   Notifications                    
                   </p>
               </div>

                <div className={styles.avatar} >
                   <img
                     src="https://material-ui.com/static/images/avatar/1.jpg" 
                      alt="Avatar" />
                    <p>
                   Me <img src="https://image.flaticon.com/icons/png/128/271/271210.png" alt="" />                    
                   </p>
               </div> 
                
               <div className={styles.work}>
                   <img src="https://image.flaticon.com/icons/png/128/3603/3603178.png"
                     alt="work" />
                   <p>
                       Work<img className={styles.down2} src="https://image.flaticon.com/icons/png/128/271/271210.png"
                              alt="work" />
                   </p>
                </div>

                <div className={styles.premium }>
                    <p>
                        Try Premium Free <br/> for 1 Month
                    </p>
                </div>

            </div>
           </div>
        </div>
    )
}

export default Header
