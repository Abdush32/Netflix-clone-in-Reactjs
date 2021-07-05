import React, { useState, useEffect } from 'react';
import "./banner.css"
import axios from './axios';
import request from "./request";

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {

        async function fetchData() {
    
          const requests = await axios.get(request.fetchNetflixOriginals);
          setMovie(
            requests.data.results[
            Math.floor(Math.random() * requests.data.results.length - 1)
            ]
          );
          // Math.floor(Math.random() * request.data.results.length -1)
          return requests;
        }
        fetchData();
      }, []);

console.log(movie);
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}


    return (
        <header className="banner"
        style={{
backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
backgroundSize: "cover",
backgroundPosition: "center center",
        }}
        >
        <div className="banner_content">
        <h1 className="banner_title">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <div className="banner_buttons">
      <button className="banner_button">Play</button>
      <button className="banner_button">My List</button>
      </div>
<h1 className="banner_description">
        {truncate(movie?.overview, 150)}


</h1>
        </div>
        

        {/* title*/}
        {/* button */}
        {/* description */}
       
            <div className="banner_fadebutton"></div>
        </header>
    )
}

export default Banner
