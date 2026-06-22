const house = document.getElementById("houseState");

const states = [
  "./assets/house/Subtract(1).svg",
  "./assets/house/Subtract-1.svg",
  "./assets/house/Subtract-2.svg",
  "./assets/house/Subtract-3.svg",
  "./assets/house/Subtract-4.svg",
  "./assets/house/Subtract-5.svg",
];

let current = 0;

setInterval(() => {
  current++;

  if (current >= states.length) {
    current = 0;
  }

  house.style.opacity = 0;

  setTimeout(() => {
    house.src = states[current];

    house.style.opacity = 1;
  }, 250);
}, 2500);
