const filters = ['all', 'completed', 'pending'];

export default function TaskFilter({ currentFilter, onFilterChange }) {
  return (
    <div>
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onFilterChange(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}

      <p>Current filter: {currentFilter}</p>
    </div>
  );
}
