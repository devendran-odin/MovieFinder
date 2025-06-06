import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({
  id,
  movieName,
  movieOverview,
  moviePosterPath,
  movieReleaseDate,
  movieRating,
  movieReviews,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie/${id}`);
  };
  return (
    moviePosterPath &&
    movieOverview && (
      <div
        onClick={handleClick}
        className="mt-0.5 shadow-amber-300 cursor-pointer shadow-sm hover:shadow-lg w-full sm:w-[280px] md:w-[320px] lg:w-[350px]"
      >
        <div className="relative w-full">
          <img
            src={`https://image.tmdb.org/t/p/w300${moviePosterPath}`}
            alt=""
            className="object-cover w-full h-[250px] sm:h-[280px] md:h-[300px] hover:cursor-pointer"
          />
        </div>
        <div className="p-3">
          <div className="pt-1">
            <h3 className="text-2xl sm:text-3xl text-[#F0BB78] truncate" title={movieName}>
              {movieName}
            </h3>
            <p className="line-clamp-2 text-[14px] sm:text-[15px] pt-2">{movieOverview}</p>
          </div>
          <div className="flex items-center justify-between pt-4 pb-1">
            <button className="border px-2 py-1 border-[#F0BB78] cursor-pointer hover:bg-[#F0BB78] hover:text-[#543A14] text-sm sm:text-base">
              Read More
            </button>
            <p className="mr-2.5 text-sm sm:text-base">
              <span>
                {movieRating ? movieRating.toFixed(1) : "N/A"} Rating{" "}
              </span>
              |{" "}
              <span>
                {" "}
                {movieReleaseDate == "unknown"
                  ? "Coming soon"
                  : movieReleaseDate.split("-")[0] + " Release"}
              </span>
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default MovieCard;
