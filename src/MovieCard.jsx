import React from "react";

const MovieCard = ({
  movieName,
  movieOverview,
  moviePosterPath,
  movieReleaseDate,
  movieRating,
  movieReviews,
}) => {
  return (
    <div className="mt-0.5 shadow-amber-300 shadow-sm hover:shadow-lg w-[350px]">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300${moviePosterPath}`}
          alt=""
          className="object-cover w-full h-[300px] hover:cursor-pointer"
        />
      </div>
      <div className="p-3">
        <div className="pt-1">
          <h3 className="text-3xl text-[#F0BB78] truncate" title={movieName}>
            {movieName}
          </h3>
          <p className="line-clamp-3 text-[15px] pt-2">{movieOverview}</p>
        </div>
        <div className="flex items-center justify-between pt-4 pb-1">
          <button className="border px-2 py-1 border-[#F0BB78] cursor-pointer hover:bg-[#F0BB78] hover:text-[#543A14]">
            Read More
          </button>
          <p className=" mr-2.5">
            <span>{movieRating ? movieRating.toFixed(1) : "N/A"} Rating </span>|{" "}
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
  );
};

export default MovieCard;
