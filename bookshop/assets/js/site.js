const setupMobileNav = () => {
  let menuOpen = false;
  const navButton = document.querySelector(`.js-mobile-btn`);

  const toggleNavMenu = () => {
    let navMenu = document.querySelector(`.js-mobile-nav`);

    if (menuOpen) {
      menuOpen = false;
      navMenu.classList.remove("is-open");
    } else {
      menuOpen = true;
      navMenu.classList.add("is-open");
    }
  };

  navButton.addEventListener("click", toggleNavMenu);
};
setupMobileNav();

const setupMobileLangNav = () => {
  let menuOpen = false;
  const mobileLangButton = document.querySelector(`.js-mobile-lang-btn`);

  const toggleNavMenu = () => {
    let navMenu = document.querySelector(`.js-mobile-lang-nav`);

    if (menuOpen) {
      menuOpen = false;
      mobileLangButton.classList.remove("is-open");
      navMenu.classList.remove("is-open");
    } else {
      menuOpen = true;
      mobileLangButton.classList.add("is-open");
      navMenu.classList.add("is-open");
    }
  };

  mobileLangButton.addEventListener("click", toggleNavMenu);
};
setupMobileLangNav();

const setupDesktopLangNav = () => {
  let menuOpen = false;
  const desktopLangButton = document.querySelector(`.js-desktop-lang-btn`);

  const toggleNavMenu = () => {
    let navMenu = document.querySelector(`.js-desktop-lang-nav`);

    if (menuOpen) {
      menuOpen = false;
      desktopLangButton.classList.remove("is-open");
      navMenu.classList.remove("is-open");
    } else {
      menuOpen = true;
      desktopLangButton.classList.add("is-open");
      navMenu.classList.add("is-open");
    }
  };

  desktopLangButton.addEventListener("click", toggleNavMenu);
};
setupDesktopLangNav();

//trigger shadow when moving away from top of page
//setup observer
const topOfPage = document.querySelector(".c-header__spacer");

const options = {
    root: null,
    threshold: 1,
    rootMargin: "0px",
};

const observer = new IntersectionObserver( function (entries, observer) {
  entries.forEach( function (entry) {
    console.log(entry.isIntersecting);
    addShadow(".c-header");
  });
}, options);

//add shadow class to header
const addShadow = className => {
  document.querySelector(className).classList.toggle("is-shadowed");
};

//add shadow to header when at top of page
observer.observe(topOfPage);
