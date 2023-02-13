import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const buttonElement = document.querySelector('button');

const displayPassword = document.getElementsByTagName('h2')[0];

buttonElement.addEventListener('click', () => {
  displayPassword.innerHTML = nanoid();
});

const h2 = document.querySelector('h2');

h2.addEventListener('click', (element) => {
  copy(element.target.innerHTML);
});
