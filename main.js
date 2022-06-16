const createTemplateName = (userName, template, value) =>
  (template.innerHTML = `<strong>${userName.first} ${userName.last}</strong> &dollar;${value}.00`);

async function setPerson() {
  await fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((person) => {
      const name = person.results[0].name;
      const div = document.createElement("div");
      div.classList.add("person");
      const fragment = document.createDocumentFragment();
      const main = document.querySelector("main");
      div.innerHTML = createTemplateName(name, div, generateRandomIntegerInRange(MIN_WEALTH_RATE, MAX_WEALTH_RATE));
      fragment.append(div.cloneNode(true));
      main.appendChild(fragment);
    });
}

const fillListHandler = () => {
  for (let i = 0; i < 3; i++) {
    setPerson();
  }
};

document.addEventListener("DOMContentLoaded", fillListHandler);

// task 2 add user to the existing list

const addUserButton = document.querySelector("#add-user");

const addUserHandler = () => {
  setPerson();
};

addUserButton.addEventListener("click", addUserHandler);

// generates rundom number
let MIN_WEALTH_RATE = 1;
let MAX_WEALTH_RATE = 1000000;

const generateRandomIntegerInRange = (min, max) => {
  const res = (Math.floor(Math.random() * (max - min + 1000000)) + min).toFixed(2);
  Number(res);
  const toString = Number(res).toLocaleString('en-US');
  return toString;
};
