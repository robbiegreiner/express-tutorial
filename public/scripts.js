const button = document.getElementById('button');
const box = document.getElementById('box');

const changeColor = () => {
  box.classList.toggle("blue");
}

button.addEventListener('click', changeColor);
