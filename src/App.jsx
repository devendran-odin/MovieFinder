import PopularMovie from "./PopularMovie";
import SearchMovie from "./SearchMovie";
import { Toaster } from "react-hot-toast";
import "./index.css";
import TrendingMovie from "./TrendingMovie";
import TopRatedMovie from "./TopRatedMovie";

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
         */}
        <SearchMovie />
        <PopularMovie />
        <TrendingMovie />
        <TopRatedMovie />
      </div>
    </>
  );
}

export default App;
