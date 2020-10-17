const axios = require('axios');
const apiKey = '5e970758';
const div = document.querySelector('#main');
const img = document.createElement('img');
const p = document.createElement('p');
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
        p.innerText = movieTitle;
        const moviePoster = movies[i].Poster;
        img.src = moviePoster;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});

// HTML APPEND
div.append(img);
div.append(p);
