const rockImg = document.querySelector('#rockImg');
const defaultRock = 'rock.png';
const happyRock = 'rock_happy.png';
const rockResetDelay = 3 * 60 * 1000;
const rockTopOffset = 100;

let userName = '';
let resetTimerId;

const greetUser = () => {
  alert('Hello, I am your pet rock.');
};

const resizeRock = () => {
  const availableHeight = window.innerHeight - rockTopOffset;
  rockImg.style.height = `${availableHeight * 0.9}px`;
};

const resetRock = () => {
  rockImg.src = defaultRock;
  resizeRock();
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
  resizeRock();

  clearTimeout(resetTimerId);
  resetTimerId = setTimeout(resetRock, rockResetDelay);
};

rockImg.addEventListener('click', touchRock);
rockImg.addEventListener('load', resizeRock);
window.addEventListener('load', greetUser);
window.addEventListener('load', resizeRock);
window.addEventListener('resize', resizeRock);
