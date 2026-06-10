let userName;
let resetTimer; // store the timer reference

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

  clearTimeout(resetTimer); // cancel any existing timer
  resetTimer = setTimeout(
    function () {
      document.getElementById('rockImg').src = 'rock.png';
    },
    3 * 60 * 1000,
  );
}

function resizeRock() {
  document.getElementById('rockImg');
  rockImg.style.height = (document.body.clientHeight - 100) * 0.9 + 'px';
}

resizeRock();
