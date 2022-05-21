const container = document.querySelector('.container');
const row = [],
      grid = [],
      count = 16, // make user input later
      fragment = document.createDocumentFragment();
function fillRow() {
  for(let i = 0; i < count; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    row.push(cell);
  }
}
function fillGrid() {
  for (let i = 0; i < count; i++) { 
    grid.push(row);
  }
}
function wowzers() {
  for (let i = 0; i < grid.length; i++) { 
    for (let j = 0; j < grid[i].length; j++) { 
      fragment.appendChild(grid[i][j]);
    }
    container.appendChild(fragment);
    // find way to make a new row under the previous that was created
  }
}

fillRow();
fillGrid();

    // cell = document.createElement('div'),
    // cell.setAttribute('class', 'cell');
    // column.push(cell);
    // row.push(column);
    // container.appendChild(column);