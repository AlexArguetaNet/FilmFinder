import React from 'react'
import "../styles/Navbar.css"
import { BiSolidMoviePlay } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav>
        <div className='title'>
            <BiSolidMoviePlay />
            <p>Film Finder</p>
        </div>
        <div>
            <button className='login-button'>Login</button>
        </div>
    </nav>
)
}
