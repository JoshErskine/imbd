function MovieCard({ movie }) {
  function handleClick() {
    alert(`Added ${movie.Title} to favourites`);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title} />
        <div className="movie-overlay">
          <button className="favourite-btn" onClick={handleClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-details">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <p>{movie.Genre}</p>
      </div>
    </div>
  );
}

export default MovieCard;
