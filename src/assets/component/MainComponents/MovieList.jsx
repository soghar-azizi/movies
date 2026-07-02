import MovieItems from "./MovieItems"
export default function MovieList({
  movie,
  handleWathedMovieLIst,
  watchedMovie,
  handleSetTitle,
}) {
  return (
    <ul className="rounded">
      {movie.map((movie) => (
        <MovieItems
          handleSetTitle={handleSetTitle}
          movie={movie}
          key={movie.imdbID}
          handleWathedMovieLIst={handleWathedMovieLIst}
          selected={watchedMovie.some((m) => m.imdbID === movie.imdbID)}
        />
      ))}
    </ul>
  );
}