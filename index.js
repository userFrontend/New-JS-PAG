let index = document.querySelector(".index");
let join = document.querySelector(".tbody");
let btn = document.querySelector(".btn");
// let names = document.querySelector("#name")
// let surname = document.querySelector("#surname")
// let login = document.querySelector("#login")

let button = document.querySelector("button");

let SignIn = () => {
  btn.addEventListener("click", () => {
    let surname = prompt("Familiyangizni kiriting:");
    let name = prompt("Ismingizni kiriting:");
    let work = prompt("Kasbingizni kiriting:");
    let element = document.createElement("tr");
    let start = document.createElement("td");
    let elementOne = document.createElement("td");
    let elementTwo = document.createElement("td");
    let elementEnd = document.createElement("td");
    element.textContent = "";
    start.textContent = ">";
    elementOne.textContent = surname;
    elementTwo.textContent = name;
    elementEnd.textContent = work;
    join.appendChild(element);
    join.appendChild(start);
    let one = join.appendChild(elementOne);
    let two = join.appendChild(elementTwo);
    join.appendChild(elementEnd);
    let utterance = new SpeechSynthesisUtterance("Добавлено" + one.textContent);
    speechSynthesis.speak(utterance);
  });
};
SignIn();
