"use strict";

const container = document.querySelector(".flex-container");

function create (name,price) {
    let img = "<img class='oreo-img' src= 'media/Oreo-Cake.png'>";
    let img2 = "<img class='chocolate-img' src = 'media/representacion-3d-dona-chocolate_250435-1211.png'>";
    let img3 = "<img class='rose-img' src = 'media/giant-donut.png'>"; 
    name = `<h2>${name}</h2>`;
    price = `<p>Precio: ${price}</p>`;
    let button = `<input type="submit" name="data" value="COMPRAR" class="send-button">`
    return [img,img2,img3,name,price,button];
}

let fragment = document.createDocumentFragment();

for(let index = 1; index <=1; index++) {
    let randomPrice = Math.round(Math.random()*100+100);
    let element = create(`Oreo`,randomPrice);
    let element2 = create(`Chcocolate`,randomPrice);
    let element3 = create(`Rosa`,randomPrice);
    let div = document.createElement("DIV");
    let div2 = document.createElement("DIV");
    let div3 = document.createElement("DIV");
    div.addEventListener("click",()=>{
        document.querySelector(".key-data").value = randomPrice
    });
    div2.addEventListener("click",()=>{
        document.querySelector(".key-data").value = randomPrice
    });
    div3.addEventListener("click",()=>{
        document.querySelector(".key-data").value = randomPrice
    });
    div.tabIndex = "1";
    div.classList.add(`item`,`flex-item`);
    div.innerHTML += element[0] + element[3] + element[4] + element[5];
    div2.tabIndex = "2";
    div2.classList.add(`item`,`flex-item`);
    div2.innerHTML += element2[1] + element2[3] + element2[4] + element2[5];
    div3.tabIndex = "3";
    div3.classList.add(`item`,`flex-item`);
    div3.innerHTML += element3[2] + element3[3] + element3[4] + element3[5];
    fragment.appendChild(div);
    fragment.appendChild(div2);
    fragment.appendChild(div3);
}

container.appendChild(fragment);