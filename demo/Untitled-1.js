// BIG O
//liner time complexity
function linerExample(n) {
  for (let i = 0; i < n; i++) {
    console.log(n);
  }
}

linerExample(5);
//time taken increases lineraly with the size

function addUpTo(n) {
  console.time("addupto");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.timeEnd("addupto");
}
console.log(addUpTo(7));

// O(n^2)
// n grows larger than runtime grows larger
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
console.log(printAllPairs(2));

console.log("ranjan");
