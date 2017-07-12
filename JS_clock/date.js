/*
*Things to do:
*  add a hover that will display clock numbers
*  fix the glitch whtn the second degree is at 444 degrees to 90 degrees
*  hide clock's hands until the date is ready
*/

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondsDegrees = (seconds * (360/60))+90;
  const minutesDegrees = (minutes * (360/60))+90;
  const hoursDegrees = (hours * (360/12))+90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  secondHand.style.display = "block";
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  minuteHand.style.display = "block"; 
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  hourHand.style.display = "block";


};

setInterval(setDate, 1000);
