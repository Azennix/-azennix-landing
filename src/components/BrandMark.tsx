// Finalized pixel-grid "A" mark — dense filled letterform, 2x2 red accent
// at the crossbar. Generated once from a bold typeface rasterized to a
// 16x16 grid, then hand-fixed for a centered accent. Kept as a static
// bitmap (not an image file) so it scales crisply at any size.
const GRID: number[][] = [
  [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
  [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
  [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
  [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
  [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
  [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
  [0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0],
  [0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0],
  [0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0],
  [0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0],
  [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
  [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
  [0,1,1,1,1,1,1,2,2,1,1,1,1,1,1,0],
  [0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0],
  [1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1],
  [1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1],
];

const SAND = "#D8C3A5";
const BLOOD = "#8B0000";

export default function BrandMark({ className = "" }: { className?: string }) {
  const rows = GRID.length;
  const cols = GRID[0].length;
  return (
    <svg
      viewBox={`0 0 ${cols} ${rows}`}
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {GRID.flatMap((row, r) =>
        row.map((v, c) =>
          v ? (
            <rect
              key={`${r}-${c}`}
              x={c}
              y={r}
              width={1}
              height={1}
              fill={v === 2 ? BLOOD : SAND}
            />
          ) : null
        )
      )}
    </svg>
  );
}
