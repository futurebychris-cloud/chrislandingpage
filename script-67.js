// ----- TIME GREETING -----
function updateGreeting() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const timeString = `The current time is ${hours}:${minutes} ${ampm}.`;
  document.getElementById('greeting').textContent = timeString;
}

// ----- RANDOM MOTIVATIONAL QUOTE -----
const quotes = [
  "Stay hard! – David Goggins",
  "You’re never too old to set another goal. – LeBron James",
  "Suffering is a part of success. – David Goggins",
  "Dream big, work hard, stay focused. – LeBron James",
  "Embrace the discomfort; it will make you stronger. – David Goggins",
  "Don’t be afraid to fail. – LeBron James",
  "Callous your mind. – David Goggins",
  "Hard work beats talent when talent doesn’t work hard. – LeBron James"
];

function updateQuoteRandomly() {
  const index = Math.floor(Math.random() * quotes.length);
  document.getElementById('daily-quote').textContent = quotes[index];
}

// ----- INITIALIZE -----
function init() {
  updateGreeting();
  updateQuoteRandomly();             // Use random quote now
  setInterval(updateGreeting, 60000); // update time every minute
}

window.addEventListener('DOMContentLoaded', init);
