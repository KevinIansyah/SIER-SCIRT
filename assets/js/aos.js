const aosElements = document.querySelectorAll('[data-aos]');

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        aosElements.forEach(function(element) {
            element.setAttribute('data-aos', element.getAttribute('data-aos'));
        });
    } else {
        aosElements.forEach(function(element) {
            element.setAttribute('data-aos', 'disable');
        });
    }
});
