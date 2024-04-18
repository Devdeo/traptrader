import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../components/firebaseConfig";
import { query, collection, getDocs, where} from "firebase/firestore";
import { useRouter } from "next/router";

function Dashboard(){
    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState("");
    const [plan, setPlan] = useState("");
    const [valid, setValid] = useState(null);
    const router = useRouter();

    const fetchUserName = async () => {
        try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();

        setName(data.name);
        setPlan(data.plan);
        setValid(data.valid);
        } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
        }
    };

    useEffect(() => {
        if (loading) return;
        if (!user)  {
            router.push('/');
        }

        fetchUserName();
    }, [user, loading]);


    return(
        <>
        <br />
        <br />
        <div className="columns is-centered">
            
            <div className="column box is-4">
                <span className="text is-size-2"> <strong>Hi, {name}</strong> </span>
                <br />
                <span className="text is-size-5">{user?.email}</span>
                <div>
                   {plan &&(
                    <p>Active Plan Type:- <strong>{plan}</strong>  </p>
                   )}
                </div>
                {valid && (
                    <p>Explore The Course</p>
                )
                }
                <Link href="/course">Explore Course</Link>
                <br />
                <Link href="/reset" onClick={logout}>Reset Your Password</Link>
                <br />
                <button onClick={logout} className="button is-dark">Sign out</button>



            </div>
        </div>
        </>
    )
}

export default Dashboard;