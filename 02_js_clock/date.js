const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
document.getElementsByClassName("clock").onmouseover = function() {mouseOver()};
document.getElementsByClassName("clock").onmouseout = function() {mouseOut()};


function setDate(){
  const now = new Date();
  var seconds = now.getSeconds();
  var minutes = now.getMinutes();
  var hours = now.getHours();
  var secondsDegrees = (seconds * (360/60))+90;
  var minutesDegrees = (minutes * (360/60))+90;
  var hoursDegrees = (hours * (360/12))+90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`


};

setInterval(setDate, 1000)
