const container = document.querySelector(".container");


const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");
container.appendChild(gridContainer);

const title = document.createElement("div");
title.classList.add("title");
title.textContent = "Etch-A-Sketch";
container.insertBefore(title, gridContainer);




function deleteGrid() {
    const gridContainer = document.querySelector(".gridContainer");
    let lastBox = gridContainer.lastElementChild;
    while (lastBox){
        gridContainer.removeChild(lastBox);
        lastBox = gridContainer.lastElementChild;
    }
}

function createGrid(numberOfBoxes) {
    for (let i = 0; i < numberOfBoxes; i++){
        for(let j = 0; j < numberOfBoxes; j++){
            const box = document.createElement("div");
            //box.textContent = "b";
            gridContainer.appendChild(box);
            let boxPercentage = 100 / numberOfBoxes;
            box.style.flexBasis = boxPercentage + "%";
            box.classList.add("box");
        }
    }
}

function randomRGB() {
    return Math.floor(Math.random() * 256);
}

function createHover() {
    const boxes = document.querySelectorAll(".box");

    for (let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener("mouseover", () => {
            const newRed = randomRGB();
            const newGreen = randomRGB();
            const newBlue = randomRGB();
            boxes[i].style.backgroundColor = "rgb(" + newRed + ", " + newGreen + ", " + newBlue + ")";
        });
    }
}



body = document.querySelector("body");
const resizeButton = document.createElement("button");
resizeButton.textContent = "Resize";
body.insertBefore(resizeButton, container);

resizeButton.addEventListener("click", () => {
    let newGridSize = prompt ("Squares per side:");
    newGridSize = Number(newGridSize);

    if(newGridSize !== null) {
        if (newGridSize > 100) {
            alert("Squares per side cannot exceed 100.");
            return;
        }
    
        if (isNaN(newGridSize)) {
            alert("Please enter a number.");
            return;
        }
    }
    else {
        return;
    }
    deleteGrid();
    createGrid(newGridSize);
    createHover();
});

createGrid(16);
createHover();


