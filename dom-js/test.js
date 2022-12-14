let menus =[
    {id:1, name: "home", href:""},
    {id:2, name: "contact", href:"/"},
    {id:3, name: "about", href:"/"},
]
let ulEl = document.createElement("ul");
let mainEl = document.getElementById("main");
for (let i = 0; i < menus.length; i++) {
    let liEl = document.createElement("li");
    let aEl = document.createElement("a");
    aEl.innerHTML = menus[i].name;
    aEl. href = menus[i].href;
    liEl.appendChild(aEl);
    ulEl.appendChild(liEl);
    // console.log(ulEl);
    // console.log(mainEl);
    // console.log(liEl);
    // console.log(aEl);
}
mainEl.appendChild(ulEl);
console.log(menus);
