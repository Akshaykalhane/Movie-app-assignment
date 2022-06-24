import React, { useState , useEffect } from "react";
import './movie.css'
import MovieCard from "./moviescard";
import Data from './data.json'
// import { useState ,useEffect } from "react";

const url="";

function Movie() {

    const [movie,setMovie]=useState([]);

    useEffect(() => {
        fetch(url,{method:'GET'})
        .then(res=> res.json())
        .then((data)=>{
            // setNews(data.articles)
            console.log(data)
        })
    }, [])
    


    return (
        <>
            <div className="header">
                <div className="logo">
                    <h2>Movies App</h2>
                </div>
            </div>
            <MovieCard />
        </>
    )
}

export default Movie;