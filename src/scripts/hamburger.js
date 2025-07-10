const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle menu when hamburger is clicked
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('expanded');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  const isMenuOpen = navLinks.classList.contains('expanded');
  const clickedHamburger = hamburger.contains(event.target);
  const clickedMenu = navLinks.contains(event.target);
  
  // If menu is open and click is outside both hamburger and menu, close it
  if (isMenuOpen && !clickedHamburger && !clickedMenu) {
    navLinks.classList.remove('expanded');
  }
});

