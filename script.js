// creating the grid
function createGrid(gridSize) {
  for (i = 0; i < gridSize; i++) {
    var cloned_rowBox = rowBox.cloneNode(true);
    container.appendChild(cloned_rowBox);
    for (j = 0; j < gridSize; j++) {
      var cloned_columnBox = columnBox.cloneNode(true);
      cloned_rowBox.appendChild(cloned_columnBox);
    }
  }
}
const container = document.querySelector(".container");
const rowBox = document.createElement("div");
rowBox.classList.add("rowBox");
const columnBox = document.createElement("div");
columnBox.classList.add("columnBox");

createGrid(+gridSize);
