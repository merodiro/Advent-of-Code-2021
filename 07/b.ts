const content = await Deno.readTextFile("./07/input.txt");

const arr = content.split("\n")[0].split(",").map(Number);

function calculateEnergy(from: number, to: number) {
  const abs = Math.abs(from - to);
  return (abs * (abs + 1)) / 2;
}

let minEnergy = Infinity;

for (let i = 1; i < Math.max(...arr); i++) {
  const energy = arr.map((x) => calculateEnergy(x, i)).reduce((a, b) => a + b);

  if (energy < minEnergy) {
    minEnergy = energy;
  }
}

console.log(minEnergy);
