const BURGER_OPENED_CLASSNAME = "burger_open";
const BURGER_BTN_OPENED_CLASSNAME = "burger-btn_open";
const BODY_FIXED_CLASSNAME = "body_fixed";
const POPUP_OPENED_CLASSNAME = "popup_open";

const bodyNode = document.querySelector("body");
const burgerNode = document.querySelector(".js-burger");
const burgerBtnNode = document.querySelector(".js-burger-btn");
// const burgerBtnCloseNode = document.querySelector(".js-burger-close-btn");
const burgerContentNode = document.querySelector(".js-burger__content");
const popupNode = document.querySelector(".js-request-window");
const popupContentNode = document.querySelector(".js-request__wrapper");
const popupBtnOpenNode = document.querySelector(".js-request_btn-open");
const popupBtnCloseNode = document.querySelector(".js-request_btn-close");

popupBtnOpenNode.addEventListener("click", togglePopup);
popupBtnCloseNode.addEventListener("click", togglePopup);

// popupNode.addEventListener("click", (event) => {
//   const isClickOutsideContent = !event
//     .composedPath()
//     .includes(popupContentNode);

//   if (isClickOutsideContent) {
//     togglePopup;
//   }
// });

function togglePopup() {
  popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);
  bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
}

burgerBtnNode.addEventListener("click", toggleBurger);
// burgerBtnCloseNode.addEventListener("click", toggleBurger);

burgerNode.addEventListener("click", (event) => {
  const isClickOutsideContent = !event
    .composedPath()
    .includes(burgerContentNode);
  console.log(event.target);

  if (isClickOutsideContent) {
    toggleBurger();
  }
});

function toggleBurger() {
  burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
  bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
  // burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
}
