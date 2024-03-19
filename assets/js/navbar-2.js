window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const dropdown = document.querySelector('.dropdown-menu');

  if (window.scrollY > 0) {
    navbar.classList.add('scrolled', 'shadow');
  } else {
    navbar.classList.remove('scrolled', 'shadow');
  }
});
