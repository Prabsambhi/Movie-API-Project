import React, { useState,useEffect } from "react";
import Layout from "../Layout/layout";
import { useParams } from "react-router-dom";
import axios from "axios";
// https://api.themoviedb.org/3/movie/{movie_id}

const MovieDetails = () => {

  const { id } = useParams();

  const [movie, setMovie] = useState([]);
  const apiKey = "2b9c224572d0da987d2651a9568d4afb";

  const fetchMovieDetails = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    try {
      const response = await axios.get(url);
        setMovie(response.data);
    } catch (error) {
      console.error("Error fetching movies: ", error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return <Layout>
    <div className="text-white">{movie.title}</div>
    <div className="text-white">{movie.overview}</div>
    <div>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
    </div>
  </Layout>;
};

export default MovieDetails;
