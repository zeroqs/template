// меню бургер
export function menuBurger () { 
    const burgerMenu = document.querySelector('.menu__icon'); 
    if (burgerMenu) { 
        const navMenu = document.querySelector('.header__menu-main');  
        burgerMenu.addEventListener("click", function(e) {
            document.body.classList.toggle('_lock');
            burgerMenu.classList.toggle('_active');
            navMenu.classList.toggle('_active');
        })   
    }
}