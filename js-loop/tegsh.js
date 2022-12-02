let count = 1;
let result ="";
while (count<= 100) {
    if (count % 2 == 0) {
        result += count + " ";
    }
    count++;
}
console.log(result);