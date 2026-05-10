let count = 0;

setInterval(() => {
  count += Math.floor(Math.random() * 5);
  document.getElementById('users').innerText = count;
}, 1500);
