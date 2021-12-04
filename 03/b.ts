const content = await Deno.readTextFile("./03/input.txt");

const arr = content.split("\n").filter(Boolean);

function getCounts(arr: Array<string>) {
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

function getMostCommonBit(n: Array<string>, preferredBit: "0" | "1") {
  const counts = getCounts(n);
  if (counts.get("0") > counts.get("1")) {
    return "0";
  } else if (counts.get("0") < counts.get("1")) {
    return "1";
  } else {
    return preferredBit;
  }
}

function getLeastCommonBit(n: Array<string>, preferredBit: "0" | "1") {
  const counts = getCounts(n);
  if (counts.get("0") < counts.get("1")) {
    return "0";
  } else if (counts.get("0") > counts.get("1")) {
    return "1";
  } else {
    return preferredBit;
  }
}

let o2Rate = "";

let arrO2 = [...arr];

for (let i = 0; i < arrO2[0].length; i++) {
  if (arrO2.length === 1) {
    o2Rate += arrO2[0];
    break;
  }
  const bit = getMostCommonBit(
    arrO2.map((x) => x[i]),
    "1"
  );
  o2Rate += bit;

  arrO2 = arrO2.filter((x) => x[i] === bit);
}

let co2Rate = "";
let arrCo2 = [...arr];
for (let i = 0; i < arrCo2[0].length; i++) {
  if (arrCo2.length === 1) {
    co2Rate = arrCo2[0];
    break;
  }
  const bit = getLeastCommonBit(
    arrCo2.map((x) => x[i]),
    "0"
  );

  co2Rate += bit;
  arrCo2 = arrCo2.filter((x) => x[i] === bit);
}

console.log(o2Rate, co2Rate);
console.log(parseInt(o2Rate, 2), parseInt(co2Rate, 2));
console.log(parseInt(o2Rate, 2) * parseInt(co2Rate, 2));
