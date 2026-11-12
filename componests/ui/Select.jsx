export default function Select({
  options,
  ...props
}) {
  return (
    <select
      {...props}
      className="
        rounded-xl
        border
        border-gray-300
        px-4
        py-3
        outline-none
      "
    >
      {options.map((option) => (
        <option
          key={option}
          value={option}
        >
          {option}
        </option>
      ))}
    </select>
  );
}