import React, { useEffect, useState, useRef } from "react";
import Layout from "../Layout/layout";
import BannerMovie from "../Components/banner";
import Banner from "../assets/popularBanner.jpeg";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const Popular = () => {

  const [movies, setMovies] = useState([]);
  const popularMovieRef = useRef(null);
  const apiKey = "2b9c224572d0da987d2651a9568d4afb";
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();

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

  useEffect(() => {
    if (location.pathname === "/popular") {
      popularMovieRef.current.scrollIntoView({
        behaviour: "smooth",
      });
    }
  }, [location]);

  const totalPages = Math.ceil(movies.length / itemsPerPage);

  const paginatedEvents = movies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage // If currentpage=2
    // [ 1*8, 2*8 ]=> 8, 16
  );

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
      <div className="bg-zinc-950 pb-10">
        <h1
          className="text-white text-center text-2xl py-10"
          ref={popularMovieRef}
        >
          Popular movies
        </h1>
        <div className="grid grid-cols-4 gap-y-20 gap-x-10 px-20 py-16">
          {paginatedEvents.map((movie) => (
            <Link to={`/details/${movie.id}`} key={movie.id} >
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
            </Link>
          ))}
        </div>
        <div className="flex justify-center my-5">
          {Array.from({ length: totalPages }, (_, index) => (
            <Link to="/popular" key={index}>
              <button
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 font-bold font-lato text-zinc-200 ${
                  currentPage === index + 1 ? "bg-zinc-600 " : "bg-zinc-800"
                }`}
              >
                {index + 1}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Popular;


// 19995
//
