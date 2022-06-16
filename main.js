const createTemplateName = (userName, template) => template.innerHTML = `<strong>${userName.first} ${userName.last}</strong>`;

function getPersonName(name) {
  const fragment = document.createDocumentFragment();
  const div = document.createElement('div');
  div.classList.add('person');
  fragment.append(createTemplateName(name, div));
  return fragment;
}

function setPersonName () {
  const main = document.querySelector('main');
  for (let i = 0; i <= 3; i++) {
    main.appendChild(getPersonName())
  }
}

async function fetchData() {
  await fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then(person => console.log(person.results[0].name))
      .then((person) => setPersonName(getPersonName(person.results[0].name)));
  }

document.addEventListener("DOMContentLoaded", fetchData);
