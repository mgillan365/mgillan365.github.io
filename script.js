const rockImg = document.querySelector('#rockImg');
const defaultRock = 'rock.png';
const happyRock = 'rock_happy.png';
const rockResetDelay = 3 * 60 * 1000;

let userName = '';
let resetTimerId;

const greetUser = () => {
  alert('Hello, I am your pet rock.');
};

const resetRock = () => {
  rockImg.src = defaultRock;
};

const touchRock = () => {
  if (userName) {
    alert(`I like the attention, ${userName}. Thank you.`);
  } else {
    userName = prompt('What is your name?', 'Enter your name here.');

    if (userName) {
      alert(`It is good to meet you, ${userName}.`);
    }
  }

  rockImg.src = happyRock;

  clearTimeout(resetTimerId);
  resetTimerId = setTimeout(resetRock, rockResetDelay);
};

rockImg.addEventListener('click', touchRock);
window.addEventListener('load', greetUser);
