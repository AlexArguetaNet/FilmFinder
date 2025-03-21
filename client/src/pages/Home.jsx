import React from 'react'
import { useState, useEffect } from 'react';
import { IoIosSearch } from "react-icons/io";
import "../styles/Home.css";

export default function Home() {

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");

    const searchMovies = async () => {

        try {

            if (query === "") {
                alert("Enter a valid movie name");
            } else {

                const response = await fetch(`http://localhost:4001/search?query=${query}`);
                const jsonData = await response.json();

                setMovies(jsonData.searchResults);
                
            }

        } catch (err) {
            alert(err.message);
        }

    }

    useEffect(() => {
        
        const getPopularMovies = async () => {
            try {

                const response = await fetch("http://localhost:4001/popular-movies", {
                    method: "GET"
                });
    
                const jsonData = await response.json();
                setMovies(jsonData.movies);
    
            } catch (err) {
                alert(err.message);
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
                    <IoIosSearch onClick={() => searchMovies(query)} />
                    <input type="text" placeholder='Search...'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
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
