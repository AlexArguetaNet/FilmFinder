import React from 'react'
import { useState, useEffect } from 'react';
import { IoIosSearch } from "react-icons/io";
import "../styles/Home.css";

export default function Home() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        
        const getPopularMovies = async () => {
            try {

                const response = await fetch("http://localhost:4001/popular-movies", {
                    method: "GET"
                });
    
                const movies = await response.json();

                const moviesWithImg = movies.data.results.filter(elem => elem.poster_path != null)
    
                setMovies(moviesWithImg);
                console.log("API call");
    
            } catch (err) {
                alert("Error getting movies");
            }
        }

        getPopularMovies();

    }, []);

  return (
    <div className='home-page'>
        <div className='content'>
            <div className='search-container'>
                <h2>Explore</h2>
                <div className='search-bar'>
                    <IoIosSearch />
                    <input type="text" placeholder='Search...'/>
                </div>
            </div>
            <div className='movie-grid'>
                {movies.length > 0 && movies.map((elem, key) => (
                    <div className='movie-card' key={key}>
                        <img src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
