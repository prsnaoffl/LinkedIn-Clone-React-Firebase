import React,{useState,useEffect} from 'react';
import styles from "./Feed.module.css";
import Post from "./Post/Post";
import Upload from "./Upload/Upload"
import {db} from "../../../../Firebase/Firebase";


const Feed = () => {
    const [post, setPost] = useState([]);

    useEffect(()=>{
       db.collection("posts")
         .orderBy("timestamp","desc")
         .onSnapshot((snapShot)=>{
             setPost(
                snapShot.docs.map((doc)=>{
                    return{
                        id:doc.id,
                        data:doc.data(),
                    };
                })
             );
         });
    }, [])

    return (
        <div className={styles.feed}>
            <Upload />
          {post.map((post)=>{
     return(  
            <Post 
                 key={post.id}
                 profilePic={post.data.profile}
                 message={post.data.message}
                 timestamp={post.data.timestamp}
                 image={post.data.image}
                 username={post.data.username} 
                 ></Post>
                 );
          })}
        </div>
    );
};

export default Feed;
