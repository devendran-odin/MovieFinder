import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

const TopRatedMovie = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const fetchTopRatedMovies = async () => {
    try {
      let allMovies = [];
      const totalPages = 5;

      for (let page = 1; page <= totalPages; page++) {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${
            import.meta.env.VITE_API_KEY
          }&language=en-US&page=${page}`
        );
        allMovies = [...allMovies, ...response.data.results];
      }
      const sortedMovies = allMovies.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });

      setTopRatedMovies(sortedMovies);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTopRatedMovies();
  }, []);

  return (
    <div className="mx-auto max-w-full">
      <h1 className="text-4xl text-[#FFF0DC] mt-1 mb-2">Top Rated Movies</h1>
      <div className="text-[#FFF0DC] mt-4 flex flex-wrap gap-6 md:gap-9 items-center justify-start ">
        {topRatedMovies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              movieName={movie.title}
              movieOverview={movie.overview}
              moviePosterPath={movie.poster_path}
              movieReleaseDate={
                movie.release_date ? movie.release_date : "unknown"
              }
              movieRating={movie.vote_average}
              movieReviews={movie.vote_count}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopRatedMovie;
