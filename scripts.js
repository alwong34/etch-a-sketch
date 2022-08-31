// get the starting container we will put our grid into
const container = document.getElementById("container");
const gridWidth = 960;

function changeColor(e) {
    if (mouseDown > 0) {
        e.style.backgroundColor = "black";
    }
}

// create a button that generates a grid based on user input with a max number of 100
const controls = document.getElementById("controls");
let newGridBtn = document.createElement("button");
newGridBtn.innerHTML = "Change Grid Size";
newGridBtn.onclick = function() {
    let newGridSize = prompt("Choose a grid size between 1 and 100");
    let message = document.createElement("p");

    if (newGridSize > 100) {
        message.innerHTML = "Please choose a grid size less than 100."
    }
    else if (newGridSize <= 0) {
        message.innerHTML = "Please choose a grid size greater than 0"
    }
    else {
        // clear the old grid
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        generateGrid(newGridSize);
        message.innerHTML = `Your new grid size is ${newGridSize} x ${newGridSize}`
    }
    
    controls.appendChild(message);
}

controls.appendChild(newGridBtn);

let mouseDown = 0;
document.body.onmousedown = () => mouseDown++;
document.body.onmouseup = () => mouseDown--;

function generateGrid(numSquares) {
    for (let i = 0; i < numSquares; i++) {
        //create 16 rows
        let gridRow = document.createElement('div');
        gridRow.classList.add("row");
        
        // if the row is the first row, add an extra border on top to match the other squares
        if (i == 0) {
            gridRow.style.borderTop = "solid black 1px";
        }
        // if the row is the last row, add an extra border on the bottom to match the other squares
        else if (i == numSquares - 1) {
            gridRow.style.borderBottom = "solid black 1px";
        }

        // create 16 squares for each row
        for (let j = 0; j < numSquares; j++) {
            let square = document.createElement('div');
            square.classList.add("square");
            square.style.width = `${gridWidth / numSquares}px`;
            square.style.height = `${gridWidth / numSquares}px`;

            //change color on click and drag
            square.onmousedown = () => square.style.backgroundColor = "black";
            square.onmouseover = () => changeColor(square);

            // if it is the first square in the row, add a thicker border to match the other squares
            if (j == 0) {
                square.style.borderLeft = "solid black 2px";
            }
            // if it is the last square in the row, add a thicker border to match the other squares
            else if (j == numSquares - 1) {
                square.style.borderRight = "solid black 2px";
            }

            gridRow.appendChild(square);
        }

        container.appendChild(gridRow);
    }
}

generateGrid(16);