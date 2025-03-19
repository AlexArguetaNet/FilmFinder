import React from 'react'
import { useState, useEffect } from 'react';

export default function Home() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        
        const getPopularMovies = async () => {
            try {

                const response = await fetch("http://localhost:4001/popular-movies", {
                    method: "GET"
                });
    
                const movies = await response.json();
    
                setMovies(movies.data.results);
    
            } catch (err) {
                alert("Error getting movies");
            }
        }

        getPopularMovies();

    }, []);

  return (
    <div className='home'>
        <div className='movie-grid'>
            {movies.length > 0 && movies.map((elem, key) => (
                <p key={key} >{ elem.original_title }</p>
            ))}
        </div>
    </div>
  )
}
