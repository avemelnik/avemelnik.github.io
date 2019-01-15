var burger = document.getElementById('burger');
var headerMenu = document.getElementsByClassName('header__menu');
burger.onclick = function() {
    burger.value = 'Off';
    headerMenu[0].classList.toggle('header__menu-block');
};