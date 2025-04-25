import { useState, useEffect } from 'react';
import axios from 'axios';

const useMovieFetch = (endpoint, totalPages = 5, sortBy = null) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      let allMovies = [];

      for (let page = 1; page <= totalPages; page++) {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${endpoint}`,
          {
            params: {
              api_key: import.meta.env.VITE_API_KEY,
              page: page
            }
          }
        );
        allMovies = [...allMovies, ...response.data.results];
      }

      if (sortBy) {
        allMovies = sortMovies(allMovies, sortBy);
      }

      setMovies(allMovies);
      setError(null);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const sortMovies = (movies, sortType) => {
    switch (sortType) {
      case 'year':
        return movies.sort((a, b) => {
          const yearA = parseInt(a.release_date?.split('-')[0] || 0);
          const yearB = parseInt(b.release_date?.split('-')[0] || 0);
          return yearB - yearA;
        });
      case 'title':
        return movies.sort((a, b) => a.title.localeCompare(b.title));
      case 'rating':
        return movies.sort((a, b) => b.vote_average - a.vote_average);
      default:
        return movies;
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [endpoint, totalPages, sortBy]);

  return { movies, loading, error };
};

export default useMovieFetch; 