import React, { useState, useEffect } from "react";
import Layout from "../Layout/layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Rate } from "antd";
import Rating from "../Components/rating";

// https://api.themoviedb.org/3/movie/{movie_id}

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const apiKey = "2b9c224572d0da987d2651a9568d4afb";

  const fetchMovieDetails = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    try {
      const response = await axios.get(url);
      console.log(response.data);
      setMovie(response.data);
    } catch (error) {
      console.error("Error fetching movies: ", error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return (
    <Layout>
      <div className="flex items-center bg-zinc-950">
        <div className="w-1/3 scale-[0.6]">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        </div>
        <div className="w-2/3 pl-10 pr-20 flex flex-col gap-5 ">
          <div className="text-white text-3xl font-bold">{movie.title}</div>
          <div className="text-white font-lato">{movie.overview}</div>
          <div className="flex gap-4">
            {movie.genres?.map((item) => (
              <h1 className="text-white border px-3 py-2"> {item.name}</h1>
            ))}
          </div>
          <div className="text-white font-lato "><span className="font-semibold mr-2">Release date: </span>{movie.release_date}</div>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm font-bold text-zinc-100 dark:text-white">
              {movie.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-zinc-300 rounded-full dark:bg-gray-400" />
            <h1
              href="#"
              className="text-base font-medium text-zinc-100  dark:text-white "
            >
             <span className="underline mr-2">{movie.vote_count}</span> 
            reviews
            </h1>
          </div>
          {/* <Rating value={4}/> */}
        </div>
      </div>
    </Layout>
  );
};

export default MovieDetails;
