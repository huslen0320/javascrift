let toDo = document.getElementsByClassName("myDiv");

let input =document.getElementById("myInput");

let list = document.getElementsByClassName("list");


for (let i = 0; i < toDo.length; i++) {
    let title = document.createElement("h1");
    title.innerHTML = toDo[i].innerHTML;
    title.appendChild(toDo);
}