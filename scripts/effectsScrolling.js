const navLinks = Array.from(document.querySelectorAll('.navbar-2 a, .mobile-menu a'));
const navbar = document.querySelector('.navbar');
const sectionIds = [...new Set(
    navLinks
        .map(link => link.getAttribute('href'))
        .filter(href => href && href.startsWith('#') && document.querySelector(href))
)];
const sections = sectionIds.map(sectionId => document.querySelector(sectionId));
function getNavbarHeight() {
    return navbar ? navbar.offsetHeight : 0;
}
function setActiveLinks(targetId) {
    if (!targetId) {
        return;
    }

    navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === targetId;
        link.classList.toggle('active', isActive);
    });
}
function updateActiveLinkOnScroll() {
    if (sections.length === 0) {
        return;
    }
    const scrollPosition = window.scrollY + getNavbarHeight() + 1;
    let currentSectionId = sectionIds[0];
    sections.forEach((section, index) => {
        if (section && scrollPosition >= section.offsetTop) {
            currentSectionId = sectionIds[index];
        }
    });
    setActiveLinks(currentSectionId);
}
let isTicking = false;
function requestActiveLinkUpdate() {
    if (isTicking) {
        return;
    }
    isTicking = true;
    requestAnimationFrame(() => {
        updateActiveLinkOnScroll();
        isTicking = false;
    });
}
navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            setActiveLinks(targetId);
            smoothScrollTo(targetElement, 700, getNavbarHeight());
        }
    });
});
window.addEventListener('load', updateActiveLinkOnScroll);
window.addEventListener('scroll', requestActiveLinkUpdate, { passive: true });
window.addEventListener('resize', requestActiveLinkUpdate);
function smoothScrollTo(element, duration, offset) {
    const startPosition = window.pageYOffset;
    const targetPosition = element.getBoundingClientRect().top + startPosition - offset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        } 
        else {
            updateActiveLinkOnScroll();
        }
    }
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
}
