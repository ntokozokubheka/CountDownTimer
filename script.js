const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('seconds');

const newYears = "1 Jan 2026";

function countDown() {
  const currentDate = new Date();
  const newYearsDate = new Date(newYears);
  const seconds = (newYearsDate - currentDate) / 1000;

  if (seconds < 0) {
    daysEl.innerHTML = '00';
    hoursEl.innerHTML = '00';
    minsEl.innerHTML = '00';
    secsEl.innerHTML = '00';
    return;
  }

  const days = Math.floor(seconds / 3600 / 24);
  const hours = Math.floor(seconds / 3600) % 24;
  const minutes = Math.floor(seconds / 60) % 60;
  const secs = Math.floor(seconds) % 60;

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secsEl.innerHTML = formatTime(secs);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countDown();
setInterval(countDown, 1000);
