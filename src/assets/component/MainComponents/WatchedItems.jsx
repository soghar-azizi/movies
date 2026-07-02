export default function WatcheditemsList({ movie, onDeleteitem }) {
  return (
    <li className="flex justify-between my-2 h-24 p-2 shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-md">
      <div className="flex gap-2.5 ">
        <div className="h-full">
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
          <h1 className="font-bold text-sm">{movie.title}</h1>
          <p className="text-gray-500">{movie.year}</p>
          <p>{"⭐".repeat(Number(movie.userRating) || 3)}</p>
        </div>
      </div>
      <i
        className="fa-solid fa-xmark text-gray-400"
        onClick={() => onDeleteitem(movie.imdbID)}
      ></i>
    </li>
  );
}
