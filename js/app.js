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

const sections = document.querySelectorAll('section');
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

      navItem.addEventListener('click', (e) => {
        e.preventDefault();

        // let toSection = section.getAttribute('id'); => fixed to the next line
        let toSection = e.target.getAttribute('data-nav');
        // console.log(toSection);

        document.getElementById(toSection).scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest',
        });
      });

      navBar.appendChild(navItem);
    };
    setNavBar();
  }
};

createNavItem();

// // does not show nav bar when it is scrolling
let timeOut;
const header = document.querySelector('.page__header');

window.addEventListener('scroll', function () {
  header.classList.add('navbar__hide');

  timeOut = this.setTimeout(function () {
    header.classList.remove('navbar__hide');
  }, 1000);
});

//  highlighting navigation item when it is on viewport

// const activeSection = (elem) => {
//   if (document.querySelector('.menu__link__active') !== null) {
//     navBar.classList.remove('menu__link__active');
//   }
//   const currentSection = document.querySelector(
//     `a[href='#${section.getAttribute('id')}']`
//   );

//   // console.log(currentSection);
//   currentSection.classList.add('menu__link__active');
// };

//  activeSection();

// // add styles to navigation item when it is on viewport

const intersect = (entries) => {
  for (entry of entries) {
    const id = entry.target.getAttribute('id');
    const navListElement = document.querySelector(`[data-nav='${id}']`);

    if (entry.isIntersecting) {
      navListElement.classList.add('menu__link__active');
      entry.target.classList.add('your-active-class');
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
