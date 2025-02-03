import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// Set the countdown date
const countdownDate = new Date("Dec 31, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const countdownTimer = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = countdownDate - now;

  // Time calculations
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the result
  // document.getElementById("days").innerText = days;
  // document.getElementById("hours").innerText = hours;
  // document.getElementById("minutes").innerText = minutes;
  // document.getElementById("seconds").innerText = seconds;

  // If countdown is finished
  if (timeLeft < 0) {
    clearInterval(countdownTimer);
    document.querySelector(".countdown").innerHTML = "<h2>We're Open!</h2>";
  }
}, 1000);
