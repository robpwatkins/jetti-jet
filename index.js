const gameContainer = document.querySelector('#game-container');
const jett = document.querySelector('#jett');
const spaceAndHead = document.querySelector('#space-and-head');
const distance = 5;
// let jettHeight = 200;
const screenHeight = 1000;
let jumping = false;

const jump = () => {
  jumping = true;
  let jumpCount = 0;
  const jumpInterval = setInterval(() => {
    let jettHeight = parseInt(window.getComputedStyle(jett).getPropertyValue('top'));
    if ((jettHeight > 6) && (jumpCount < 15)) jett.style.top = `${jettHeight - 4.5}px`;
    if (jumpCount > 20) {
      clearInterval(jumpInterval);
      jumping = false;
      jumpCount = 0;
    }
    jumpCount++;
  }, 10);
};

setInterval(() => {
  const jettTop = parseInt(window.getComputedStyle(jett).getPropertyValue('top'));
  if (!jumping) jett.style.top = `${jettTop + 2.5}px`;
}, 10)

const handleClick = () => {
  jump();
};

spaceAndHead.addEventListener('animationiteration', () => {
  const random = -((Math.random() * 300) + 150);
  spaceAndHead.style.top = `${random}px`;
})

gameContainer.addEventListener('click', handleClick);
