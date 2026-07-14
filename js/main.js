document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        // ვკრძალავთ გვერდის სქროლს გახსნილი მენიუს დროს
        document.body.classList.toggle('no-scroll');
    });

    // ვხურავთ მენიუს ნებისმიერ ბმულზე დაწკაპებისას
    const navLinks = document.querySelectorAll('.navigation__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            nav.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
});