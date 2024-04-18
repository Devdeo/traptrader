import React, { useState, useEffect ,useRef} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../components/firebaseConfig";
import { query, collection, getDocs, where} from "firebase/firestore";
import { useRouter } from "next/router";

const Scrap = () =>{
    const [user, loading] = useAuthState(auth);
    const [plan, setPlan] = useState("");
    const router = useRouter();
    const url  = process.env.VIDEO_URL
    const fetchUserName = async () => {
        try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setPlan(data.plan);

        
        } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
        }
    };
    useEffect(() => {
      const handleDevtoolsChange = (event) => {
        if (event.detail.isOpen) {
          alert("Not Allowed");
          router.push('/');
        }
      };
  
      window.addEventListener('devtoolschange', handleDevtoolsChange);
  
      return () => {
        window.removeEventListener('devtoolschange', handleDevtoolsChange);
      };
    }, [])




    useEffect(() => {
        if (user) {
            fetchUserName();
        }
        if (loading) {
          router.push('/login');
        };
        }, [user, loading]);

    useEffect(() =>{
      if (plan==="paid"){

      }if (plan==="free"){
        router.push('/');
      }
    })
    
    const videoRef = useRef(null);

    useEffect(() => {
      const video = videoRef.current;
  
      // set the pause button to display:none by default
      document.querySelector(".fa-pause").style.display = "none";
  
      // update the progress bar
      video.addEventListener("timeupdate", () => {
        let curr = (video.currentTime / video.duration) * 100;
        if (video.ended) {
          document.querySelector(".fa-play").style.display = "block";
          document.querySelector(".fa-pause").style.display = "none";
        }
        document.querySelector('.inner').style.width = `${curr}%`;
      });
  
      // cleanup
      return () => {
        video.removeEventListener("timeupdate", () => {});
      };
    }, []);
  
    // pause or play the video
    const play = (e) => {
      const video = videoRef.current;
  
      // Condition when to play a video
      if (video.paused) {
        document.querySelector(".fa-play").style.display = "none";
        document.querySelector(".fa-pause").style.display = "block";
        video.play();
      } else {
        document.querySelector(".fa-play").style.display = "block";
        document.querySelector(".fa-pause").style.display = "none";
        video.pause();
      }
    };
  
    const fullScreen = (e) => {
      e.preventDefault();
      const video = videoRef.current;
      video.requestFullscreen();
    };
  
    const rewind = () => {
      const video = videoRef.current;
      video.currentTime -= 10; // Rewind 10 seconds
    };
  
    const forward = () => {
      const video = videoRef.current;
      video.currentTime += 10; // Forward 10 seconds
    };
    
    return(
      <div>
       <div className="columns has-background-grey ml-6 mt-6">
           <div className="column is-full container">
      <video onClick={play} ref={videoRef} poster="/screenshot.png" src={url} id="video"></video>
      <div className="controls">
        <button onClick={play}>
          <i className="fa fa-play"></i><i className="fa fa-pause"></i>
        </button>
        <button onClick={rewind}>
          <i className="fa fa-fast-backward"></i>
        </button>
        <div className="timeline">
          <div className="bar">
            <div className="inner"></div>
          </div>
        </div>
        <button onClick={forward}>
          <i className="fa fa-fast-forward"></i>
        </button>
        <button onClick={fullScreen}>
          <i className="fa fa-expand"></i>
        </button>
      </div>
    </div>
       </div>

        <div className="columns is-centered">
          <div className="column is-2">
          <article class="message is-dark">
            <div class="message-header">
              <p>Trading Book English</p>
            
            </div>
            <div class="message-body">
                  Very Imaportant Trading Book in English. <a href="https://drive.google.com/drive/folders/14mRHriBiqEaK-xVLa2VnL8A3actUQc5s?usp=sharing" target="_blank">Click Here</a>
            </div>
          </article>
          </div>

          <div className="column is-2">
          <article class="message is-dark">
            <div class="message-header">
              <p>Trading Book Hindi</p>
            
            </div>
            <div class="message-body">
                  Very Imaportant Trading Book in Hindi. <a href="https://drive.google.com/drive/folders/1_64uKQIFEjk2nbNHCaf_iU6wIz86YO_P?usp=sharing" target="_blank">Click Here</a>
            </div>
          </article>
          </div>

          <div className="column is-2">
          <article class="message is-dark">
            <div class="message-header">
              <p>Open Demat Account</p>
            
            </div>
            <div class="message-body">
                  If you have no demat account and want to open an account. <a href="https://paytmmoney.onelink.me/9L59/rhxfives" target="_blank">Click Here</a>
            </div>
          </article>
          </div>

          <div className="column is-2">
          <article class="message is-dark">
            <div class="message-header">
              <p>Whatsapp Premium Service</p>
            
            </div>
            <div class="message-body">
                  We provided all paid client Whatsapp Premium Service. Join Now <a href="https://chat.whatsapp.com/BIJ63EzycLa6YtO155qu4h" target="_blank">Click Here</a>
            </div>
          </article>
          </div>

        </div>

       </div>  
    )
}

export default Scrap;