const gameContainer = document.querySelector('#game-container');
const jett = document.querySelector('#jett');
const distance = 100;
// let jettHeight = 200;
const screenHeight = 1000;

const ascend = () => {
  let jettHeight = parseInt(window.getComputedStyle(jett).getPropertyValue('top'));
  jettHeight -= distance;
  jett.style.top = `${jettHeight}px`;
};

setInterval(() => {
  const jettTop = parseInt(window.getComputedStyle(jett).getPropertyValue('top'));
  console.log('jettTop: ', jettTop + 3);
  jett.style.top = `${jettTop + 3}px`;
}, 10)

const handleClick = () => {
  ascend();
  // descend();
};

gameContainer.addEventListener('click', handleClick);
