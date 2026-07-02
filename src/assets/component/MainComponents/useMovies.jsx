import { useState, useEffect } from "react";

const key = "fd868849";

export function useMovies(query) {
  const [movie, setMovie] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      setErr(null);

      // If the input is empty or less than 3 characters,
      // search for "batman" instead.
      const searchQuery = query.length >= 3 ? query : "avengers";

      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${key}&s=${searchQuery}`,
        );

        const data = await res.json();

        if (data.Response === "False") {
          setMovie([]);
          setErr(data.Error);
          return;
        }

        const newMovie = data.Search.map((movie) => ({
          title: movie.Title,
          poster: movie.Poster,
          year: movie.Year,
          imdbID: movie.imdbID,
        }));

        setMovie(newMovie);
      } catch (err) {
        setErr(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [query]);

  return { err, loading, movie };
}
