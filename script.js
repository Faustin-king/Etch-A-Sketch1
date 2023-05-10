const container = document.querySelector('#container');

for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'Coral';
  });
  container.appendChild(square);
}

// select the button element
const newGridBtn = document.querySelector('#new-grid-btn');
// Add event listener to the button
newGridBtn.addEventListener('click', () => {
  // prompt user for the number of squares per side
  let gridSize = parseInt(
    prompt('Enter the number of squares per side (maximum 100):')
  );
  // check if gridSize is valid
  if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
    // Remove existing grid
    const sketchpad = document.querySelector('#sketchpad');
    while (sketchpad.firstChild) {
      sketchpad.removeChild(sketchpad.firstChild);
    }

    // generate new grid
    sketchpad.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    sketchpad.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < gridSize * gridSize; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      sketchpad.appendChild(square);
    }
  } else {
    alert('invalid input!');
  }
});
