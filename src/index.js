import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./Components/Navbar";
import Home from "./Components/Home";
import AboutView from "./Components/About";
import SearchView from "./Components/SearchView";
import Footer from "./Components/Footer"; // optional if you have a footer

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results || []);
        })
        .catch((err) => console.error("Error fetching data:", err));
    }
  }, [searchText]);

  return (
    <div className="App d-flex flex-column min-vh-100">
      <NavBar searchText={searchText} setSearchText={setSearchText} />
      
      <main className="flex-fill">
        {/* Simple hash routing */}
        {window.location.hash === "" || window.location.hash === "#/" ? (
          <Home />
        ) : window.location.hash === "#/about" ? (
          <AboutView />
        ) : window.location.hash.startsWith("#/search") ? (
          <SearchView keyword={searchText} searchResults={searchResults} />
        ) : (
          <Home /> // fallback
        )}
      </main>

      <Footer /> {/* optional footer */}
    </div>
  );
}

export default App;
