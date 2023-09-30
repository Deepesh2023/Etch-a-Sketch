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

  function draw() {
    $(".columnBox").each(function (index, element) {
      $(element).on("mousemove", () => {
        $(element).addClass("colour");
      });
    });
  }

  function unDraw() {
    $(".columnBox").each(function (index, element) {
      $(element).off("mousemove");
    });
  }

  const container = $(".container");
  const rowBox = $("<div></div>");
  const columnBox = $("<div></div>");
  rowBox.addClass("rowBox");
  columnBox.addClass("columnBox");

  createGrid(10);

  $(container).on("mousedown", draw);
  $(container).on("mouseup", unDraw);
});
