import assert from "assert";

function multTwo(x: number, y: number): number {
  // your code here
  return x * y;
}

console.log("Example:");
console.log(multTwo(3, 2));

// These "asserts" are used for self-checking
assert.equal(multTwo(3, 2), 6);
assert.equal(multTwo(0, 1), 0);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
