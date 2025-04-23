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
        <p className="text-[#FFF0DC]">Loading...</p>
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
