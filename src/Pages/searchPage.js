import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "../Layout/layout";

const SearchPage = () => {
  const apiKey = "2b9c224572d0da987d2651a9568d4afb";
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (query) {
      const searchMovies = async () => {
        try {
          const response = await axios.get(`
                    https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}
                    `);

          setMovies(response.data.results);
        } catch (err) {
          console.log(err);
        }
      };
      searchMovies();
    }
  }, [query]);

  const totalPages = Math.ceil(movies.length / itemsPerPage);

  const paginatedEvents = movies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage // If currentpage=2
    // [ 1*8, 2*8 ]=> 8, 16
  );

  return (
    <Layout>
      <div className="bg-zinc-950 py-10">
        <h1 className="text-zinc-200 pt-28 text-center font-semibold font-lato text-xl  ">
          Search results for "{query}"
        </h1>
        <div className="grid grid-cols-4 gap-y-20 gap-x-10 px-20 py-16">
          {paginatedEvents.map((movie) => (
            <Link to={`/details/${movie.id}`} key={movie.id}>
              <div className="flex flex-col bg-zinc-900 rounded-lg shadow shadow-zinc-950">
                <div className="h-96 overflow-hidden">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : "https://via.placeholder.com/200x300?text=No+Image"
                    }
                    alt={movie.title}
                    className="opacity-80 object-cover h-full rounded-t-lg hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="text-white py-4 px-3 font-lato text-center h-20">
                  {movie.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-5">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              onClick={() => setCurrentPage(index + 1)}
              key={index}
              className={`px-4 py-2 font-bold font-lato text-zinc-200 ${
                currentPage === index + 1 ? "bg-zinc-600 " : "bg-zinc-800"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
