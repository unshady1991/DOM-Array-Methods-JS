const createTemplateName = (userName, template) =>
  (template.innerHTML = `<strong>${userName.first} ${userName.last}</strong>`);

async function setPerson() {
  await fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((person) => {
      const name = person.results[0].name;
      const div = document.createElement("div");
      div.classList.add("person");
      const fragment = document.createDocumentFragment();
      const main = document.querySelector("main");
      div.innerHTML = createTemplateName(name, div);
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

const button = document.querySelector("#add-user");

const addUserHandler = () => {
  setPerson();
};

button.addEventListener("click", addUserHandler);

// task 3 develop wealth functionality

// 1. create function which returns random number

// 2. create function which is a tamplate where the value of random wealth function will be placed

// 3. bind all the described functionality into one and run along with setPerson func
