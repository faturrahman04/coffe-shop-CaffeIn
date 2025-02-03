let hamburgerMenu = document.querySelector('#hamburger-menu');
let sideNav = document.querySelector('.navbar .navbar-nav');

hamburgerMenu.addEventListener('click', function() {
  sideNav.classList.toggle('active');
});

document.addEventListener("click", function(e) {
  if (!hamburgerMenu.contains(e.target) && !sideNav.contains(e.target)) {
    sideNav.classList.remove('active');
  }
});

document.getElementById('mode').addEventListener('click', function() {
  document.body.classList.toggle('light');
})

// document.querySelectorAll('a[href^="#"]').forEach(element => {
//   element.addEventListener("click", function(e) {
//     this.getAttribute('href').sm
//     e.preventDefault();
//   })
// });

