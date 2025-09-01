import Hero from "./Hero";
const Home = () => {
  return (
    <>
      <Hero text="Welcome to our Home page" />
      <div className="container my-5">
        <h1 className="text-center mb-4 fw-bold">Welcome to MovieBrowser 🎬</h1>
        <p className="lead text-center text-muted mb-5">
          Discover, explore, and enjoy your favorite movies all in one place.
        </p>    

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-light rounded shadow-sm">
              <h3 className="fw-semibold">Top Rated Movies</h3>
              <p>
                Dive into a collection of timeless classics and award-winning
                masterpieces. From epic adventures to thought-provoking dramas,
                these movies have stood the test of time.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-light rounded shadow-sm">
              <h3 className="fw-semibold">Trending Now</h3>
              <p>
                Stay up to date with the latest blockbusters. Whether it’s
                action, comedy, or sci-fi, see what’s capturing the world’s
                attention today.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <div className="p-4 bg-dark text-white rounded shadow-sm">
              <h3 className="fw-semibold">Why MovieBrowser?</h3>
              <p>
                With MovieBrowser, you can search, filter, and browse through an
                extensive library of movies. Our goal is to bring the cinema
                experience to your fingertips—convenient, fast, and fun!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
