import React from 'react'

export default function MovieCard({ title, posterPath }) {



  return (
    <div className='movie-card'>
        <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} />
    </div>
  )
}
