import React from "react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseConfig";
import Image from "next/image";

function Novbar(){
    const [isActive, setisActive] = React.useState(false);
    const [user] = useAuthState(auth);
    return(
        <>
        <nav className="navbar is-black" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <Link className="navbar-item" href="/">
      <Image 
      src="/logo.png"
      width={25}
      height={25}
      alt="logo"
      />
      &nbsp;
      <strong>Dev</strong> &nbsp; Trap Trader
    </Link>

    <a
        onClick={() => {
            setisActive(!isActive)
          }}
     role="button" 
     className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
     aria-label="menu" aria-expanded="false" 
     data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" 
  className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
    <div className="navbar-start">
      <Link className="navbar-item" href="/course">Course</Link>
      <Link className="navbar-item" href="/about">About Us</Link>
      <Link className="navbar-item" href="/lead">Contact Us!</Link>
      

      
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          {
            user ? 
            <Link className="button is-light" href="/dashboard">Dashboard</Link>
            :
            <Link className="button is-light" href="/login">
            <strong>Sign up/ Log in</strong>
          </Link>

          }
          
          
        </div>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}
export default Novbar;