const content = await Deno.readTextFile("./02/input.txt");

const arr = content
  .split("\n")
  .filter(Boolean)
  .map((item) => {
    const [direction, distance] = item.split(" ");

    return { direction, distance: Number(distance) };
  });

const res = arr.reduce(
  (acc, item) => {
    switch (item.direction) {
      case "forward":
        return {
          ...acc,
          horizontal: acc.horizontal + item.distance,
        };
      case "down":
        return {
          ...acc,
          depth: acc.depth + item.distance,
        };
      case "up":
        return {
          ...acc,
          depth: acc.depth - item.distance,
        };
    }

    return acc;
  },
  { horizontal: 0, depth: 0 }
);

console.log(res.horizontal * res.depth);
