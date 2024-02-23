document.addEventListener("DOMContentLoaded", function() {
    var currentPageUrl = window.location.href;
    var navLinks = document.querySelectorAll('.nav-link');
    console.log(navLinks)
    navLinks.forEach(function(navLink) {
      if (navLink.href === currentPageUrl) {
        navLink.classList.add('active');
        navLink.setAttribute('aria-current', 'page');
      }else{
        navLink.classList.remove('active')
        navLink.removeAttribute('aria-current');
      }
    });
  });