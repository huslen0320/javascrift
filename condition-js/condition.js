// 1.
let i = 4 > 3; //true
let ii = 4 >= 3; //true
let iii = 4 < 3; //false
let iv = 4 <= 3;//false
let v = 4 == 4;//true
let vi = 4 === 4;//true
let vii = 4 != 4;//false
let iix = 4 !== 4;//false
let ix = 4 != "4";//false
let x = 4 == "4"; //true
let xi = 4 === "4";//false
console.log(i,ii,iii,iv,v,vi,vii,vii,iix,ix,x,xi);

// 2.
let one = 4 > 3 && 10 < 12;//true
let two = 4 > 3 && 10 > 12;//false
let three = 4 > 3 || 10 < 12;//true
let four = 4 > 3 || 10 > 12;//true
let five = !(4 > 3);//false
let six = !(4 < 3);//true
let eight = !(4 > 3 && 10 < 12);//false
let nine = !(4 > 3 && 10 > 12);//true
let ten = !(4 === "4");//true
console.log(one,two,three,four,five,six,eight,nine,ten);

// 3.
let yourAge =prompt ('Насаа оруулна уу:');
let myAge = 20;
let greeting;
if (yourAge == myAge) {
    greeting = "Same age as mine"
    console.log('Same age as mine');
}
else if (yourAge > myAge) {
    greeting = "You older than me"
    console.log ('You older than me')
}
else if (yourAge < myAge) {
    greeting = "You youngest than me"
    console.log('You youngest than me');
}
else {
    greeting = type
}

// 4.
let day = prompt("Өдрөө оруулна уу:");
switch (day) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
        console.log('Ажлын өдөр');
        break;
    case "6":
    case "7":
    default:
        console.log('Амралтын өдөр');
}
// 5.
let time = prompt("Ажилсан цагаа оруулна уу:")