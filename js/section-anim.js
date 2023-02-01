const allSections = document.querySelectorAll('.section--appear');

const getSections = function (entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    return;
  }
  entry.target.classList.remove('section--hidden');
};
const sectionObserver = new IntersectionObserver(getSections, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
