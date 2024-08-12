import React, { useEffect, useState } from "react";
import Layout from "../Layout/layout";
import BannerMovie from "../Components/banner";
import Banner from "../assets/popularBanner.jpeg";
import axios from "axios";

const Popular = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = "2b9c224572d0da987d2651a9568d4afb";

  const fetchPopularMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies: ", error);
    }
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <Layout>
      <div className="">
        <BannerMovie
          heading="The Blackening"
          details="The Blackening is a 2022 American black horror comedy slasher film directed by Tim Story
           and written by Tracy Oliver and Dewayne Perkins, based on the 2018 short film of the same name by 
           the comedy troupe 3Peat."
        />
        <img src={Banner} className="opacity-20" />
      </div>
      <div className="bg-zinc-950 ">
        <h1 className="text-white text-center text-2xl py-10">
          Popular movies
        </h1>
        <div className="grid grid-cols-4 gap-y-20 gap-x-10 px-20 py-16">
          {movies.map((movie) => (
            <div className="flex flex-col bg-zinc-900 rounded-lg shadow shadow-zinc-950">
              <div className="h-96 overflow-hidden">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="opacity-80 object-cover h-full rounded-t-lg hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="text-white py-4 px-3 font-lato text-center">
                {movie.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Popular;
