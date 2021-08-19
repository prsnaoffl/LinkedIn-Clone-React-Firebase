import React from 'react'
import styles from "./Login.module.css";
import {Button} from "@material-ui/core";
import { useDispatch } from 'react-redux';
import {addUser} from '../../Store/Action/User';
import {auth,provider} from "../../Firebase/Firebase";


const Login = () => {
     const dispatch= useDispatch();

     const handleClick=()=>{
         auth
         .signInWithPopup(provider)
         .then((result)=>dispatch(addUser(result.user)))
         .catch((err)=> console.log(err));
     };

    return (
        <div className={styles.login}>
            {/* <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/512px-LinkedIn_Logo.svg.png"
              alt="logo" /> */}
           <p className={styles.para}>Linked <p className={styles.para1}>In</p></p>
            <Button className={styles.btn} onClick={handleClick} >
                Sign In
            </Button>     
        </div>
    )
}

export default Login
