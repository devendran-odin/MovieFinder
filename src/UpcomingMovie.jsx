import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

const UpcomingMovie = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const fetchUpcomingMovies = async () => {
    try {
      let allMovies = [];
      const totalPages = 5;

      for (let page = 1; page <= totalPages; page++) {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${
            import.meta.env.VITE_API_KEY
          }&language=en-US&page=${page}`
        );

        allMovies = [...allMovies, ...response.data.results];
      }

      setUpcomingMovies(allMovies);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUpcomingMovies();
  }, []);

  return (
    <div className="mx-auto max-w-full">
      <h1 className="text-4xl text-[#FFF0DC] mt-1 mb-2">Latest Movies</h1>
      <div className="text-[#FFF0DC] mt-4 flex flex-wrap gap-6 md:gap-9 items-center justify-start ">
        {upcomingMovies.map((movie) => {
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

export default UpcomingMovie;
