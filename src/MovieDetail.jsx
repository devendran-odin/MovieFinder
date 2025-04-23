import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const formatRunTime = (minutes) => {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hrs}h ${mins}m`;
  };

  const fetchMovie = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      console.log(response.data);
      setMovie(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  if (loading) {
    return <div className="text-white text-center mt-20">Loading...</div>;
  }

  return (
    <>
      {" "}
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-10 xl:px-16 py-5 md:py-8 lg:py-16 flex flex-col lg:flex-row items-start lg:items-center text-[#FFF0DC]">
        {/* Poster */}
        <div className="w-full sm:w-[90%] md:w-[60%] lg:w-[70%] xl:w-[48%] 2xl:w-[35%] mx-auto lg:mx-0">
          <img
            src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
            alt={movie.title}
            className="shadow-sm shadow-amber-400 w-full"
          />
        </div>

        {/* Details */}
        <div className="mt-6 lg:mt-0 lg:ml-6 w-full">
          {/* Title & Description */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-[42px] text-[#F0BB78] font-bold">
              {movie.title}
            </h2>
            <p className="text-base sm:text-lg pt-2.5 mb-4 sm:mb-6">
              {movie.overview}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-2 flex flex-wrap gap-2">
            {movie.genres.map((genre) => (
              <span className="border px-2 py-1 border-[#F0BB78]">
                {genre.name}
              </span>
            ))}
          </div>

          {/* Ratings and Reviews */}
          <div className="my-5 sm:my-6 flex items-center flex-wrap gap-4 text-sm sm:text-base">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-1">
                {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}{" "}
                Rating
              </span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                  clipRule="evenodd"
                />
                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
              </svg>
              <span className="ml-1">{movie.vote_count} Reviews</span>
            </div>
          </div>

          {/* Info Grid */}
          <div className="border border-[#F0BB78] text-sm sm:text-base">
            <div className="grid grid-cols-2">
              <div className="border border-[#F0BB78] px-4 py-2 font-bold">
                Runtime
              </div>
              <div className="border border-[#F0BB78] px-4 py-2">
                {formatRunTime(movie.runtime)}
              </div>
              <div className="border border-[#F0BB78] px-4 py-2 font-bold">
                Release Date
              </div>
              <div className="border border-[#F0BB78] px-4 py-2">
                {movie.release_date}
              </div>
              <div className="border border-[#F0BB78] px-4 py-2 font-bold">
                Producer
              </div>
              <div className="border border-[#F0BB78] px-4 py-2">
                {movie.production_companies?.[0]?.name || "N/A"}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-4 md:mt-6 flex flex-wrap gap-3">
            <a
              href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                movie.title + " trailer"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-yellow-500 border font-semibold px-3 py-2 hover:cursor-pointer hover:border-yellow-600">
                Watch Trailer
              </button>
            </a>

            {movie.imdb_id && (
              <a
                href={`https://www.imdb.com/title/${movie.imdb_id}/`}
                target="_blank"
              >
                <button className="bg-yellow-500 text-black font-semibold px-3 py-2 hover:cursor-pointer hover:bg-yellow-400">
                  View in IMDb
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
