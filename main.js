const createTemplateName = (userName, template) =>
  (template.innerHTML = `<strong>${userName.first} ${userName.last}</strong>`);

async function setPerson() {
  for (i = 0; i < 3; i++) {
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
}

document.addEventListener("DOMContentLoaded", setPerson);

// task 2 add user to the existing list

// option 1.

// find button
// add listener
// Try reuse existing function

// if not work out:

// find button
// add listener
// fetch url
// extract new user
// place it down at end of a list
