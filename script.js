const DEFAULT_BOXES_SIZE = 50;
const MAX_BOXES_SIZE = 100;
const content = document.querySelector("#content");

const button = document.createElement("button");
button.textContent = "Change size";
button.addEventListener("click", () => {
    let newSize = parseInt(prompt("New size?", DEFAULT_BOXES_SIZE));
    if (typeof newSize === "number" && 0 < newSize && newSize <= MAX_BOXES_SIZE) {
        removeBoxes();
        createBoxes(newSize);
    }
})
document.body.firstChild.before(button);

const randomRgb = () => {
  return Math.floor(Math.random() * 256);
}

function changeColorRed(box) {
    box.style.backgroundColor = "red";
}

function changeColorRandom(box) {
    box.style.backgroundColor = `rgb(${randomRgb()}, ${randomRgb()}, ${randomRgb()})`;
}

function changeColorDarken(box) {
    let lightness = box.getAttribute("data-lightness");
    box.style.backgroundColor = `hsl(0, 0%, ${lightness}%)`;
    if (0 < parseInt(lightness)) {
        box.setAttribute("data-lightness", parseInt(lightness) - 10);
    }
}

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
            box.setAttribute("data-lightness", "100");
            box.addEventListener("mouseover", () => changeColorDarken(box))
            boxrow.appendChild(box);
        }
        content.appendChild(boxrow);
    }
}

const removeBoxes = () => {
    content.innerHTML = "";
}

createBoxes(DEFAULT_BOXES_SIZE);
