/* const btnOrder = document.querySelector('.main__btn'); */
const modal = document.querySelector('.main__modal');
const modalWindow = document.querySelector('.main__modal-window');
//модальное окно блока Бэм и Sass
const modalBem = document.getElementById('modalBem');
const modalSass = document.getElementById('modalSass');
const skillModal = document.querySelector('.main__skill-modal');
const modalWindowBem = document.querySelector('.main__modal-window-bem');
const modalWindowSass = document.querySelector('.main__modal-window-sass');
/* const body = document.body; */


/* btnOrder.addEventListener('click', function(event){
    modal.classList.toggle('main__modal_active');
    mobileNav.classList.toggle('header__mobile-nav_hidden');
    body.classList.toggle('no-scroll');
}); */
modal.addEventListener('mousedown', function (event){
    modal.classList.toggle('main__modal_active');
    mobileNav.classList.toggle('header__mobile-nav_hidden');
    body.classList.toggle('no-scroll');
});
modalWindow.addEventListener('click', function(event){
    event.stopPropagation();
    
});
modalWindow.addEventListener('mousedown', function (event) {
    event.stopPropagation();
});
//модальное окно блока Бэм и Sass
modalBem.addEventListener('click', function(event){
    skillModal.classList.toggle('main__skill-modal_active');
    modalWindowBem.classList.remove('main__modal-window-bem_hidden');
    body.classList.toggle('no-scroll');
    event.stopPropagation();
    
});

modalSass.addEventListener('click', function (event) {
    skillModal.classList.toggle('main__skill-modal_active');
    modalWindowSass.classList.remove('main__modal-window-sass_hidden');
    body.classList.toggle('no-scroll');
    event.stopPropagation();
    
});
skillModal.addEventListener('mousedown', function(event){
    skillModal.classList.toggle('main__skill-modal_active');
    modalWindowSass.classList.add('main__modal-window-sass_hidden');
    modalWindowBem.classList.add('main__modal-window-bem_hidden');
    body.classList.toggle('no-scroll');
    event.stopPropagation();
});
modalWindowBem.addEventListener('click', function(event){
    event.stopPropagation();
});
modalWindowBem.addEventListener('mousedown', function (event) {
    event.stopPropagation();
});
modalWindowSass.addEventListener('click', function (event) {
    event.stopPropagation();
});
modalWindowSass.addEventListener('mousedown', function (event) {
    event.stopPropagation();
});