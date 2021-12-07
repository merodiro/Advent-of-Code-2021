const content = await Deno.readTextFile("./06/input.txt");

const arr = content.split(",").filter(Boolean).map(Number);

console.log("Initial state:", arr.join(","));

for (let i = 0; i < 80; i++) {
  for (let j = 0, len = arr.length; j < len; j++) {
    if (arr[j] === 0) {
      arr[j] = 6;
      arr.push(8);
    } else {
      arr[j]--;
    }
  }

  // console.log(`After ${i + 1} days`, arr.join(","));
}

console.log("Final state:", arr.length);
