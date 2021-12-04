const content = await Deno.readTextFile("./01/input.txt");

const arr = content.split("\n").map(Number);

// is element greater than the previous
const res = arr.filter((el, i) => {
  if (i > 0) {
    if (el > arr[i - 1]) {
      return true;
    }
  }
  return false;
});

console.log(res.length);
