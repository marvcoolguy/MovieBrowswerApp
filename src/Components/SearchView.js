import Hero from "./Hero";

const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  const title = movie.title || movie.name || "Untitled";
  const date = movie.release_date || movie.first_air_date || "";

  return (
    <div className="card h-100 w-100 shadow-sm">
      <img src={posterUrl} className="card-img-top img-fluid" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title mb-1">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
        <p className="card-text mb-0">
          {movie.overview
            ? movie.overview.length < 200
              ? movie.overview
              : movie.overview.substring(0, 200) + "..."
            : "No description available."}
        </p>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  return (
    <div>
        <Hero text={title} />
      <div className="container my-4">
        <div className="row g-4">
          {searchResults.map((movie, i) => (
            <div
              key={movie.id ?? i}
              className="col-12 col-md-4 d-flex"
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchView;
