// MENU DESPEGABLE
const menuclick = document.querySelector(`.menu-open`);
const menuactive = document.querySelector(`.nav-list`);
const menuactive2 = document.querySelector(`.menu-2-open`);
const texttranslate1 = document.querySelector(`.text-translate-1`);
const texttranslate2 = document.querySelector(`.text-translate-2`);
const texttranslate3 = document.querySelector(`.text-translate-3`);

menuclick.addEventListener(`click`, () => {
  menuactive.classList.toggle(`nav-list-active`);
  menuclick.classList.toggle(`menu-open-desactive`);
  menuactive2.classList.add(`menu-2-open-active`);
  texttranslate1.classList.add(`translate`);
  texttranslate2.classList.add(`translate`);
  texttranslate3.classList.add(`translate`);
});

menuactive2.addEventListener(`click`, () => {
  menuactive.classList.toggle(`nav-list-active`);
  menuactive2.classList.remove(`menu-2-open-active`);
  menuclick.classList.remove(`menu-open-desactive`);
  texttranslate1.classList.remove(`translate`);
  texttranslate2.classList.remove(`translate`);
  texttranslate3.classList.remove(`translate`);
});
