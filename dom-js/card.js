let body = document.getElementsByClassName("container");

let stringMain = document.getElementById("stringMain");

function createElement() {
  for (let i = 0; i < 1; i++) {
    let newCard = document.createElement("div");
    newCard.className = "card";
    newCard.style = "width: 250px";

    let newImg = document.createElement("img");
    newImg.className = "card-img-top";
    newImg.src =
      "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/14/yvA5SpUH-IMG-Worlds-1200x800.jpg";

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let cartTitle = document.createElement("h4");
    cartTitle.className = "card-title";
    cartTitle.textContent = "Card title";

    let cartText = document.createElement("p");
    cartText.className = "card-text";
    cartText.textContent =
      "Some quick example text to build on the card title and make up the bulk of";

    cardBody.appendChild(cartTitle);
    cardBody.appendChild(cartText);

    // newCard.appendChild(cardBody);
    newCard.appendChild(newImg).style = "width: 100%";
    newCard.appendChild(cardBody);

    body[0].appendChild(newCard);
  }
}

createElement();

function createString() {
  let cards = "";
  for (let i = 0; i < 1; i++) {
    let card = `<div class="card" style="width:250px">
    <img class="card-img-top" style="width: 100%" src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/14/yvA5SpUH-IMG-Worlds-1200x800.jpg"/>
    <div class="card-body">
    <h5 class="card-title">${i}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content</p>
    </div>
    </div>`;

    cards += card;
  }

  console.log(cards);

  stringMain.innerHTML = cards;
}

createString();