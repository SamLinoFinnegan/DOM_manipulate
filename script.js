
let spotedAnimalsList = document.getElementById("spotted-animals-list");
let spotedAnimalsListItem = document.querySelector(".spotted-animals-list-item");
let bigFiveList = document.querySelector(".big-five-list");
let bigFiveItem = document.querySelector(".big-five-list-item");



let btnLion = document.querySelectorAll(".big-five-button")[0];
let btnLeopard = document.querySelectorAll(".big-five-button")[1];
let btnElephant = document.querySelectorAll(".big-five-button")[2];
let btnRhino = document.querySelectorAll(".big-five-button")[3];
let btnBuffalo = document.querySelectorAll(".big-five-button")[4];

let removeFirstBtn = document.getElementById("remove-first-item-button");
let removeAllBtn = document.getElementById("remove-all-button");


const addLion = () => {
   let newLi = document.createElement("li")
   spotedAnimalsList.appendChild(newLi)
   newLi.innerHTML = btnLion.innerHTML
};
const addLeopard = () => {
   let newLi = document.createElement("li")
   spotedAnimalsList.appendChild(newLi)
   newLi.innerHTML = btnLeopard.innerHTML
};

const addElephant = () => {
   let newLi = document.createElement("li")
   spotedAnimalsList.appendChild(newLi)
   newLi.innerHTML = btnElephant.innerHTML
};

const addRhino = () => {
   let newLi = document.createElement("li")
   spotedAnimalsList.appendChild(newLi)
   newLi.innerHTML = btnRhino.innerHTML
};
const addBuffalo = () => {
   let newLi = document.createElement("li")
   spotedAnimalsList.appendChild(newLi)
   newLi.innerHTML = btnBuffalo.innerHTML
};




const removeFirst = () => {
   let child = spotedAnimalsList.getElementsByTagName("li")[0];
   spotedAnimalsList.removeChild(child)
};



const removeAll = () => {
   let i = 0
   for (i = 0; i < spotedAnimalsList.innerHTML.length; i++) {
      let child = spotedAnimalsList.getElementsByTagName("li")[0];
      spotedAnimalsList.removeChild(child)
   }
};

// it works but keeps giving and error msg


btnLion.addEventListener("click", addLion);
btnLeopard.addEventListener("click", addLeopard);
btnElephant.addEventListener("click", addElephant);
btnRhino.addEventListener("click", addRhino);
btnBuffalo.addEventListener("click", addBuffalo);

removeFirstBtn.addEventListener("click", removeFirst);
removeAllBtn.addEventListener("click", removeAll);

