import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

const TrendingMovie = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const fetchTrendingMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1`
      );
      setTrendingMovies(response.data.results);
      console.log(response.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <div className="mx-auto max-w-full">
      <h1 className="text-4xl text-[#FFF0DC] mt-1 mb-2">Trending Movies</h1>
      <div className="text-[#FFF0DC] mt-4 flex flex-wrap gap-6 md:gap-9 items-center justify-start ">
        {trendingMovies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movieName={movie.title || movie.name}
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

export default TrendingMovie;
