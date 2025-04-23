import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

const PopularMovie = () => {
  const [popularMovies, setPoularMovies] = useState([]);
  const fetchPopular = async () => {
    try {
      let allMovies = [];
      const totalPages = 6;

      for (let page = 1; page <= totalPages; page++) {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_API_KEY
          }&with_original_language=ta&with_origin_country=IN&page=${page}`
        );
        allMovies = [...allMovies, ...response.data.results];
      }

      const sortedMovies = allMovies.sort((a, b) => {
        const yearA = parseInt(a.release_date.split("-")[0]);
        const yearB = parseInt(b.release_date.split("-")[0]);
        return yearB - yearA;
      });

      setPoularMovies(sortedMovies);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div className="mx-auto max-w-full">
      <h1 className="text-4xl text-[#FFF0DC] mt-1 mb-2">Tamil Movies</h1>
      <div className="text-[#FFF0DC] mt-4 flex flex-wrap gap-6 md:gap-9 items-center justify-start ">
        {popularMovies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              movieName={movie.title}
              movieOverview={movie.overview}
              moviePosterPath={movie.poster_path}
              movieReleaseDate={movie.release_date}
              movieRating={movie.vote_average}
              movieReviews={movie.vote_count}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PopularMovie;
