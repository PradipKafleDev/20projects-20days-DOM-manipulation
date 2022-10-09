const secondsHand = document.getElementById("seconds-hand");
const minutesHand = document.getElementById("minutes-hand");
const hoursHand = document.getElementById("hours-hand");

function getTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const timeInterval = 6;

  //rotating degree dynamically
  const rotateSeconds = seconds * timeInterval;
  console.log("seconds" + rotateSeconds);
  const rotateMinutes = minutes * timeInterval + seconds / 10;
  console.log("minutes" + rotateMinutes);
  console.log("now: " + now);

  const rotateHours = hours * 30 + minutes / 2;
  console.log("Hours" + rotateHours);

  secondsHand.style.transform = `rotate(${rotateSeconds}deg)`;

  minutesHand.style.transform = `rotate(${rotateMinutes}deg)`;

  hoursHand.style.transform = `rotate(${rotateHours}deg)`;
}

setInterval(getTime, 100);
