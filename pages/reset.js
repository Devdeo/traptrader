import React, { useState } from "react";
import {  sendPasswordReset } from "../components/firebaseConfig";

function Reset(){
    const [email, setEmail] = useState("");
    return(
        <>
        <div className="columns is-centered mt-6 ml-6">
            <div className="column box is-3">
            <div className="field">
                <label className="label">If you forget your Password, Enter Your Email</label>
                <div className="control">
                    <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input" 
                    type="email" 
                    placeholder="e.g. alexsmith@gmail.com"/>
                </div>
                </div>  
                <button 
                onClick={() => sendPasswordReset(email)}
                className="button is-success">
                Submit
                </button>

            </div>

        </div>
        </>
    )
}

export default Reset;