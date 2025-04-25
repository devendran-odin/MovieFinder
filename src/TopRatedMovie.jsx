import React from "react";
import MovieCard from "./MovieCard";
import useMovieFetch from "./lib/useMovieFetch";

const TopRatedMovie = () => {
  const { movies: topRatedMovies, loading, error } = useMovieFetch(
    "movie/top_rated?language=en-US",
    5,
    "title"
  );

  if (loading) return (
    <div className="text-[#FFF0DC]">
    <div className="flex-col gap-4 w-full flex items-center justify-center mt-10 md:mt-16">
      <div
        className="w-16 md:w-20 h-16 md:h-20 border-4 border-transparent text-[#FFF0DC] text-2xl md:text-4xl animate-spin flex items-center justify-center border-t-[#FFF0DC] rounded-full"
      >
        <div
          className="w-12 md:w-16 h-12 md:h-16 border-4 border-transparent text-[#F0BB78] text-lg md:text-2xl animate-spin flex items-center justify-center border-t-[#F0BB78] rounded-full"
        ></div>
      </div>
    </div>
    </div>
    )
  if (error) return <div className="text-[#FFF0DC]">Error: {error}</div>;

  return (
    <div className="mx-auto max-w-full">
      <h1 className="text-4xl text-[#FFF0DC] mt-1 mb-2">Top Rated Movies</h1>
      <div className="text-[#FFF0DC] mt-4 flex flex-wrap gap-6 md:gap-9 items-center justify-start ">
        {topRatedMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            movieName={movie.title}
            movieOverview={movie.overview}
            moviePosterPath={movie.poster_path}
            movieReleaseDate={movie.release_date || "unknown"}
            movieRating={movie.vote_average}
            movieReviews={movie.vote_count}
          />
        ))}
      </div>
    </div>
  );
};

export default TopRatedMovie;
