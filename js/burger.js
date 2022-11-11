(() => {
    const menuBtnRef = document.querySelector('[data-menu-button]');
    const mobileMenuRef = document.querySelector('[data-menu]');
    const closeModalBtn = document.querySelector('[data-menu-close]');

    menuBtnRef.addEventListener('click', () => {
        const expanded =
            menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

        menuBtnRef.setAttribute('aria-expanded', !expanded);
        menuBtnRef.classList.toggle('is-open');
        mobileMenuRef.classList.toggle('is-open');
    });
    closeModalBtn.addEventListener('click', () => {
        menuBtnRef.classList.toggle('is-open');
        mobileMenuRef.classList.toggle('is-open');
    });
})();

/* (() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelector("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),
  };
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  function toggleModal() {
    document.body.classList.toggle("is-open");
    refs.modal.classList.toggle("is-open");
  }
})(); */
