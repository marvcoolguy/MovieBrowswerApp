MovieBrowser 🎬

A responsive movie search and browsing web application built with React, Bootstrap, and TMDb API. Users can search for movies, view details, and explore top-rated and trending movies in a visually appealing card layout.

Table of Contents

Features

Demo

Installation

Usage

Technologies

API

Project Structure

License

Features

Search movies dynamically using TMDb API.

Display results in responsive card grids (3 cards per row on medium+ screens).

Show movie poster, title, release date, and a short overview.

Responsive design with Bootstrap — works on mobile, tablet, and desktop.

Filter out adult content automatically.

Clean and minimal UI with Hero section, navbar, and footer.

Navbar search input redirects to search results page dynamically.

Demo

Add screenshots or GIFs here to showcase the app.

Installation

Clone the repository:

git clone https://github.com/marvcoolguy/MovieBrowser.git
cd MovieBrowser


Install dependencies:

npm install


Run the app:

npm start


Open http://localhost:3000
 in your browser.

Usage

Type a movie name in the search bar and press Enter or click Search.

Browse the results in the card grid.

Click on a movie (future enhancement: link to details page).

Technologies

React – Frontend framework

React Router v5 – Page routing

Bootstrap 5 – Styling and responsive grid

TMDb API – Movie database API

JavaScript (ES6) – Logic and API calls

API

Uses TMDb API
 to fetch movie data.

Make sure to replace the API key in App.js with your own key.

Filters adult content automatically using adult: false.

Project Structure
MovieBrowser/
│
├─ src/
│  ├─ Components/
│  │   ├─ Navbar.js
│  │   ├─ Home.js
│  │   ├─ About.js
│  │   ├─ SearchView.js
│  │   └─ Hero.js
│  ├─ App.js
│  ├─ App.css
│  └─ index.js
│
├─ package.json
└─ README.md

License

This project is open-source and available under the MIT License
.

Future Enhancements

Movie details page with more info and trailers

“Where to Watch” integration (JustWatch API)

User authentication & profile system

Ratings and favorites