import React from 'react'
import "../styles/Navbar.css"
import { BiSolidMoviePlay } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav>
        <div className='nav-bar-content'>
            <BiSolidMoviePlay />
            <p>Film Finder</p>
        </div>
    </nav>
)
}
