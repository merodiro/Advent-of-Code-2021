const content = await Deno.readTextFile("./04/input.txt");

const numbers = content.split("\n")[0].split(",").map(Number);

const boards = content
  .split("\n")
  .slice(1)
  .join("\n")
  .trim()
  .split("\n\n")
  .map((board) =>
    board.split("\n").map((row) => row.trim().split(/\s+/).map(Number))
  );

function checkWin(board: number[][]): boolean {
  const checkRow = (row: number) => board[row].every((cell) => cell === -1);
  const checkCol = (col: number) => board.every((row) => row[col] === -1);

  for (let i = 0; i < board[0].length; i++) {
    if (checkCol(i)) return true;
    if (checkRow(i)) return true;
  }

  return false;
}

function calculateValue(board: number[][], n: number): number {
  const sum = board.reduce((acc, row) => {
    return (
      acc +
      row.filter((cell) => cell !== -1).reduce((acc, cell) => acc + cell, 0)
    );
  }, 0);

  return sum * n;
}

function game() {
  for (const n of numbers) {
    for (const board of boards) {
      for (const row of board) {
        for (const cell of row) {
          if (cell === n) {
            row[row.indexOf(cell)] = -1;
          }
        }
      }
      if (checkWin(board)) {
        return calculateValue(board, n);
      }
    }
  }
}

console.log(game());
