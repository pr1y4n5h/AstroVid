import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

export function Movie({title, poster_path, overview, vote_average}) {
    return (
        <div className="movie">
        <img src={IMG_API + poster_path} alt={title} />
        <div className="movie-info">
            <h3>{title}</h3>
            {
                vote_average >= 8 ? <span style={{color: "green"}}>{vote_average}</span> : vote_average >= 6 && vote_average < 8 ? <span style={{color: "orange"}}>{vote_average}</span> : <span style={{color: "red"}}>{vote_average}</span>
            }
            
        </div>
        <div className="movie-overview">
            <h2>Overview</h2>
            <p> {overview} </p>
        </div>
        </div>
    )
}