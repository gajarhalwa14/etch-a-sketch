let container = document.querySelector("#container");
const button = document.querySelector("#btn");




function createInitialGrid() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "grid-normal");
        div.setAttribute("style", "min-width: 60px;")
        div.addEventListener("mouseenter", (event) => {
            if (event.target.className === "grid-normal") {
                event.target.setAttribute("class", "grid-hover");
            }
        });
        container.appendChild(div);
    }
}

function redrawGrid(dimensions) {
    container.remove();
    container = document.createElement("div");
    container.setAttribute("id", "container");
    document.body.appendChild(container);
    const minWidth = 960 / dimensions;
    for (let i = 0; i < dimensions * dimensions; i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "grid-normal");
        div.setAttribute("style", `min-width: ${minWidth}px;`);
        div.addEventListener("mouseenter", (event) => {
            if (event.target.className === "grid-normal") {
                event.target.setAttribute("class", "grid-hover");
            }
        });
        container.appendChild(div);
    }
}



createInitialGrid();
button.addEventListener("click", (event) => {
    let dimensions = prompt("Enter the new dimensions of the grid (max of 100): ");
    if (!dimensions) {
        return;
    }
    dimensions = Number(dimensions);
    console.log(dimensions);
    console.log(Number.isNaN(dimensions));
    
    if ((Number.isNaN(dimensions)) || (dimensions <= 0)) {
        alert("Invalid input. Please enter a valid positive integer.");
    }
    else if (dimensions > 100) {
        redrawGrid(100);
    }
    else {
        redrawGrid(dimensions);
    }
        
});