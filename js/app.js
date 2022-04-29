// /**
//  *
//  * Dependencies: None
//  *
//  * JS Version: ES2015/ES6
//  *
//  * JS Standard: ESlint
//  *
//  */

// /**
//  * Define Global Variables
// //  *
//  */

const sections = Array.from(document.querySelectorAll('section'));
const navBar = document.querySelector('#navbar__list');

// /**
//  * End Global Variables
//  * Begin Main Functions
//  *
//  */

// // build the nav

const createNavItem = () => {
  for (section of sections) {
    href = section.getAttribute('id');
    navName = section.getAttribute('data-nav');
    navItem = document.createElement('li');

    const setNavBar = () => {
      navItem.innerHTML = `<a href="#${href}" class="nav_item" data-nav="${href}">${navName}</a>`;
      navBar.appendChild(navItem);
    };
    setNavBar();
  }
};

createNavItem();

// // does not show nav bar when it is scrolling
let timeOut;

window.addEventListener('scroll', function () {
  navBar.classList.add('navbar__hide');

  timeOut = this.setTimeout(function () {
    navBar.classList.remove('navbar__hide');
  }, 1000);
});

// highlighting navigation item when it is on viewport

const activeSection = (elem) => {
  if (document.querySelector('.menu__link__active') !== null) {
    navBar.classList.remove('menu__link__active');
  }
  const currentSection = document.querySelector(
    `a[href='#${section.getAttribute('id')}']`
  );
  currentSection.classList.add('menu__link__active');
};

const intersect = (entries) => {
  for (entry of entries) {
    const id = entry.target.getAttribute('id');
    const navListElement = document.querySelector(`[data-nav='${id}']`);

    if (entry.isIntersecting) {
      navListElement.classList.add('menu__link__active');
      entry.target.classList.add('your-active-class');
      // activeSection(entry.target);
    } else {
      navListElement.classList.remove('menu__link__active');
      entry.target.classList.remove('your-active-class');
    }
  }
};

const observer = new IntersectionObserver(intersect, {
  root: null,
  rootMargin: '-50% 0px',
  threshold: 0,
});

for (section of sections) {
  observer.observe(section);
}
