document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        // Запрещаем скролл страницы при открытом меню
        document.body.classList.toggle('no-scroll');
    });

    // Закрываем меню при клике на любую ссылку
    const navLinks = document.querySelectorAll('.navigation__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            nav.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
});