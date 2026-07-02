import Options from "./selectOptions";
export default function Stars({ onSetRating, userRating }) {

  return (
    <select
      className="outline-0 text-sm"
      value={userRating}
      onChange={(e) => onSetRating(Number(e.target.value))}
    >
      <Options value={1}>⭐</Options>
      <Options value={2}>⭐⭐</Options>
      <Options selected value={3}>
        ⭐⭐⭐
      </Options>
      <Options value={4}>⭐⭐⭐⭐</Options>
      <Options value={5}>⭐⭐⭐⭐⭐</Options>
    </select>
  );
}
