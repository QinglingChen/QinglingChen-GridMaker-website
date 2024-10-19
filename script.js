// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;

// Add a row
function addR() {
    const table = document.getElementById("grid");
    const row = table.insertRow(); // Insert a new row at the end

    // Add cells to the new row
    for (let i = 0; i < (numCols || 1); i++) {
        const cell = row.insertCell(); // Create a new cell
        cell.onclick = function() {
            this.style.backgroundColor = colorSelected; // Set the background color on click
        };
    }

    // If this is the first row being added, initialize the number of columns
    if (numCols === 0) {
        numCols = 1;
    }

    numRows++;
}

// Add a column
function addC() {
    const table = document.getElementById("grid");

    // If there are no rows, add a row first
    if (numRows === 0) {
        addR();
    } else {
        // Add a new cell to each existing row
        for (let i = 0; i < numRows; i++) {
            const row = table.rows[i];
            const cell = row.insertCell(); // Insert a new cell at the end of the row
            cell.onclick = function() {
                this.style.backgroundColor = colorSelected; // Set the background color on click
            };
        }
    }

    numCols++;
}

// Remove a row
function removeR() {
    const table = document.getElementById("grid");

    if (numRows > 0) {
        table.deleteRow(numRows - 1); // Delete the last row
        numRows--;
    }

    // If all rows are removed, reset the column count
    if (numRows === 0) {
        numCols = 0;
    }
}

// Remove a column
function removeC() {
    const table = document.getElementById("grid");

    if (numCols > 0) {
        for (let i = 0; i < numRows; i++) {
            table.rows[i].deleteCell(numCols - 1); // Delete the last cell of each row
        }
        numCols--;
    }

    // If all columns are removed, reset the row count
    if (numCols === 0) {
        numRows = 0;
        table.innerHTML = ""; // Clear the table completely
    }
}

// Set global variable for selected color
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
    console.log("Selected color: ", colorSelected);
}

// Fill all uncolored cells
function fillU() {
    const table = document.getElementById("grid");
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            const cell = table.rows[i].cells[j];
            if (!cell.style.backgroundColor) {
                cell.style.backgroundColor = colorSelected;
            }
        }
    }
}

// Fill all cells
function fillAll() {
    const table = document.getElementById("grid");
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            table.rows[i].cells[j].style.backgroundColor = colorSelected;
        }
    }
}

// Clear all cells
function clearAll() {
    const table = document.getElementById("grid");
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            table.rows[i].cells[j].style.backgroundColor = "";
        }
    }
}
