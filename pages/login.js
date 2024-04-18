import Link from "next/link";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../components/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const [logins ,  setLogins] = useState(false);
    const router = useRouter();

    const handleChange = (event) => {
        setLogins(event.target.checked);
      }


    useEffect(() => {
        if (loading) {
          return;
        }
        if (user){
            router.push('/');
        };
      }, [user, loading]);
    return(
        <>
        <br />
        <br />
        <div className="columns box is-centered mt-6 ml-6">
            <div className="column is-7">
                <Image
                src="/stock2.jpg"
                height={700}
                width={700}
                alt="dev"
                />
            </div>
            <div className="column  is-3">
                <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input" 
                    type="email" 
                    placeholder="xyz12355@gmail.com"/>
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
                onClick={() => logInWithEmailAndPassword(email, password)}
                className="button is-dark"
                disabled = {!logins}
                >
                Login
                </button>
                <br />
                <p>If dont know your password-<Link href="/reset">reset</Link>here</p>
            
                <p>Or Continue With</p>
                <button 
                disabled = {!logins}
                onClick={signInWithGoogle}
                className="button is-dark">
                Google
                </button>

                <h4>If you have not account please sign up!</h4>
                <Link className=" is-success" href="/signup">
                Sign Up
                </Link>

            </div>
            

        </div>
        </>
    )
}
export default Login;