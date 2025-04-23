import PopularMovie from "./PopularMovie";
import SearchMovie from "./SearchMovie";
import { Toaster } from "react-hot-toast";
import "./index.css";
import TrendingMovie from "./TrendingMovie";
import TopRatedMovie from "./TopRatedMovie";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import IndianMovie from "./IndianMovie";
import UpcomingMovie from "./UpcomingMovie";
import MovieDetail from "./MovieDetail";
import SearchResult from "./SearchResult";

function App() {
  return (
    <>
      <div className="min-h-screen p-5 md:py-10 md:px-28">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              borderRadius: "10px",
              background: "#fff",
              color: "#333",
            },
          }}
        />

        {/* 
        navbar -> tamil movies, popular indian movies(good movies), trending
        add page count-3-4 for all pages
        search functionality
        Individual Poge (trailer link by adding youtube url, IMDB)
        Website Logo
        update readme and give attribution to TMDB
        make it responsive
         */}
        {/* <Navbar />
        <SearchMovie />
        <PopularMovie />
        <TrendingMovie />
        <TopRatedMovie /> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar /> <SearchMovie /> <TopRatedMovie />
              </>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <>
                <Navbar />
                <MovieDetail />
              </>
            }
          />
          <Route
            path="/tamil"
            element={
              <>
                <Navbar /> <SearchMovie /> <PopularMovie />
              </>
            }
          />
          <Route
            path="/indian"
            element={
              <>
                <Navbar /> <SearchMovie /> <IndianMovie />
              </>
            }
          />
          <Route
            path="/trending"
            element={
              <>
                <Navbar /> <SearchMovie /> <TrendingMovie />
              </>
            }
          />
          <Route
            path="/latest"
            element={
              <>
                <Navbar /> <SearchMovie /> <UpcomingMovie />
              </>
            }
          />
          <Route
            path="/search"
            element={
              <>
                <Navbar /> <SearchMovie /> <SearchResult />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
