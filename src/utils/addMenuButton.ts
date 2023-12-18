const addButton = () => {
  const buttonWrapper = document.querySelector(".site-header__icons-wrapper");
  if (buttonWrapper) {
    buttonWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="ca_toggle_button"></div>`
    );
  }
};

const toggleMenu = () => {
  const button = document.querySelector(".ca_toggle_button");
  if (button) {
    button.addEventListener("click", function () {
      const body = document.body;
      if (body) {
        body.classList.toggle("ca_active_menu");
      }
    });
  }
};

export function addButtonFunctionality() {
  addButton();
  toggleMenu();
}
