import React from 'react';
import styles from "./Ads.module.css";
import Box from "./Box/Box";

const Ads = () => {
    return (
        <div className={styles.container}>
          <Box
        title="LinkedIn News"
        list1="Boosting women entrepreneurship"
        list1date="1d ago . 800 readers"
        list2="A new airline is coming"
        list2date="1d ago . 8,380 readers"
        list3="Feeling stressed? Best to speak up"
        list3date="1d ago . 380 readers"
        list4="Carreer switch: What stops you?"
        list4date="8h ago . 240 readers"
        more="Show more"
      ></Box>
      <Box
        title="Today's top courses"
        list1="Agile Foundations"
        list1date="Doug Rose"
        list2="Communication Foundations"
        list2date="Brenda Bailey-Hughes and Tatiana Kolovou"
        list3='Communicating with Confidence'
        list3date='Jeff Ansell'
        list4='Full Stack Web Development'
        list4date='react'
        more='Show more on LinkedIn Learning'
      ></Box>
      <div className={styles.bottom}>
        <div className={styles.firstLine}>
          <p>About</p>
          <p>Accessbility</p>
          <p>Help Center</p>
        </div>
        <div className={styles.secondLine}>
           <p>Privacy & Terms</p>
           <p>Ad  Choices</p>
        </div>
        <div className={styles.thirdLine}>
          <p>Advertising</p>
          <p>Business Services</p>
        </div>
        <div className={styles.fourthLine}>
          <p>Get the LinkedIn app</p>
          <p>More</p>
        </div>
        <div className={styles.fifthLine}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/512px-LinkedIn_Logo.svg.png" 
          alt="logo" className={styles.logo} />
          <p className={styles.lastline}>LinkedIn Corporation © 2021</p>
        </div>       
        </div>
    </div>
    )
}

export default Ads
