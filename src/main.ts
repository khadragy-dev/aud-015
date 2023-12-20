import './style.css';
import { addButtonFunctionality } from './utils/addMenuButton';
import waitForElm from './utils/waitForElm';

function addChanges() {
  const wrapperEle = document.querySelector('header.site-header');
  const newAppEle = document.querySelector('.ca_aud_015');
  const body = document.body;

  if (newAppEle) {
    return;
  }
  if (wrapperEle) {
    const body = document.querySelector('body');
    if (!body) return;
    body.classList.add('ca_aud_015');
  }

  if (body) {
    body.insertAdjacentHTML(
      'beforeend',
      `
      <div class="ca_menu">
        <ul class="ca_menu_list_wrapper">
          <li>
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.7408 12.8078L12.7418 3.30089C12.3628 2.8997 11.6349 2.8997 11.2559 3.30089L2.25696 12.8078C2.12743 12.9443 2.0424 13.1137 2.01223 13.2953C1.98205 13.4769 2.00802 13.6629 2.08697 13.8307C2.24696 14.1739 2.60492 14.3945 2.99987 14.3945H4.99965V21.0493C4.99965 21.3014 5.10499 21.5433 5.29251 21.7215C5.48002 21.8998 5.73435 22 5.99954 22H8.9992C9.26439 22 9.51871 21.8998 9.70623 21.7215C9.89374 21.5433 9.99909 21.3014 9.99909 21.0493V17.2466H13.9986V21.0493C13.9986 21.3014 14.104 21.5433 14.2915 21.7215C14.479 21.8998 14.7333 22 14.9985 22H17.9982C18.2634 22 18.5177 21.8998 18.7052 21.7215C18.8927 21.5433 18.9981 21.3014 18.9981 21.0493V14.3945H20.9979C21.1915 14.3953 21.3812 14.3425 21.5438 14.2425C21.7065 14.1426 21.835 13.9998 21.9137 13.8316C21.9925 13.6634 22.0181 13.477 21.9874 13.2952C21.9567 13.1134 21.871 12.9441 21.7408 12.8078Z" fill="#25282B"/>
              </svg>
            </div>
            <a href="/">Home</a>
          </li>
          <li class="ca_dropdown_toggle_list">
            <div class="ca_dropdown_toggle_elements-wrapper">
              <div class="ca_dropdown_toggle_button">
                <div class="d-flex">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.27274 15.1257V19.6958C3.27274 21.1662 4.46929 22.3628 5.9398 22.3628C7.41027 22.3628 8.60682 21.1662 8.60682 19.6958V16.7188C8.15991 16.8269 7.70579 16.8845 7.25888 16.8845C5.68027 16.8845 4.26026 16.207 3.27274 15.1257Z" fill="#25282B"/>
                  <path d="M7.25888 7.47055C5.06037 7.47055 3.27274 9.25823 3.27274 11.4567C3.27274 13.6553 5.06037 15.4429 7.25888 15.4429C9.39976 15.4429 11.8938 13.6985 11.8938 11.4567C11.8938 9.20777 9.39976 7.47055 7.25888 7.47055ZM9.25558 12.1055C9.25558 12.5019 8.9312 12.8263 8.53476 12.8263C8.1311 12.8263 7.81393 12.5019 7.81393 12.1055V10.808C7.81393 10.4115 8.1311 10.0872 8.53476 10.0872C8.9312 10.0872 9.25558 10.4115 9.25558 10.808V12.1055Z" fill="#25282B"/>
                  <path d="M16.4781 16.7188V19.6958C16.4781 21.1662 17.6747 22.3628 19.1452 22.3628C20.6157 22.3628 21.8122 21.1662 21.8122 19.6958V15.1257C20.8247 16.207 19.4047 16.8845 17.8261 16.8845C17.3792 16.8845 16.9251 16.8269 16.4781 16.7188Z" fill="#25282B"/>
                  <path d="M21.8122 11.4567C21.8122 9.25823 20.0245 7.47055 17.826 7.47055C15.6852 7.47055 13.1911 9.20777 13.1911 11.4567C13.1911 13.6985 15.6852 15.4429 17.826 15.4429C20.0245 15.4429 21.8122 13.6553 21.8122 11.4567ZM15.8293 10.808C15.8293 10.4115 16.1537 10.0872 16.5502 10.0872C16.9538 10.0872 17.271 10.4115 17.271 10.808V12.1055C17.271 12.5019 16.9538 12.8263 16.5502 12.8263C16.1537 12.8263 15.8293 12.5019 15.8293 12.1055V10.808Z" fill="#25282B"/>
                  <path d="M10.1688 4.6044C11.4781 3.2958 13.6068 3.2958 14.9161 4.6044C15.0569 4.74519 15.2414 4.81558 15.4258 4.81558C15.6102 4.81558 15.7947 4.74519 15.9354 4.6044C16.217 4.32283 16.217 3.86668 15.9354 3.58511C14.0644 1.71406 11.0206 1.71406 9.14953 3.58511C8.86796 3.86668 8.86796 4.32283 9.14953 4.6044C9.43111 4.88598 9.88725 4.88598 10.1688 4.6044Z" fill="#25282B"/>
                  <path d="M10.1104 5.75744C9.82881 6.03901 9.82881 6.49516 10.1104 6.77673C10.392 7.0583 10.8481 7.0583 11.1297 6.77673C11.9082 5.99818 13.1767 5.99818 13.9553 6.77673C14.096 6.91752 14.2805 6.98791 14.4649 6.98791C14.6493 6.98791 14.8338 6.91752 14.9745 6.77673C15.2561 6.49516 15.2561 6.03901 14.9745 5.75744C13.6343 4.41645 11.4507 4.41645 10.1104 5.75744Z" fill="#25282B"/>
                  <path d="M12.5566 7.32088H12.5496C12.1518 7.32088 11.8322 7.64363 11.8322 8.0417C11.8322 8.43978 12.1589 8.76253 12.5566 8.76253C12.955 8.76253 13.2774 8.43978 13.2774 8.0417C13.2774 7.64363 12.955 7.32088 12.5566 7.32088Z" fill="#25282B"/>
                  </svg>
                </div>
                <a>Hearing Aids</a>
              </div>
              <div class="ca-dropdown-toggle-arrows-wrapper">
                <div class="ca_dropdown_toggle_arrow_up">
                  <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 6.00001C10.9997 6.29649 10.9116 6.58624 10.7468 6.83267C10.5819 7.0791 10.3478 7.27116 10.0738 7.38458C9.79992 7.498 9.49852 7.52771 9.20773 7.46994C8.91693 7.41217 8.64977 7.26952 8.44 7.06001L5.5 4.12001L2.56 7.06001C2.27565 7.32497 1.89956 7.46921 1.51095 7.46236C1.12235 7.4555 0.751581 7.29808 0.476755 7.02325C0.201929 6.74842 0.0445046 6.37765 0.0376482 5.98905C0.0307917 5.60045 0.175038 5.22436 0.439998 4.94001L4.44 0.940006C4.72125 0.659105 5.1025 0.501326 5.5 0.501326C5.8975 0.501326 6.27875 0.659105 6.56 0.940006L10.56 4.94001C10.8414 5.22104 10.9996 5.60232 11 6.00001Z" fill="#454A4E"/>
                  </svg>
                </div>
                <div class="ca_dropdown_toggle_arrow_down">
                  <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 1.99999C10.9997 1.70351 10.9116 1.41376 10.7468 1.16733C10.5819 0.920898 10.3478 0.728843 10.0738 0.61542C9.79992 0.501997 9.49852 0.472295 9.20773 0.530063C8.91693 0.587832 8.64977 0.730481 8.44 0.939994L5.5 3.87999L2.56 0.939994C2.27565 0.675034 1.89956 0.530787 1.51095 0.537644C1.12235 0.5445 0.751581 0.701924 0.476755 0.97675C0.201929 1.25158 0.0445046 1.62235 0.0376482 2.01095C0.0307917 2.39955 0.175038 2.77564 0.439998 3.05999L4.44 7.05999C4.72125 7.34089 5.1025 7.49867 5.5 7.49867C5.8975 7.49867 6.27875 7.34089 6.56 7.05999L10.56 3.05999C10.8414 2.77896 10.9996 2.39768 11 1.99999Z" fill="#454A4E"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="ca_dropdown_toggle_expanded-content-wrapper">
              <div class="d-flex">
                <a href="https://audienhearing.com/pages/audien-atom-2">Atom 2 Series (in-the-ear)</a>
                <p class="ca-dropdown_toggle_secondary_text">new</p>
              </div>
              <div class="d-flex">
                <a href="https://audienhearing.com/pages/buy">Atom  Series (in-the-ear)</a>
              </div>
              <div class="d-flex">
                <a href="https://audienhearing.com/pages/bte">BTE  Series (behind-the-ear)</a>
              </div>
            </div>
          </li>
          <li>
            <div>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.1794 5.73172C13.5471 5.73172 13.9017 5.78636 14.2392 5.88195V2.75067C14.2392 1.78546 13.4585 1 12.4932 1H9.36566C8.40042 1 7.61496 1.78546 7.61496 2.75067V5.88282C7.95392 5.78659 8.31015 5.73172 8.67954 5.73172H13.1794Z" fill="#25282B"/>
              <path d="M13.1795 6.67793H8.67969C7.05202 6.67793 5.72244 8.00281 5.72244 9.63045L5.72238 19.1767C5.72238 20.388 6.7113 21.3721 7.91785 21.3721H13.9412C15.1477 21.3721 16.1319 20.388 16.1319 19.1767L16.132 9.63045C16.132 8.00281 14.8071 6.67793 13.1795 6.67793Z" fill="#25282B"/>
              <path d="M9.82539 20.6144L9.30132 20.6144L9.30132 18.4592C9.30132 17.8744 8.82749 17.4 8.24212 17.4C7.84921 17.4 7.50656 17.6137 7.32371 17.9311C7.14086 17.6137 6.79822 17.4 6.40531 17.4C6.0124 17.4 5.66976 17.6137 5.48691 17.9311C5.30406 17.6137 4.96141 17.4 4.5685 17.4C4.1756 17.4 3.83295 17.6137 3.6501 17.9311C3.46725 17.6137 3.1246 17.4 2.7317 17.4C2.14632 17.4 1.6725 17.8744 1.6725 18.4592L1.6725 20.6237C1.15379 20.6925 0.754095 21.1365 0.754095 21.6736C0.754095 22.2584 1.22792 22.7328 1.8133 22.7328L10.0789 22.7328C10.2455 22.7328 10.4098 22.6935 10.5583 22.6182L10.5587 22.618L14.4653 20.6334L22.9366 20.6334C23.5219 20.6334 23.9958 20.159 23.9958 19.5742C23.9958 18.9895 23.5219 18.515 22.9366 18.515L14.2117 18.515C14.0451 18.515 13.8809 18.5544 13.7324 18.6297L13.7319 18.6299L9.82539 20.6144Z" fill="#25282B" stroke="white" stroke-width="1.2"/>
              </svg>
            </div>
            <a href="/collections/accessories">Accessories</a>
          </li>
          <li>
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3628 5.637C16.7337 4.008 14.4836 3 11.9994 3C9.51522 3 7.26506 4.008 5.63595 5.637C3.86583 7.407 2.83076 9.912 3.02278 12.648C3.3558 17.397 7.47508 21 12.2364 21H18.1918C19.7429 21 21 19.743 21 18.192V12C21 9.516 19.9919 7.266 18.3628 5.637ZM12.6414 17.655C12.4704 17.832 12.2424 17.922 11.9994 17.922C11.8794 17.922 11.7624 17.904 11.6544 17.856C11.5374 17.808 11.4413 17.742 11.3573 17.655C11.1863 17.487 11.0903 17.256 11.0903 17.013C11.0903 16.776 11.1863 16.539 11.3573 16.371C11.6904 16.032 12.3114 16.032 12.6444 16.371C12.8154 16.539 12.9114 16.776 12.9114 17.013C12.9084 17.256 12.8124 17.487 12.6414 17.655ZM13.0825 13.248C12.9805 13.278 12.9084 13.395 12.9084 13.521V13.989C12.9084 14.49 12.5004 14.898 11.9994 14.898C11.4984 14.898 11.0903 14.49 11.0903 13.989V13.521C11.0903 12.6 11.6904 11.775 12.5484 11.508C13.3255 11.268 14.0305 10.425 13.8055 9.336C13.6615 8.643 13.1005 8.082 12.4104 7.941C11.8374 7.824 11.2763 7.953 10.8383 8.31C10.4033 8.664 10.1573 9.186 10.1573 9.744C10.1573 10.245 9.74923 10.653 9.2482 10.653C8.74717 10.653 8.33914 10.245 8.33914 9.744C8.33914 8.634 8.83117 7.599 9.69223 6.9C10.5533 6.201 11.6784 5.931 12.7824 6.159C14.1745 6.447 15.3026 7.575 15.5906 8.967C15.9777 10.845 14.9006 12.687 13.0825 13.248Z" fill="#25282B"/>
              </svg>
            </div>
            <a href="https://audienhearing.com/pages/support">Support</a>
          </li>
          <li>
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.26719 20.2781H3.29907C3.51076 20.842 3.88874 21.3283 4.38295 21.6725C4.87717 22.0168 5.4643 22.2028 6.06658 22.2059C6.67077 22.2111 7.26169 22.0287 7.75778 21.6837C8.25388 21.3388 8.6307 20.8485 8.83626 20.2803H11.6426C11.8552 20.8451 12.2346 21.3319 12.7305 21.6758C13.2264 22.0198 13.8153 22.2047 14.4188 22.2059C15.023 22.2111 15.6139 22.0287 16.11 21.6837C16.6061 21.3388 16.9829 20.8485 17.1885 20.2803H18.406C18.7423 20.2797 19.0646 20.1457 19.3022 19.9077C19.5397 19.6698 19.6732 19.3472 19.6732 19.0109V13.8299C19.1715 14.2448 18.5337 14.4588 17.8832 14.4305C17.2328 14.4022 16.616 14.1336 16.1523 13.6767C14.816 12.3642 12.6464 9.81899 12.2838 6.87014H9.74293C9.40683 6.87014 9.08439 7.00321 8.84612 7.24027C8.60786 7.47732 8.47314 7.79907 8.47143 8.13517V8.28196H5.36283C5.13622 8.28133 4.91316 8.33823 4.71456 8.44735C4.51595 8.55647 4.34831 8.71423 4.22733 8.90584L1.31518 13.4932C1.10989 13.8158 1.00058 14.1902 1 14.5726V19.0109C1.00057 19.3468 1.13426 19.6688 1.37178 19.9063C1.6093 20.1439 1.93128 20.2776 2.26719 20.2781ZM14.4188 18.1474C14.7104 18.1524 14.9886 18.2705 15.1948 18.4767C15.401 18.6829 15.5191 18.9611 15.5241 19.2527C15.5241 19.4713 15.4592 19.685 15.3378 19.8668C15.2163 20.0485 15.0437 20.1902 14.8418 20.2739C14.6398 20.3575 14.4176 20.3794 14.2031 20.3368C13.9887 20.2941 13.7918 20.1888 13.6372 20.0343C13.4827 19.8797 13.3774 19.6828 13.3347 19.4684C13.2921 19.254 13.314 19.0317 13.3976 18.8298C13.4813 18.6278 13.623 18.4552 13.8047 18.3337C13.9865 18.2123 14.2002 18.1474 14.4188 18.1474ZM6.06658 20.3645C5.77329 20.3595 5.4934 20.2407 5.28598 20.0333C5.07856 19.8259 4.95982 19.546 4.95483 19.2527C4.95766 18.9593 5.07591 18.6789 5.28397 18.472C5.49204 18.2652 5.77319 18.1486 6.06658 18.1474C6.35988 18.1524 6.63976 18.2712 6.84719 18.4786C7.05461 18.686 7.17334 18.9659 7.17834 19.2592C7.1755 19.5526 7.05726 19.833 6.84919 20.0399C6.64112 20.2468 6.35997 20.3634 6.06658 20.3645ZM3.43291 13.5385L5.4902 10.3004C5.51294 10.264 5.54488 10.2343 5.58278 10.2142C5.62068 10.1941 5.66321 10.1844 5.70607 10.186H7.57123C7.63593 10.186 7.69797 10.2117 7.74372 10.2574C7.78947 10.3032 7.81517 10.3652 7.81517 10.4299V13.668C7.81517 13.7327 7.78947 13.7948 7.74372 13.8405C7.69797 13.8863 7.63593 13.912 7.57123 13.912H3.63799C3.59456 13.9117 3.552 13.8998 3.51469 13.8776C3.47739 13.8553 3.4467 13.8235 3.4258 13.7855C3.40489 13.7474 3.39453 13.7044 3.39578 13.661C3.39703 13.6176 3.40985 13.5753 3.43291 13.5385Z" fill="#25282B"/>
              <path d="M17.9959 2C17.9096 2 17.8225 2 17.7347 2C16.7042 2.07555 15.7408 2.53991 15.0398 3.29905C14.3388 4.0582 13.9525 5.05538 13.9591 6.08867C13.985 8.79574 16.2344 11.3409 17.3656 12.4527C17.5352 12.6194 17.7635 12.7129 18.0013 12.7129C18.2392 12.7129 18.4675 12.6194 18.6371 12.4527C19.7747 11.3344 22.0414 8.76336 22.0414 6.04118C22.0414 5.51012 21.9367 4.98427 21.7334 4.49369C21.53 4.00311 21.232 3.55742 20.8563 3.18211C20.4805 2.80679 20.0345 2.50921 19.5437 2.30638C19.0529 2.10354 18.527 1.99943 17.9959 2ZM17.9959 7.65592C17.6761 7.65592 17.3635 7.56109 17.0976 7.38342C16.8317 7.20576 16.6245 6.95323 16.5021 6.65778C16.3797 6.36233 16.3477 6.03723 16.4101 5.72358C16.4725 5.40993 16.6265 5.12182 16.8526 4.8957C17.0787 4.66957 17.3668 4.51557 17.6805 4.45319C17.9941 4.3908 18.3192 4.42282 18.6147 4.5452C18.9101 4.66758 19.1627 4.87482 19.3403 5.14072C19.518 5.40662 19.6128 5.71923 19.6128 6.03902C19.6131 6.25154 19.5715 6.46202 19.4904 6.65844C19.4092 6.85487 19.2902 7.03337 19.14 7.18374C18.9898 7.33411 18.8115 7.4534 18.6152 7.5348C18.4189 7.61619 18.2084 7.65808 17.9959 7.65808V7.65592Z" fill="#25282B"/>
              </svg>
            </div>
            <a href="https://audienhearing.com/pages/order-tracking/">Track Order</a>
          </li>
          <li>
            <div>Shop hearing aids</div>
          </li>
        </ul>
      </div>
    `
    );
  }

  addButtonFunctionality();
}

waitForElm('header.site-header').then((_elm) => {
  const newEle = document.querySelector('.ca_aud_015');
  if (!newEle) {
    addChanges();
  }
});
