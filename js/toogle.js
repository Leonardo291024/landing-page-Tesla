const menuMobile = document.getElementById('menu_mobile');
const btnOpen = document.getElementById('btn_open_menu');
const btnClose = document.getElementById('close');

btnOpen.addEventListener('click', () =>{
   menuMobile.classList.remove('inactive');
});

btnClose.addEventListener('click', () =>{
    menuMobile.classList.add('inactive');
 });