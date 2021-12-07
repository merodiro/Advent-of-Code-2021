const content = await Deno.readTextFile("./07/input.txt");

const arr = content.split("\n")[0].split(",").map(Number);

let minEnergy = Infinity;

for (let i = 1; i < Math.max(...arr); i++) {
  const energy = arr.map((x) => Math.abs(x - i)).reduce((a, b) => a + b);

  if (energy < minEnergy) {
    minEnergy = energy;
  }
}

console.log(minEnergy);
