const container = document.querySelector(".container");

function createGrid(numberOfBoxes) {
    // while (container.hasChildNodes){
    //     container.removeChild(container.lastChild);
    // }

    for (let i = 0; i < numberOfBoxes; i++){
        for(let j = 0; j < numberOfBoxes; j++){
            const box = document.createElement("div");
            //box.textContent = "b";
            container.appendChild(box);
            let boxPercentage = 100 / numberOfBoxes;
            box.style.flexBasis = boxPercentage + "%";
            box.classList.add("box");
        }
    }
}


function hover() {
    const boxes = document.querySelectorAll(".box");

    for (let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener("mouseover", () => {
            boxes[i].style.backgroundColor = "magenta";
        });
    }

    for (let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener("mouseleave", () => {
            boxes[i].style.backgroundColor = "white";
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

});

createGrid(16);
hover();


