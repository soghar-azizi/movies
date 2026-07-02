import Stars from "./Stars";
import { useState } from "react";
import WatchedButton from "./watchedButton";

export default function MovieItems({
  movie,
  handleWathedMovieLIst,
  selected,
  handleSetTitle,
}) {
  const [userRating, setUserRating] = useState(3);

  return (
    <li className="flex gap-3 h-25 bg-white p-2 my-3 rounded shadow-[0_0_5px_rgba(0,0,0,0.2)]">
      <div className="h-[100%]">
        <img
          src={movie.poster}
          alt={movie.title}
          className="h-full rounded-sm"
          onError={(e) => {
            e.target.src = "/no-img.png";
          }}
        />
      </div>
      <div>
        <b className="">{movie.title}</b>
        <p className="text-gray-400">Year {movie.year}</p>
        {selected ? (
          <button className="bg-green-400 text-amber-50 p-1 rounded font-bold text-[8px]">
            Added <i className="fa-solid fa-square-check"></i>
          </button>
        ) : (
          <div className="flex gap-1 items-start mt-1 ">
            <Stars onSetRating={setUserRating} userRating={userRating} />
            <WatchedButton
              handleWathedMovieLIst={handleWathedMovieLIst}
              movie={movie}
              userRating={userRating}
              handleSetTitle={handleSetTitle}
            />{" "}
          </div>
        )}
      </div>
    </li>
  );
}

