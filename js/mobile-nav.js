const navBtn = document.querySelector('.header__nav-btn');
const mobileNav = document.querySelector('.header__mobile-nav');
const body = document.body;


navBtn.addEventListener('click', function(event){
    mobileToggle();
    event.stopPropagation();
})

mobileNav.addEventListener('click', function(event){
    event.stopPropagation();
})

body.addEventListener('click', function () {
    if (body.classList.contains('no-scroll')) {
        mobileToggle();
    }
})



function mobileToggle() {
    mobileNav.classList.toggle('header__mobile-nav_hidden');
    navBtn.classList.toggle('header__nav-btn_close');
    body.classList.toggle('no-scroll');
    
}
