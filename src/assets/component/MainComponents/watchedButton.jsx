export default function WatchedButton({
  handleWathedMovieLIst,
  movie,
  userRating,
  handleSetTitle,
}) {
  return (
    <button
      className="bg-gradient-to-b from-blue-500 to-blue-800 text-white rounded p-1 text-sm"
      onClick={() =>
        handleWathedMovieLIst({
          handleSetTitle: handleSetTitle(movie),
          ...movie,
          userRating: Number(userRating),
          addedAt: Date.now(),
        })
      }
    >
      <i className="fa-solid fa-plus"></i>
      <span>Wishlist</span>
    </button>
  );
}
