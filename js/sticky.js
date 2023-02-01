const heroRef = document.querySelector('.hero');
const headerRef = document.querySelector('.header');

console.log(heroRef);
const getStickyHeader = function (entries) {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    headerRef.classList.add('sticky');
  } else {
    headerRef.classList.remove('sticky');
  }
};

const heroObserver = new IntersectionObserver(getStickyHeader, {
  root: null,
  threshold: 1,
  // rootMargin: '20px',
});
heroObserver.observe(heroRef);
