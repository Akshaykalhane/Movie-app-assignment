import React from "react";
import Data from './data.json';
import { Link } from "react-router-dom";

const MovieCard=(props)=>{

    return(
        <>
          <div className="container1">
            {
                Data.map(data=>{
                    return(     
                // <Link to={'/'}>
                <div className="items" key={data.id}>
                    <div className="text-box">
                        <h2>{data.original_title}</h2>
                        <p>{data.release_date}</p>
                        <p>Rating: {data.vote_average}</p>
                    
                    </div>
                </div>
                // </Link>
                    )
                })
            }
            </div>
        </>
    )
}

export default MovieCard;