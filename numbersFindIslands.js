let matrix = [
    ["1", "1", "0", "1"],
    ["1", "1", "0", "1"],
    ["1", "1", "0", "0"]
];
function findIslands(grid) {
  let counter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        paint(i, j);
        counter++;
      }
    }
  }

  function paint(r, c) {
    grid[r][c] = "3";

    if (grid[r - 1]?.[c] === "1") paint(r - 1, c);
    if (grid[r][c + 1] === "1") paint(r, c + 1);
    if (grid[r + 1]?.[c] === "1") paint(r + 1, c);
    if (grid[r][c - 1] === "1") paint(r, c - 1);
  }

  return counter;
}
// const findIslands = (arrMatrix) => {
//   let colLength = arrMatrix[0].length;
//   let rowLength = arrMatrix.length;
//   let counter = 0;
//   if (arrMatrix.length === 0) return 0;
//
//   const markCharacter = (arrMatrix, R, C) => {
//     arrMatrix[R][C] = "6";
//
//     if (arrMatrix[R][C - 1] === "1") {
//       markCharacter(arrMatrix, R, C - 1);
//     }
//     if (arrMatrix[R][C + 1] === "1") {
//       markCharacter(arrMatrix, R, C + 1);
//     }
//     if (arrMatrix?.[R - 1]?.[C] === "1") {
//       markCharacter(arrMatrix, R - 1, C);
//     }
//     if (arrMatrix?.[R + 1]?.[C] === "1") {
//       markCharacter(arrMatrix, R + 1, C);
//     }
//   };
//
//   for (let R = 0; R < rowLength; R++) {
//     for (let C = 0; C < colLength; C++) {
//       if (arrMatrix[R][C] === "1") {
//         counter++;
//         markCharacter(arrMatrix, R, C);
//       }
//     }
//   }
//   console.log(arrMatrix);
//
//   return counter;
// };
console.log(findIslands(matrix));
