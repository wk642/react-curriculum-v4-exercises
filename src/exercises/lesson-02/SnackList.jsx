// - Default export a component that **contains** an array of snack objects (each with `name` and `rank`, where `1` = favorite).

export default function SnackList() {
  // - Start with the array ordered from **least favorite to most favorite**.
  const snacks = [
    { name: 'Jello', rank: 5 },
    { name: 'Moose', rank: 4 },
    { name: 'Cheesecake', rank: 3 },
    { name: 'Strawberry Cheesecake Iceream', rank: 2 },
    { name: 'Skittls', rank: 1 },
  ];

  // - Use JavaScript’s `.toSorted()` to return a new array ordered from **most favorite (rank 1) to least favorite**.
  const sortSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  // - Render the sorted snacks as a list (ordered list or using `.map()`).
  // - Include at least **3–5** snacks.
  return (
    <>
      <ol>
        {sortSnacks.map((snacks) => (
          <li key={snacks.name}>
            {snacks.name} (rank {snacks.rank})
          </li>
        ))}
      </ol>
    </>
  );
}
