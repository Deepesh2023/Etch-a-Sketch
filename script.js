const container = document.querySelector(".container");
const rowBox = document.createElement("div");
rowBox.classList.add("rowBox");
const columnBox = document.createElement("div");
columnBox.classList.add("columnBox");

for (i = 0; i < 15; i++) {
  var cloned_rowBox = rowBox.cloneNode(true);
  container.appendChild(cloned_rowBox);
  for (j = 0; j < 15; j++) {
    var cloned_columnBox = columnBox.cloneNode(true);
    cloned_rowBox.appendChild(cloned_columnBox);
  }
}
