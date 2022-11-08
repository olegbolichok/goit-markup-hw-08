(() => {
    const menuBtnRef = document.querySelector('[data-menu-button]');
    const mobileMenuRef = document.querySelector('[data-menu]');

    menuBtnRef.addEventListener('click', () => {
        const expanded =
            menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

        menuBtnRef.classList.toggle('is-open');
        menuBtnRef.setAttribute('aria-expanded', !expanded);

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