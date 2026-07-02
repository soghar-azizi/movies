import WatcheditemsList from "./WatchedItems";

export default function WatchedList({ watchedMovie, onDeleteitem }) {
  return (
    <ul className="my-5">
      {watchedMovie.map((li) => {
        return (
          <WatcheditemsList
            onDeleteitem={onDeleteitem}
            movie={li}
            key={li.imdbID}
          />
        );
      })}
    </ul>
  );
}
