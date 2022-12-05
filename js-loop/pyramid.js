// let i = 0;
// let sum = 0;
// while (i < 5) {
//   console.log("i", i);
//   sum += i;
//   console.log("sum1", sum);
//   i++;
// }
// console.log("sum", sum);

let star = "";
let result = ' ';
for (let x = 0; x <= 5; x++) {
  for (let y = 0; y <= x; y++) {
    star += "*";
  }
  star += "\n";
}
console.log(star.length);
console.log(star , result);


