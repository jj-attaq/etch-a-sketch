const container = document.querySelector('.container');
const row = [],
      grid = [],
      count = 16; // make user input later
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
function addColor() {  
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.addEventListener('mouseover', (event) => {
      event.target.style.backgroundColor = 'black';
    })
  })
}
fillGrid();
addColor();
