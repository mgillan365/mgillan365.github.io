var userName;

function greetUser() {
  alert('Hello, I am your pet rock.');
}

function touchRock() {
  if (userName) {
    alert('I like the attention, ' + userName + '. Thank you.');
  } else {
    userName = prompt('What is your name?', 'Enter your name here.');
    if (userName) alert('It is good to meet you, ' + userName + '.');
  }
  document.getElementById('rockImg').src = 'rock_happy.png';
  setTimeout(function () {
    document.getElementById('rockImg').src = 'rock.png';
  }, 5 * 60 * 1000);
}
