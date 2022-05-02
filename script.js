const DEFAULT_BOXES_SIZE = 50;
const MAX_BOXES_SIZE = 100;
const content = document.querySelector("#content");

function changeColor(box) {
    box.style.backgroundColor = "red";
}

const button = document.createElement("button");
button.textContent = "Change size";
button.addEventListener('click', () => {
    let newSize = parseInt(prompt("New size?", DEFAULT_BOXES_SIZE));
    newSize = (Number.isNaN(newSize) || MAX_BOXES_SIZE < newSize || newSize < 1) ? DEFAULT_BOXES_SIZE : newSize;
    removeBoxes();
    createBoxes(newSize);
})
document.body.firstChild.before(button);

const createBoxes = (size) => {
    const boxSize = (window.innerHeight / size).toFixed(0) - 2;
    for (let i = 0; i < size; ++i) {
        const boxrow = document.createElement("div");
        boxrow.classList.add("boxrow");
        for (let j = 0; j < size; ++j) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.width = (boxSize)  + "px";
            box.style.height = (boxSize) + "px";
            box.addEventListener('mouseover', () => changeColor(box))
            boxrow.appendChild(box);
        }
        content.appendChild(boxrow);
    }
}

const removeBoxes = () => {
    content.innerHTML = '';
}

createBoxes(DEFAULT_BOXES_SIZE);
