let myCon = document.getElementsByClassName("container");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let gender = document.getElementById("gender");
let results = document.getElementById("results");
let btn = document.getElementById("btn");

btn.addEventListener("click", myFunc);

console.log(gender[1].text);
function myFunc() {
    function mygenderFunc(){
        for(let i=0; i<gender.length; i++){
            if(gender[i].text = "Male"){
                let gen;
                gen.innerHTML = "Male";
            }else if(gender[i].text = "Female"){
                let gen;
            }
        }
        gender.addEventListener("selected", mygenderFunc);
    }
    document.querySelector("#list").innerHTML += `
    <div class="list">
    <p>${firstName.value} ${lastName.value} ${mygenderFunc()}</p>
    </div>`
};