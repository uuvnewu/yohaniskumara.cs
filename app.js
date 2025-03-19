/*const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});*/
// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list ul');

// Toggle class for navigation
hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
const links = document.querySelectorAll('.nav-list ul li a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 60, // Adjust for fixed header height
      behavior: 'smooth'
    });
  });
});

// Hero Section Text Animation (For adding span text effect)
async function fixElement() {
  const element = $0;
  const data = {
  previousText: element.textContent
  };
  await setElementStyles(element, {
      'min-width': '10px',
      'min-height': '10px',
      'display': 'inline-block',
  });
  element.textContent = '.';
  return data;
}
fixElement();
const heroTextSpans = document.querySelectorAll('#hero h1 span');

window.addEventListener('load', () => {
  heroTextSpans.forEach((span, index) => {
    setTimeout(() => {
      span.classList.add('reveal');
    }, index * 500); // Delay for each span
  });
});

// Sticky Navigation on Scroll
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

