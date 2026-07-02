export function StrAverage({ watchedMovie }) {
  return (
    <div className="flex items-center gap-3 my-3 p-4 bg-blue-100 rounded-xl font-medium">
      <p>
        <i className="fa-solid fa-star text-yellow-300"></i>{" "}
        <span className="text-blue-500">Ave : 0.3</span>
      </p>
      <p className="text-gray-400">
        {" "}
        . <span className="font-bold text-lg">{watchedMovie.length} </span>{" "}
        saved
      </p>
    </div>
  );
}
