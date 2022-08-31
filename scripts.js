// get the starting container we will put our grid into
const container = document.getElementById("container");

for (let i = 0; i < 16; i++) {
    //create 16 rows
    let gridRow = document.createElement('div');
    gridRow.classList.add("row");
    
    // if the row is the first row, add an extra border on top to match the other squares
    if (i == 0) {
        gridRow.style.borderTop = "solid black 1px";
    }
    // if the row is the last row, add an extra border on the bottom to match the other squares
    else if (i == 15) {
        gridRow.style.borderBottom = "solid black 1px";
    }

    // create 16 squares for each row
    for (let j = 0; j < 16; j++) {
        let square = document.createElement('div');
        square.classList.add("square");

        // if it is the first square in the row, add a thicker border to match the other squares
        if (j == 0) {
            square.style.borderLeft = "solid black 2px";
        }
        // if it is the last square in the row, add a thicker border to match the other squares
        else if (j == 15) {
            square.style.borderRight = "solid black 2px";
        }

        gridRow.appendChild(square);
    }

    container.appendChild(gridRow);
}