import SearchBar from "./MainComponents/SearchBar";
import MovieList from "./MainComponents/MovieList";
import WatchedMovieList from "./MainComponents/WatchedMovies";
import { useState } from "react";
import Loading from "./MainComponents/Loading";
import Error from "./MainComponents/Error";
import { useEffect } from "react";
import { useMovies } from "./MainComponents/useMovies";
import useLocalStorageState from "./MainComponents/LocalStrorage";
export default function Main() {
const [watchedMovie, setWatchedMovie] = useLocalStorageState("watchedMovie");
  // const [err, setErr] = useState(null);
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("Movies");
  const { err, movie, loading } = useMovies(query);

  function handleWathedMovieLIst(movieItem) {
    setWatchedMovie((watched) => {
      const newList = [...watched, movieItem];
      return newList;
    });
  }
  function handleDeleteItem(id) {
    setWatchedMovie((watched) => watched.filter((item) => item.imdbID !== id));
  }
  function handleClearAll() {
    setWatchedMovie([]);
    setTitle("Movies");
  }

  function handleFilterMovie(item) {
    if (item === "rating") {
      console.log("item");
      setWatchedMovie((watched) => {
        const sorted = [...watched];

        sorted.sort(
          (a, b) => (Number(b.userRating) || 0) - (Number(a.userRating) || 0),
        );

        return sorted;
      });
    } else if (item === "Title A-Z") {
      setWatchedMovie((watched) =>
        [...watched].sort((a, b) => a.title.localeCompare(b.title)),
      );
    } else if (item === "Title Z-A") {
      setWatchedMovie((watched) =>
        [...watched].sort((a, b) => b.title.localeCompare(a.title)),
      );
    } else if (item === "Date") {
      setWatchedMovie((watched) =>
        [...watched].sort((newD, pastD) => pastD.addedAt - newD.addedAt),
      );
    } else if (item === "year") {
      setWatchedMovie((watched) =>
        [...watched].sort((a, b) => b.year - a.year),
      );
    }
  }
  function handleSetTitle(item) {
    setTitle(item.title);
  }
  useEffect(() => {
    document.title = title;

    return () => {
      document.title = "Movies";
    };
  }, [title]);

  return (
    <main className="bg-blue-30 pt-8 ">
      <div className="flex flex-col justify-center items-center md:flex-row md:items-start gap-4 w-[85%] mx-auto ">
        <div className="flex w-[100%] flex-col md:w-[60%]">
          <div>
            <SearchBar query={query} setQuery={setQuery} />
            <Topic />
          </div>

          <div className="">
            {loading ? (
              <Loading />
            ) : err ? (
              <Error err={err} />
            ) : movie.length === 0 ? (
              <p className="absolute top-[70%] left-[25%] -translate-x-1/3 font-bold  text-gray-400 text-xl">
                No Movie 🙅
              </p>
            ) : (
              <MovieList
                movie={movie}
                handleWathedMovieLIst={handleWathedMovieLIst}
                watchedMovie={watchedMovie}
                handleSetTitle={handleSetTitle}
              />
            )}
          </div>
        </div>
        <div className="w-[100%] md:w-[35%] min-h-[150px] bg-white rounded-md shadow-[0_0_5px_rgba(0,0,0,0.2)]">
          <WatchedMovieList
            watchedMovie={watchedMovie}
            onDeleteitem={handleDeleteItem}
            onClear={handleClearAll}
            onFilter={handleFilterMovie}
          />
        </div>
      </div>
    </main>
  );
}

function Topic() {
  return (
    <div className="my-3">
      <p>
        <i className="fa-brands fa-amazon-pay"></i>
        <b className="pl-2">Latest Movies</b>
      </p>
    </div>
  );
}
