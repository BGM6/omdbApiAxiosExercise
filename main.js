const axios = require('axios');
const apiKey = '5e970758';
const div = document.querySelector('#main');
const img = document.createElement('img');
const h3 = document.createElement('h3');
const h4 = document.createElement('h4');
const h5 = document.createElement('h5');
const srchInput = document.querySelector('#searchInput');
const btn = document.querySelector('#searchBtn');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  const userInput = srchInput.value.trim().toLowerCase();
  const URL = `https://www.omdbapi.com/?s=${userInput}&apikey=${apiKey}`;
  
  axios
    .get(URL)
    .then(function (res) {
      const movies = res.data.Search;
      for (let i = 0; i < movies.length; i++) {
        // console.log(movies[i]);
        const movieTitle = movies[i].Title;
        h3.innerText = `Title: ${movieTitle}`;
        const moviePoster = movies[i].Poster;
        img.src = moviePoster;
        const movieYear = movies[i].Year;
        h4.innerText = `Year: ${movieYear}`;
        const imdbID = movies[i].imdbID;
        h5.innerText = `ID: ${imdbID}`;

      }
    })
    .catch(function (error) {
      console.log(error);
    });
});

// HTML APPEND
div.append(img);
div.append(h3);
div.append(h4);
div.append(h5);
