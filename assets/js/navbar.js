window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link"); // Menggunakan querySelectorAll
  const dropdown = document.querySelector(".dropdown-menu");

  if (window.scrollY > 0) {
    navbar.classList.add("scrolled", "shadow");
    navbar.setAttribute("data-bs-theme", "light");
    // dropdown.classList.add("scrolled");

    // Loop melalui setiap elemen .nav-link dan menambahkan kelas yang diperlukan
    navLinks.forEach(navLink => {
      navLink.classList.add("scrolled");
    });
  } else {
    navbar.classList.remove("scrolled", "shadow");
    navbar.setAttribute("data-bs-theme", "dark");
    // dropdown.classList.remove("scrolled");

    // Loop melalui setiap elemen .nav-link dan menghapus kelas yang diperlukan
    navLinks.forEach(navLink => {
      navLink.classList.remove("scrolled");
    });
  }
});