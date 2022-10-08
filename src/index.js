import './style.css';

const daysNode = document.getElementById('days');
const hoursNode = document.getElementById('hours');
const minutesNode = document.getElementById('minutes');
const secondsNode = document.getElementById('seconds');

const randomTime = () => {
  const days = Math.floor(Math.random() * 30);
  const hours = Math.floor(Math.random() * 12);
  const minutes = Math.floor(Math.random() * 60);
  const seconds = Math.floor(Math.random() * 60);

  return { days, hours, minutes, seconds };
};

const main = async () => {
  const { days, hours, minutes, seconds } = randomTime();

  daysNode.textContent = days;
  hoursNode.textContent = hours;
  minutesNode.textContent = minutes;
  secondsNode.textContent = seconds;

  // starts a timer that will run every second and update the UI
  const timer = setInterval(() => {
    if (
      secondsNode.textContent === '0' &&
      minutesNode.textContent === '0' &&
      hoursNode.textContent === '0' &&
      daysNode.textContent === '0'
    ) {
      clearInterval(timer);
      return;
    }

    secondsNode.textContent--;

    if (secondsNode.textContent < 0) {
      secondsNode.textContent = 59;
      minutesNode.textContent--;
    }

    if (minutesNode.textContent < 0) {
      minutesNode.textContent = 59;
      hoursNode.textContent--;
    }

    if (hoursNode.textContent < 0) {
      hoursNode.textContent = 23;
      daysNode.textContent--;
    }
  }, 1000);
};

main();
