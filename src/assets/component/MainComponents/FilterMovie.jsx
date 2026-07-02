import Options from "./selectOptions";
export default function FilterMovies({ onFilter }) {
  return (
    <select
      className="p-2 bg-blue-50 border-gray-400 rounded-md outline-0"
      name=""
      id=""
      onChange={(e) => onFilter(e.target.value)}
    >
      <Options value="rating">Rating</Options>
      <Options value="Title A-Z">Title A-Z</Options>
      <Options value="Title Z-A">Title Z-A</Options>
      <Options value="Date">Date</Options>
      <Options value="year">Year</Options>
    </select>
  );
}
