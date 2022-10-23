const h2 = document.createElement("h2");
h2.textContent = '"All we have to decide is what to do with the time that is given us"';

document.querySelector("header").appendChild(h2);

const input = document.getElementById('button');

function clickAlert() {
  alert('Thanks for visiting!');
}

input.addEventListener('click', clickAlert);
