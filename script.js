$(document).ready(function () {
  // creating the grid
  function createGrid(gridSize) {
    for (i = 0; i < gridSize; i++) {
      let cloned_rowBox = rowBox.clone();
      cloned_rowBox.appendTo(canvas);
      for (j = 0; j < gridSize; j++) {
        let cloned_columnBox = columnBox.clone();
        cloned_columnBox.appendTo(cloned_rowBox);
      }
    }
  }

  function preventDefaultBehaviour() {
    document.body.ondragstart = function () {
      return false;
    };
    document.body.ondrop = function () {
      return false;
    };
  }

  function pencil() {
    $(canvas).on("mousedown", draw);
    $(canvas).on("mouseup", dontDraw);
  }

  function eraser() {
    $(canvas).on("mousedown", erase);
    $(canvas).on("mouseup", dontErase);
    // $(".pencil").on("click", pencil);
  }

  function draw() {
    $(".columnBox").each(function (index, element) {
      $(element).on("mousemove", () => {
        $(element).addClass("colour");
      });
    });
  }

  function dontDraw() {
    $(".columnBox").each(function (index, element) {
      $(element).off("mousemove");
    });
  }

  // the eraser
  function erase() {
    $(".columnBox").each(function (index, element) {
      $(element).on("mousemove", () => {
        $(element).removeClass("colour");
      });
    });
  }

  // don't erase
  function dontErase() {
    $(".columnBox").each(function (index, element) {
      $(element).off("mousemove");
    });
  }

  // forming the canvas
  const canvas = $(".canvas");
  const rowBox = $("<div></div>");
  const columnBox = $("<div></div>");
  rowBox.addClass("rowBox");
  columnBox.addClass("columnBox");
  createGrid(20);

  // preventing the default browser behaviour
  preventDefaultBehaviour();

  // detecting user interactions
  $(".pencil").on("mousedown", pencil);
  $(".eraser").on("mousedown", eraser);
});
