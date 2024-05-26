document.addEventListener('DOMContentLoaded', function() {
    loadMovies();
});

function loadMovies() {
    const movieList = document.getElementById('movie-list');
    const movies = getMovies();
    movieList.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Seats Available: ${movie.seatsAvailable}/${movie.totalSeats}</p>
            <button onclick="deleteMovie('${movie.title}')">Delete Movie</button>
        `;
        movieList.appendChild(movieElement);
    });
}

function createMovie() {
    const title = document.getElementById('movie-title').value;
    const image = document.getElementById('movie-image').value;
    const totalSeats = document.getElementById('seats-total').value;

    if (title && image && totalSeats) {
        const movies = getMovies();
        movies.push({ title, image, totalSeats, seatsAvailable: totalSeats });
        saveMovies(movies);
        loadMovies();
    } else {
        alert('Please fill in all fields');
    }
}

function deleteMovie(title) {
    const movies = getMovies().filter(movie => movie.title !== title);
    saveMovies(movies);
    loadMovies();
}
