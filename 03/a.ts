const content = await Deno.readTextFile("./03/input.txt");

const arr = content.split("\n").filter(Boolean);

function mostCommon(arr: Array<string>) {
  const counts = arr.reduce((acc, curr) => {
    if (acc.get(curr)) {
      acc.set(curr, acc.get(curr) + 1);
    } else {
      acc.set(curr, 1);
    }
    return acc;
  }, new Map());
  return counts;
}

let gammaRate = "";
for (let i = 0; i < arr[0].length; i++) {
  const counts = mostCommon(arr.map((x) => x[i]));
  const max = Math.max(...counts.values());
  const maxKey = Array.from(counts.keys()).find(
    (key) => counts.get(key) === max
  );
  gammaRate += maxKey;
}

// invert binary bits
function invert(n: string): string {
  return n
    .split("")
    .map((x) => (x === "0" ? "1" : "0"))
    .join("");
}

const epsilonRate = invert(gammaRate);
console.log(gammaRate, epsilonRate);
console.log(parseInt(gammaRate, 2), parseInt(epsilonRate, 2));
console.log(parseInt(gammaRate, 2) * parseInt(epsilonRate, 2));
