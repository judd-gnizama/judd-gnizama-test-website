const openMenuBtn = document.querySelector('.openMenu');
const closeMenuBtn = document.querySelector('.closeMenu');
const mainMenu = document.querySelector('.mobile-mainMenu');

openMenuBtn.addEventListener('click',  show);
closeMenuBtn.addEventListener('click', hide);
mainMenu.addEventListener('click', closeMenu);

function show() {
    mainMenu.classList.add('active');
}

function hide() {
    mainMenu.classList.remove('active');
}

function closeMenu(event) {
    if (event.target.matches('.mobile-mainMenu a, .mobile-mainMenu button')){
        mainMenu.classList.remove('active');
    }
}