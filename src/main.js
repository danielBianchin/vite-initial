
import { nanoid } from 'nanoid'

const buttonElement = document.querySelector('button');

const displayPassword = document.getElementsByTagName('h2')[0];

/* addEventListener(buttonElement) = */

buttonElement.addEventListener('click', () => {
  displayPassword.innerHTML = nanoid();
})