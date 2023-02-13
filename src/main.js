import { nanoid } from 'nanoid';
import './style.css';

const buttonElement = document.querySelector('button');

const displayPassword = document.getElementsByTagName('h2')[0];

/* addEventListener(buttonElement) = */

buttonElement.addEventListener('click', () => {
  displayPassword.innerHTML = nanoid();
});
