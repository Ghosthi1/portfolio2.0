const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

function closeMenu() {
  navLinks.classList.remove('expanded');
  navLinks.classList.add('sliding-out');
  
  // Hide menu after animation completes
  setTimeout(() => {
    navLinks.classList.remove('sliding-out');
  }, 300); // Match the animation duration (0.3s = 300ms)
}

// Toggle menu when hamburger is clicked
hamburger.addEventListener('click', () => {
  if (navLinks.classList.contains('expanded')) {
    closeMenu();
  } else {
    navLinks.classList.remove('sliding-out');
    navLinks.classList.add('expanded');
  }
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  const isMenuOpen = navLinks.classList.contains('expanded');
  const clickedHamburger = hamburger.contains(event.target);
  const clickedMenu = navLinks.contains(event.target);
  
  // If menu is open and click is outside both hamburger and menu, close it
  if (isMenuOpen && !clickedHamburger && !clickedMenu) {
    closeMenu();
  }
});

