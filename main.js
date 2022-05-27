const container = document.querySelector('.container'),
      fragment = document.createDocumentFragment(),
      row = [],
      grid = [];
createNewGrid();
function createNewGrid() {
  const button = document.querySelector('.button');
  button.addEventListener('click', () => {
    removeOldGrid();
    runCountPrompt();
    fillGrid();
    determineCellSize();
    drawOnHover(); 
  })
}
function runCountPrompt() {
  count = prompt('Please choose how many cells you would like per side in the drawing grid:' );
  if (count > 100) {
    return alert('Please choose a number below 100.');
  }
}
function removeOldGrid() {
  while(row.length > 0) {
    row.pop();
  }
  while(grid.length > 0) {
    grid.pop();
  }
  while(container.lastElementChild) {
    container.lastChild.remove();
  }
}
function determineCellSize() {
  const cells = document.querySelectorAll('.cell');
  const cellSize = `${960/count}px`;
  cells.forEach((cell) => {
    cell.style.width = cellSize;
    cell.style.height = cellSize;
  })
}
function fillRowArray() {
  for(let i = 0; i < count; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    row.push(cell);
  }
}
function fillGridArray() {
  for (let i = 0; i < count; i++) { 
    grid.push(row);
  }
}
function fillGrid() {
  fillGridArray();
  for (let i = 0; i < grid.length; i++) {
    fillRowArray();
    for (let j = 0; j < grid[i].length; j++) { 
      fragment.appendChild(grid[i][j]);
    }
    container.appendChild(fragment);
  }
}
function drawOnHover() {  
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.addEventListener('mouseover', (event) => {
      event.target.style.backgroundColor = 'black';
    })
  })
}