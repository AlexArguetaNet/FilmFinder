import React from 'react'
import { useState, useEffect } from 'react';
import { IoIosSearch } from "react-icons/io";
import MovieCard from '../components/MovieCard';
import "../styles/Home.css";

export default function Home() {

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");

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

    const handleQueryChange = (queryVal) => {
        if (queryVal.length === 0) {
            setQuery("")
            getPopularMovies();
        } else {
            setQuery(queryVal);
        }
    }
    

    useEffect(() => {

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
                        onChange={(e) => handleQueryChange(e.target.value)}
                    />
                </div>
            </div>
            <div className='movie-grid'>
                {movies.length > 0 && movies.map((elem, key) => (
                    <MovieCard title={elem.original_title} posterPath={elem.poster_path} />
                ))}
            </div>
        </div>
    </div>
  )
}
