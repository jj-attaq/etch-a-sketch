const container = document.querySelector('.container');
const row = [],
      grid = [];
createNewGrid();
function createNewGrid() {
  const button = document.querySelector('.button');
  button.addEventListener('click', () => {
    count = +prompt('Please choose how many cells you would like per side in the drawing grid:' );
    fillGrid();
    drawOnHover(); 
    determineCellSize();
  })
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
      container.appendChild(grid[i][j]);
    }
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