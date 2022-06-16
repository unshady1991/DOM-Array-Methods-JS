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
};

const fillListHandler = () => {
  for (let i = 0; i < 3; i++) {
    setPerson();
  }
 }

document.addEventListener("DOMContentLoaded", fillListHandler);

// task 2 add user to the existing list

// option 1.

// find button
const button = document.querySelector("#add-user");
// add listener
const addUserHandler = () => {
  setPerson();
};
button.addEventListener("click", addUserHandler);
// Try reuse existing function

// if not work out:

// find button
// add listener
// fetch url
// extract new user
// place it down at end of a list
