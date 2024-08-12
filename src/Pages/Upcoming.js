import React, { useEffect, useState } from "react";
import Layout from "../Layout/layout";
import Banner from "../assets/upcomingBanner.webp";
import BannerMovie from "../Components/banner";
import axios from "axios";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = "2b9c224572d0da987d2651a9568d4afb";

  const fetchUpcomingMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;

    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies: ", error);
    }
  };

  useEffect(() => {
    fetchUpcomingMovies();
  }, []);

  return (
    <Layout>
      <div className="">
        <BannerMovie
          heading="Dune"
          details="Dune American epic science fiction film directed and co-produced by Denis Villeneuve,
           who co-wrote the screenplay with Jon Spaihts, and Eric Roth.
           It is the first of a two-part adaptation of the 1965 novel of the same name by Frank Herbert. "
        />
        <img src={Banner} className="opacity-15 saturate-50" />
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

export default Upcoming;
