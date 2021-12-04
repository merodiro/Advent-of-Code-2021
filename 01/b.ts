const content = await Deno.readTextFile("./01/input.txt");

const arr = content.split("\n").map(Number);

// sliding windows
const sums = arr.reduce((acc: number[], curr, i) => {
  if (i > 1) {
    return [...acc, arr[i - 2] + arr[i - 1] + curr];
  }
  return acc;
}, []);

// is element greater than the previous
const res = sums.filter((el, i) => {
  if (i > 0) {
    if (el > sums[i - 1]) {
      return true;
    }
  }
  return false;
});

console.log(res.length);
