const score = document.getElementById('score');
let scoreCounter = 0;

const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}
//убегающий текст блока JS "в ногу со временем"
const escapeText = document.getElementById('escapeText');

escapeText.addEventListener('mouseenter', moveEscapeText);
escapeText.addEventListener('click', function(){
    moveEscapeText();
    scoreCounter = scoreCounter + 1;
    score.innerText = scoreCounter;
});

function moveEscapeText(){
    escapeText.style.left = `${random(2, 65)}%`;
    escapeText.style.top = `${random(20, 65)}%`;
}