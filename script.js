const BOXES_WIDTH = 50;
const BOXES_HEIGHT = 50;
const content = document.querySelector("#content");

boxSize = (window.innerHeight / BOXES_HEIGHT).toFixed(0) - 2;

function changeColor(box) {
    box.style.backgroundColor = "red";
}

for (let i = 0; i < BOXES_HEIGHT; ++i) {
    const boxrow = document.createElement("div");
    boxrow.classList.add("boxrow");
    for (let j = 0; j < BOXES_WIDTH; ++j) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = (boxSize)  + "px";
        box.style.height = (boxSize) + "px";
        box.addEventListener('mouseover', () => changeColor(box))
        boxrow.appendChild(box);
    }
    content.appendChild(boxrow);
}
