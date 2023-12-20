const addButton = () => {
  const buttonWrapper = document.querySelector('.site-header__icons-wrapper');
  if (buttonWrapper) {
    buttonWrapper.insertAdjacentHTML('beforeend', `<div class="ca_toggle_button"></div>`);
  }
};

const toggleMenu = () => {
  const button = document.querySelector('.ca_toggle_button');
  if (button) {
    button.addEventListener('click', function () {
      const body = document.body;
      if (body) {
        body.classList.toggle('ca_active_menu');
      }
    });
  }
};

const toggleDropdown = () => {
  const button = document.querySelector('.ca_dropdown_toggle_button');
  const buttonParent = document.querySelector('.ca_dropdown_toggle_elements-wrapper');
  if (button && buttonParent) {
    button.addEventListener('click', function () {
      const body = document.body;
      if (body) {
        buttonParent.classList.toggle('ca_active_dropdown');
      }
    });
  }
};

export function addButtonFunctionality() {
  addButton();
  toggleMenu();
  toggleDropdown();
}
