const content = await Deno.readTextFile("./06/input.txt");

const arr = content.split(",").filter(Boolean).map(Number);

let lanternMap = new Map<number, number>();

for (let i = 0; i < arr.length; i++) {
  if (lanternMap.get(arr[i])) {
    // @ts-ignore
    lanternMap.set(arr[i], lanternMap.get(arr[i]) + 1);
  } else {
    lanternMap.set(arr[i], 1);
  }
}

console.log("Initial state:", lanternMap);

for (let i = 0; i < 256; i++) {
  const tempMap = new Map(lanternMap);
  for (const [key, value] of lanternMap.entries()) {
    const tempValue = tempMap.get(key);
    const tempNewValue = key === 0 ? tempMap.get(6) : tempMap.get(key - 1);
    if (tempValue && tempValue - value === 0) {
      tempMap.delete(key);
    } else {
      tempMap.set(key, tempValue ? tempValue - value : 0);
    }
    if (key === 0) {
      const newVal = value + (tempNewValue || 0);
      tempMap.set(6, newVal);
      tempMap.set(8, value + (tempMap.get(8) || 0));
    } else {
      tempMap.set(key - 1, value + (tempNewValue || 0));
    }
  }

  lanternMap = new Map(tempMap);
}

console.log(
  "Final state:",
  [...lanternMap.values()].reduce((a, b) => a + b)
);
