import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import MovieCard from "./MovieCard";

const SearchResult = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = new URLSearchParams(useLocation().search).get("query");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${
            import.meta.env.VITE_API_KEY
          }&query=${encodeURIComponent(query)}`
        );
        setResults(response.data.results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div>
      <h2 className="text-3xl text-[#FFF0DC] mb-4">
        Search Results for "{query}"
      </h2>
      {loading ? (
         <>
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
          </>
          
      ) : results.length > 0 ? (
        <div className="text-[#FFF0DC] mt-4 flex flex-wrap gap-6 md:gap-9 items-center justify-start ">
          {results.map((movie) => (
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
          ))}
        </div>
      ) : (
        <p className="text-[#FFF0DC]">No results found.</p>
      )}
    </div>
  );
};

export default SearchResult;
