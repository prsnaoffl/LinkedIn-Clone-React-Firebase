import React from 'react';
import styles  from "./Post.module.css"
import { Avatar } from '@material-ui/core';
import {MoreHoriz, 
        AccountCircle,
        ThumbUp,
        ChatBubbleOutline,
        ExpandMoreOutlined,
        NearMe  } from "@material-ui/icons";


 export const Post = ({profilePic,image,username,message,timestamp})=>{
    return (
        <div className={styles.container}>
            <div className={styles.postTop}>
                <Avatar className={styles.avatar} 
                    src={profilePic}  />
                <div className={styles.name}>
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toDateString()}</p>
                    <MoreHoriz className={styles.dots} />
                </div>
            </div>

            <div className={styles.postBottom}>
                 <p>{message}</p>
            </div>

            <div className={styles.postImage}>
                <img className={styles.mainImage}
                src={image} alt={message} />
            </div>

            <div className={styles.line}>

            </div>

            <div className={styles.postOptions}>
               <div className={styles.postOption}>
                   <ThumbUp />
                   <p>Like</p>
               </div>
               <div className={styles.postOption}>
                   <ChatBubbleOutline />
                   <p>Comment</p>
               </div>
               <div className={styles.postOption}>
                   <NearMe />
                   <p>Share</p>
               </div>
               <div className={styles.postOption}>
                   <AccountCircle />
                   <ExpandMoreOutlined />
            </div>
        </div>
    </div>
    )
}

export default Post;
