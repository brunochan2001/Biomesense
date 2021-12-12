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

// ONE CLICK
const toggleclick = document.querySelector(`.toggle-btn`);
const barra = document.querySelector(`.active-bg`);
const img2 = document.querySelector(`.visual-img-1`);
const logopanel1des = document.querySelector(`.logo-panel-1-des`);
const logopanel2des = document.querySelector(`.logo-panel-2-des`);
const logopanel1 = document.querySelector(`.logo-panel-1`);
const logopanel2 = document.querySelector(`.logo-panel-2`);
const img3 = document.querySelector(`.visual-img-2`);
const toggleclick2 = document.querySelector(`.toggle-btn-active`);

toggleclick.addEventListener(`click`, () => {
  barra.classList.toggle(`green`);
  img2.classList.toggle(`img-desactive`);
  img3.classList.add(`translate-4`);
  img2.classList.remove(`translate-4`);
  logopanel2des.classList.toggle(`logo-desactive`);
  logopanel1des.classList.toggle(`logo-desactive`);
  logopanel1.classList.toggle(`logo-desactive-1`);
  logopanel2.classList.toggle(`logo-desactive-1`);
  toggleclick.classList.toggle(`toggle-desactive`);
  toggleclick2.classList.remove(`toggle-desactive`);
  img3.classList.remove(`translate-5`);
});
toggleclick2.addEventListener(`click`, () => {
  barra.classList.toggle(`green`);
  logopanel1des.classList.remove(`logo-desactive`);
  logopanel2des.classList.add(`logo-desactive`);
  toggleclick.classList.toggle(`toggle-desactive`);
  toggleclick2.classList.toggle(`toggle-desactive`);
  img2.classList.toggle(`img-desactive`);
  img3.classList.remove(`translate-4`);
  img2.classList.add(`translate-4`);
  img3.classList.add(`translate-5`);
  logopanel1.classList.toggle(`logo-desactive-1`);
  logopanel2.classList.toggle(`logo-desactive-1`);
});
