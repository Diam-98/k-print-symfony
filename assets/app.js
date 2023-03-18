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
let mobile_menu_close = document.querySelector('#close-mobile-menu-btn');

console.log(mobile_menu.className)

mobile_menu.innerHTML = document.querySelector('.nav-menu').innerHTML;

mobile_menu_btn.onclick = function (){
    mobile_menu.classList.replace( 'hide-menu', 'mobile_menu');
    mobile_menu_btn.classList.remove('active-btn');
    mobile_menu_btn.style.display = "none";
    mobile_menu_close.style.display = "block";
    mobile_menu_close.classList.add('active-btn');
}

mobile_menu_close.onclick = function(){
    mobile_menu.classList.replace( 'mobile_menu','hide-menu');
    mobile_menu_close.classList.remove('active-btn');
    mobile_menu_close.style.display = "none";
    mobile_menu_btn.style.display = "block";
    mobile_menu_btn.classList.add('active-btn');
}




