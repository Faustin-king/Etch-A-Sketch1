const container = document.querySelector('#container');

for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'Coral';
  });
  container.appendChild(square);
}
