window.onload = function () {
    history.scrollRestoration = 'manual';
    const aboutLink = document.querySelector('.navbar-2 a[href="#about"]');
    const mobileAboutLink = document.querySelector('.mobile-menu a[href="#about"]');
    if (aboutLink) {
        aboutLink.classList.add('active');
    }
    if (mobileAboutLink) {
        mobileAboutLink.classList.add('active');
    }
    document.body.classList.add('page-loaded');
};
const toggleButton = document.querySelector('.menu-toggle');   
const mobileMenu = document.querySelector('.mobile-menu');   
toggleButton.addEventListener('click', () => {
    const isOpening = !mobileMenu.classList.contains('open');
    if (isOpening) {
        mobileMenu.classList.remove('closing');
        mobileMenu.classList.add('open');
    } 
    else {
        mobileMenu.classList.remove('open');
        mobileMenu.classList.add('closing');
        setTimeout(() => {
            mobileMenu.classList.remove('closing');
        }, 400); 
    }
    toggleButton.textContent = isOpening ? '✖' : '☰';
    toggleButton.classList.add('changing');
    toggleButton.setAttribute('aria-expanded', isOpening);
    setTimeout(() => {
        toggleButton.textContent = isOpening ? '✕' : '☰';
        toggleButton.classList.remove('changing');
    }, 150);
});
function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileMenu.classList.add('closing');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.classList.add('changing');
    setTimeout(() => {
        toggleButton.textContent = '☰';
        toggleButton.classList.remove('changing');
    }, 150);
    setTimeout(() => {
        mobileMenu.classList.remove('closing');
    }, 400);
}
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        setTimeout(() => {
            closeMobileMenu();
        }, 200);
    });
});
