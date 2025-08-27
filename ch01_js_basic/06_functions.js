

console.log(sum(10,20));
console.log(sum('안녕','하세요'));

let result = sum(10,20);
console.log(result);
let result2 = sum(result,30);
console.log(result2);

function sum(x,y) {
  let sum = x + y;
  return sum;
}

function sum(x, y) {
  let sum = x - y;
  return sum;
}
