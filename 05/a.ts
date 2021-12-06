const content = await Deno.readTextFile("./05/input.txt");

const arr = content.split("\n").filter(Boolean);

const points = arr.map((line) => {
  const [from, to] = line.split(" -> ").map((s) => s.split(",").map(Number));
  return { from, to };
});

const grid: (number | ".")[][] = [];

const maxX = Math.max(...points.map((p) => Math.max(p.from[0], p.to[0])));
const maxY = Math.max(...points.map((p) => Math.max(p.from[1], p.to[1])));

// fill grid with dots
for (let y = 0; y <= maxY; y++) {
  grid[y] = [];
  for (let x = 0; x <= maxX; x++) {
    grid[y][x] = ".";
  }
}

function writeRow(from: number, to: number, row: number) {
  for (let x = Math.min(from, to); x <= Math.max(from, to); x++) {
    // @ts-ignore
    grid[row][x] = grid[row][x] === "." ? 1 : grid[row][x] + 1;
  }
}

function writeCol(from: number, to: number, col: number) {
  for (let y = Math.min(from, to); y <= Math.max(from, to); y++) {
    // @ts-ignore
    grid[y][col] = grid[y][col] === "." ? 1 : grid[y][col] + 1;
  }
}

function getSum() {
  return grid.flat().filter((p) => p > 1).length;
}

for (const point of points) {
  if (point.from[0] === point.to[0]) {
    writeCol(point.from[1], point.to[1], point.from[0]);
  } else if (point.from[1] === point.to[1]) {
    writeRow(point.from[0], point.to[0], point.from[1]);
  }
}

console.log(grid.map((row) => row.join("")).join("\n"));

console.log(getSum());
