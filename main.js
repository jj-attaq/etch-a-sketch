const container = document.querySelector('.container');
      // fragment = document.createDocumentFragment();
const createRow = () => {
  row = [];
  const fillArray = () => {
    for (let i = 0; i < 16; i++) {
      cell = document.createElement('div'),
      cell.setAttribute('class', 'cell');
      row.push(cell);
    }
  }
  const arrayLoop = () => {
    fillArray();
    row.forEach(element => {
      container.appendChild(element);
    });
  }
  arrayLoop();
}
createRow();
