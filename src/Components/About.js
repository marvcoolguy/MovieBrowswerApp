import Hero from "./Hero";
const AboutView = () => {
  return (
    <>
      <Hero text="About Us" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-5">
                <h2>About Our Movie Browser</h2>
                <p>
                Our Movie Browser is your ultimate destination for discovering and
                exploring a vast collection of movies from various genres and
                eras. Whether you're a cinephile or just looking for something new
                to watch, our platform offers an intuitive and user-friendly
                interface to help you find the perfect movie.
                </p>
          </div>
          <div className="col-md-6 my-5">
            <h2>Features</h2>
            <ul>
              <li>
                Extensive Movie Database: Access a comprehensive database of
                movies, including classics, blockbusters, indie films, and more.
              </li>
              <li>
                Advanced Search: Use our advanced search filters to find movies
                based on genre, release year, ratings, and more.
              </li>
              <li>
                User Reviews: Read reviews from fellow movie enthusiasts to help
                you make informed decisions.
              </li>
              <li>
                Watchlist: Create and manage your personalized watchlist to keep
                track of movies you want to see.
              </li>
              <li>
                Recommendations: Get personalized movie recommendations based on
                your viewing history and preferences.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
