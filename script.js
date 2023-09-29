$(document).ready(function () {
  // creating the grid
  function createGrid(gridSize) {
    for (i = 0; i < gridSize; i++) {
      let cloned_rowBox = rowBox.clone();
      cloned_rowBox.appendTo(container);
      for (j = 0; j < gridSize; j++) {
        let cloned_columnBox = columnBox.clone();
        cloned_columnBox.appendTo(cloned_rowBox);
      }
    }
  }

  const container = $(".container");
  const rowBox = $("<div></div>");
  const columnBox = $("<div></div>");
  rowBox.addClass("rowBox");
  columnBox.addClass("columnBox");

  createGrid(10);
});

// const container = $(".container");
// const rowBox = document.createElement("div");
// rowBox.classList.add("rowBox");
// const columnBox = document.createElement("div");
// columnBox.classList.add("columnBox");

// createGrid(16);
