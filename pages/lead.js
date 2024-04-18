import { useState } from "react";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { auth, db } from "../components/firebaseConfig";

function Lead(){
    const [name , setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();
    const leadSub = ()=>{
      
      const q = query(collection(db, "contactus"));
      
      
         addDoc(collection(db, "contactus"), {
          name : name,
          email: email,
          message: message

        });
      
      router.push('/')
    } 
    
    return (
        <>
        <br />
        <br />
        <div className="columns is-centered">
            <div className="column box is-3">
            <h1><strong>Contact Us!</strong></h1>
            <br />
            <div className="field">
  <label className="label">Name</label>
  <div className="control">
    <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
    className="input" type="text" placeholder="Text input"/>
  </div>
</div>

<div className="field">

  <label className="label">Email</label>
  <div className="control">
    <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
    className="input"  placeholder="Email input" />
  </div>
</div>

<div className="field">
  <label className="label">Message</label>
  <div className="control">
    <textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
    className="textarea" placeholder="Textarea"></textarea>
  </div>
</div>

<div className="field is-grouped">
  <div className="control">
    <button onClick={leadSub} className="button is-link">Submit</button>
  </div>
</div>
            </div>
        </div>
        </>
    )
}

export default Lead;