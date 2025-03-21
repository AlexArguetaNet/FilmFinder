import React from 'react'
import "../styles/Navbar.css"
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";

export default function Navbar() {
  return (
    <nav>
        <div className='nav-content'>
            <div className='title'>
                <BiSolidMoviePlay />
                <p>Film Finder</p>
            </div>
            <div className='search-login'>
                <div className='search-bar'>
                    <IoIosSearch />
                    <input type="text" placeholder='Search...'/>
                </div>
                <button className='login-button'>Login</button>
            </div>
        </div>
    </nav>
)
}
