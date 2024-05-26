document.addEventListener('DOMContentLoaded', function() {
    const movieList = document.getElementById('movie-list');
    const movies = getMovies();
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Seats Available: ${movie.seatsAvailable}/${movie.totalSeats}</p>
            <button onclick="reserveSeats('${movie.title}')">Reserve Seats</button>
        `;
        movieList.appendChild(movieElement);
    });
});

function reserveSeats(title) {
    // Functionality to reserve seats
    window.location.href = `reserve.html?title=${title}`;
}

