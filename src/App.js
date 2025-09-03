import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./Components/Navbar";
import Home from "./Components/Home";
import AboutView from "./Components/About";
import { Route, Switch } from "react-router-dom";
import SearchView from "./Components/SearchView";
import NotFound from "./Components/NotFound";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=cffb203759856cc55c8c7a974fe4e834&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div className="App">
      <NavBar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search" exact>
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="*" component={<NotFound />} />
      </Switch>

    </div>
  );
}

export default App;
