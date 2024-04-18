import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../components/firebaseConfig";

import Image from "next/image";
import { useRouter } from "next/router";

function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading] = useAuthState(auth);
    const [logins ,  setLogins] = useState(false);
    const router = useRouter();

    const handleChange = (event) => {
        setLogins(event.target.checked);
      }


    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };

    useEffect(() => {
        if (loading) return;
        if (user) {
            router.push('/')
        };
    }, [user, loading]);

    return(
        <>
        <br />
        <br />
        <div className="columns box is-centered mt-6 ml-6">
            <div className="column  is-3">

            <div className="field">
                <label className="label">Full Name</label>
                <div className="control">
                    <input 
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                    className="input" 
                    type="text" 
                    placeholder="type your name"/>
                </div>
                </div>
                <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input" 
                    type="email" 
                    placeholder="email"/>
                </div>
                </div>

                <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input" 
                    type="password" 
                    placeholder="password"/>
                </div>
                </div>
                <label class="checkbox">
                <input type="checkbox"
                 onChange={handleChange}
                />
                I agree to the <Link href="/term">terms and conditions</Link>
                </label>
                
                <button 
                onClick={register}
                className="button is-dark"
                disabled = {!logins}
                >
                Sign Up
                </button>

                <h2>Or</h2>
                <h3>Continue With</h3>
                <button
                disabled = {!logins} 
                 onClick={signInWithGoogle}
                className="button is-dark">
                Google
                </button>

                <h4>If you have account please log in!</h4>
                <Link href="/login">
                Log in
                </Link>

            </div>
            <div className="column is-8">
                <Image 
                src="/stock2.jpg"
                width={700}
                height={700}
                alt="dev"
                />
            </div>   

        </div>
        </>
    )
}
export default Signup;