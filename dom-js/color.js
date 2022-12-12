let ul = document.getElementsByTagName("ul");
console.log(ul);
let li = document.getElementsByTagName("li");
console.log(li);
// 1.
let firstlist = document.getElementById("aimag-101");
console.log(firstlist);
// 2.
let lastlist = document.getElementById("aimag-522");
console.log(lastlist);
// 3.
let sukhbaatar = document.getElementById("aimag-315");
console.log(sukhbaatar);
// 4.

for ( i = 0; i < li.length; i++ ) {
    if ( i % 2 == 0 ) {
        li[i].style.color = "orange";
        li[i].style.backgroundColor = "red";
        li[i].style.fontSize = "24px";
        li[i].style.padding = "15px";
        li[i].style.listStyle = "none";
        li[i].style.border = "dotted";
        li[i].style.margin = "50px";
    }
    else{
        li[i].style.color = "blue";
        li[i].style.backgroundColor = "black";
        li[i].style.fontSize = "24px";
        li[i].style.padding = "15px";
        li[i].style.listStyle = "none";
        li[i].style.border = "dotted";
        li[i].style.margin = "50px";
    }
}
console.log(i[2]);
