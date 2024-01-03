const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setClock () {
  const getDate = new Date();

  const seconds = getDate.getSeconds();
  const secondDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minutes = getDate.getMinutes();
  const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  minHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hours = getDate.getHours();
  const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setClock,1000)

setClock()
