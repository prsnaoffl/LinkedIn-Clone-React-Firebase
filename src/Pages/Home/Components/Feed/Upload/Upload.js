import React,{useState} from 'react';
import styles from "./Upload.module.css";
import {Photo,YouTube,Event,Description} from "@material-ui/icons";
import {LinearProgress} from "@material-ui/core";
import {useSelector} from "react-redux"; 
import {db, timestamp, storage} from "../../../../../Firebase/Firebase";


const Upload = () => {
    const user=useSelector((state)=> state.user);
    const [input, setInput] = useState("");
    const [image, setImage] = useState("");
    const [progress, setProgress] = useState(0);

    const handleSubmit=(event)=>{
        event.preventDefault();

        const uploadTask= storage.ref(`image/${image.name}`).put(image);
        uploadTask.on("state_changed",(snapShot)=>{
           const progress= Math.round(
               (snapShot.bytesTransferred/snapShot.totalBytes)*100
               );
           setProgress(progress);
        },
        (error)=>{
            console.log(error);
        },
        ()=>{
            storage
             .ref("images")
             .child(image.name)
             .getDownloadURL()
             .then((url)=>{
                 db.collection("posts").add({
                     message:input,
                     timestamp:timestamp,
                     profilePic:user.photoURL,
                     username:user.display.name,
                     image:url,
                 });
                   setProgress(0);
                   setInput("");
                   setImage("");
             })
             .catch((err)=>{
                 console.log(err);
             });
    }
    );
};


    return (
        <form>
        <div className={styles.uploadBox}>
            <div className={styles.uploadContainer}>
            <img src={user.photoURL} alt="logo" />

                    <input 
                      type="text"
                      value={input}
                      onChange={(e)=> setInput(e.target.value)}
                      placeholder="start a post"
                    />          
            </div>

        {progress > 0 &&(
            <LinearProgress
               variant="determinate"
               value={progress}
               className={styles.progress} />
        )}
 
        <div className={styles.options}>
            <div className={styles.photoBox}>
            <label htmlFor="file" className={styles.photoBox}>
              <Photo></Photo>
              <p>Photo</p>
            </label>
            <input 
               type="file"
               id="file"
               accept="image/*"
               className={styles.file}
               onChange={(e)=>setImage(e.target.files[0])}
               />
            </div>
            <div className={styles.videoBox}>
                <YouTube/>
                <p>Video</p>
            </div>
            <div className={styles.eventBox}>
                <Event/>
                <p>Event</p>
            </div>
            <div className={styles.descBox}>
                <Description/>
                <p>Article</p>
            </div>
        </div> 
        </div>    
        <button 
          className={styles.submit}
          type="submit"
          onClick={handleSubmit}>
              {/* {" "} */}
              Submit
        </button>           
     </form>
    )
};

export default Upload;


