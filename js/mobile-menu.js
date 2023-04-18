(() => {
  const mobileMenu = document.querySelector('.js-menu-container'); //overlay
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  let scrollPos = window.scrollY;

  const body = document.querySelector('body');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    // const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    // bodyScrollLock.enableBodyScroll(document.body);
  });
})();

(function () {
  var _overlay = document.querySelector('.js-menu-container');
  var _clientY = null; // remember Y position on touch start

  _overlay.addEventListener(
    'touchstart',
    function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch
        _clientY = event.targetTouches[0].clientY;
      }
    },
    false
  );

  _overlay.addEventListener(
    'touchmove',
    function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch
        disableRubberBand(event);
      }
    },
    false
  );

  function disableRubberBand(event) {
    var clientY = event.targetTouches[0].clientY - _clientY;

    if (_overlay.scrollTop === 0 && clientY > 0) {
      // element is at the top of its scroll
      event.preventDefault();
    }

    if (isOverlayTotallyScrolled() && clientY < 0) {
      //element is at the top of its scroll
      event.preventDefault();
    }
  }

  function isOverlayTotallyScrolled() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
    return _overlay.scrollHeight - _overlay.scrollTop <= _overlay.clientHeight;
  }
})();
