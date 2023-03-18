/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';
import 'flowbite';

let mobile_menu = document.querySelector('.mobile_menu');
let mobile_menu_btn = document.querySelector('#mobile-menu-btn');

console.log(mobile_menu.className)

mobile_menu.innerHTML = document.querySelector('.nav-menu').innerHTML;

mobile_menu_btn.onclick = function (){
    mobile_menu.classList.toggle('display-menu');
}









