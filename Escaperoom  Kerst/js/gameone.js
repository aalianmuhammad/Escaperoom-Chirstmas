alert("Jouw taak is om de juiste schakelaar te vinden.");

const width = 200,
    height = 200;

const log = console.log.bind(console);

const containerEl = document.querySelector('.container'),
    imgEl = containerEl.querySelector('.img');

function handleMove(event) {

    let eventToUse = event;

    if (event.type === 'touchstart' || event.type === 'touchmove') {
        eventToUse = event.changedTouches[0];
        event.preventDefault(); // prevent Y-scrolling when swiping up/down
    }

    let bcr = containerEl.getBoundingClientRect();
    let { clientX, clientY } = eventToUse;
    imgEl.style.left = `${clientX - bcr.left - width / 2}px`;
    imgEl.style.top = `${clientY - bcr.top - height / 2}px`;
}

containerEl.addEventListener('mousemove', handleMove);
containerEl.addEventListener("touchmove", handleMove, true);

const btns = document.querySelectorAll('.btn');
const audio = document.querySelector('.audio');

const winWidth = window.innerWidth;
const winHeight = window.innerHeight;

function getRandomNumber(min, max) {

    return Math.random() * (max - min) + min;

}

for (let i = 0; i < btns.length; i++) {

    const btn = btns[i];

    btn.addEventListener("click", () => {
        audio.play();
    });

    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);

    btn.style.top = randomTop + "px";
    btn.style.left = randomLeft + "px";

}