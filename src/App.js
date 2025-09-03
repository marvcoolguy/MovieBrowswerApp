import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./Components/Navbar";
import Home from "./Components/Home";
import AboutView from "./Components/About";
import SearchView from "./Components/SearchView";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Fetch movies from TMDb when searchText changes
  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=cffb203759856cc55c8c7a974fe4e834&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results || []);
        })
        .catch((err) => console.error("Error fetching data:", err));
    }
  }, [searchText]);

  // Simple hash routing for GitHub Pages
  const hash = window.location.hash;

  return (
    <div className="App d-flex flex-column min-vh-100">
      <NavBar searchText={searchText} setSearchText={setSearchText} />

      <main className="flex-fill">
        {hash === "" || hash === "#/" ? (
          <Home />
        ) : hash === "#/about" ? (
          <AboutView />
        ) : hash.startsWith("#/search") ? (
          <SearchView keyword={searchText} searchResults={searchResults} />
        ) : (
          <Home /> // fallback for unknown routes
        )}
      </main>
    </div>
  );
}

export default App;
