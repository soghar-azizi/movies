import { useRef } from "react";

import { useEffect } from "react";
export default function SearchBar({ query, setQuery }) {
  return (
    <div className="flex justify-center gap-2 bg-white p-3 rounded-2xl shadow items-center">
      <i className="fa-solid fa-magnifying-glass"></i>
      <Search query={query} setQuery={setQuery} />
      <i className="fa-solid fa-x"></i>
    </div>
  );
}
function Search({ query, setQuery }) {
  const inputEl = useRef(null);
  useEffect(() => {
    console.log(inputEl);
    function callBack(e) {
      if (document.activeElement === inputEl.current) return;
      if (e.code === "Enter") {
        inputEl.current.focus();

        // return { err, loading, movie };
        setQuery("");
      }
    }
    document.addEventListener("keydown", callBack);

    return () => document.addEventListener("keydown", callBack);
  }, []);

  return (
    <input
      type="text"
      placeholder="Search for a movie...."
      className="border-0 outline-0 w-[90%]"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
