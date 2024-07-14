// BIG O
//liner time complexity
function linerExample(n) {
  for (let i = 0; i < n; i++) {
    console.log(n);
  }
}
linerExample(5);

// O(n^2)
// n grows larger than runtime grows larger
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
console.log(printAllPairs(4));
