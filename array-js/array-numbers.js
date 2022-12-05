// 1.
let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
// 2.
let i = 0;
let sum = 0;
while (i < arrayOfNumbers.length) {
sum+=arrayOfNumbers[i]
i++;
}
console.log(sum);
// 3.
let max = 0;
let a = 0;
while (a < arrayOfNumbers.length) {
    if(max < arrayOfNumbers[a]) {   
        max = arrayOfNumbers[a];
    }
    a++;
}
console.log(max);
// 4.
let min = 0;
let b = 0;
while (b > arrayOfNumbers.length) {
    if(min > arrayOfNumbers[b]) {
        min = arrayOfNumbers[b];
        // console.log(min);
    }
    b++;
}
console.log(min);