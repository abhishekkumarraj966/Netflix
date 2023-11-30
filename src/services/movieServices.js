// const key = import.meta.env.VITE_TMDB_KEY;
// const baseUrl = "https://api.themoviedb.org/3";
// const endpoints = {
//   popular: `${baseUrl}/movie/popular?api_key=${key}`,
//   topRated: `${baseUrl}/movie/top_rated?api_key=${key}`,
//   trending: `${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=2`,
//   comedy: `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
//   upcoming: `${baseUrl}/movie/upcoming?api_key=${key}`,
// };

// export default endpoints;
const mockData = {
  popular: {
    results: [
      {
        id: 1,
        title: "Mock Movie 1",
        // Add other movie details as needed
      },
      {
        id: 2,
        title: "Mock Movie 2",
        // Add other movie details as needed
      },
      // Add more mock movies if necessary
    ],
  },
  topRated: {
    results: [
      {
        id: 3,
        title: "Top Rated Movie 1",
        // Add other movie details as needed
      },
      {
        id: 4,
        title: "Top Rated Movie 2",
        // Add other movie details as needed
      },
      // Add more top-rated movies if necessary
    ],
  },
  trending: {
    results: [
      {
        id: 5,
        title: "Trending Movie 1",
        // Add other movie details as needed
      },
      {
        id: 6,
        title: "Trending Movie 2",
        // Add other movie details as needed
      },
      // Add more trending movies if necessary
    ],
  },
  comedy: {
    results: [
      {
        id: 7,
        title: "Comedy Movie 1",
        // Add other movie details as needed
      },
      {
        id: 8,
        title: "Comedy Movie 2",
        // Add other movie details as needed
      },
      // Add more comedy movies if necessary
    ],
  },
  upcoming: {
    results: [
      {
        id: 9,
        title: "Upcoming Movie 1",
        // Add other movie details as needed
      },
      {
        id: 10,
        title: "Upcoming Movie 2",
        // Add other movie details as needed
      },
      // Add more upcoming movies if necessary
    ],
  },
};

export default mockData;
