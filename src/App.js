import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import Popular from "./Pages/popular";
import Upcoming from "./Pages/Upcoming";
import MovieDetails from "./Pages/movieDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
    </>
  );
};

export default App;
