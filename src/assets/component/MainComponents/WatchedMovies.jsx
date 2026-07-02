import Options from "./selectOptions";
import { StrAverage } from "./StrAverage";
import WatchedList from "./WatchedList";
import FilterMovies from "./FilterMovie";
import { Message } from "./Message";
export default function WatchedMovieList({
  watchedMovie,
  onDeleteitem,
  onClear,
  onFilter,
}) {
  return (
    <div className="rounded-xl bg-white p-3">
      <div className="font-bold text-xl flex justify-between">
        <h1 className="">
          My WishList{" "}
          <span className="text-gray-400">({watchedMovie.length})</span>
        </h1>
        {watchedMovie.length > 0 ? (
          <p
            className="text-red-500 text-sm font-bold cursor-pointer"
            onClick={() => onClear()}
          >
            clear all
          </p>
        ) : (
          ""
        )}
      </div>
      {watchedMovie.length === 0 ? (
        <Message />
      ) : (
        <>
          <StrAverage watchedMovie={watchedMovie} />
          <FilterMovies onFilter={onFilter} />
          <WatchedList
            watchedMovie={watchedMovie}
            onDeleteitem={onDeleteitem}
          />
        </>
      )}
    </div>
  );
}
