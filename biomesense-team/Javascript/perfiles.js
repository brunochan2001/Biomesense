// Body
const body = document.querySelector(`.body-active`);

// Botones perfiles
const jackclick = document.querySelector(`.btn-jack`);
const kevinclick = document.querySelector(`.btn-kevin`);
const dylanclick = document.querySelector(`.btn-dylan`);
const baezaclick = document.querySelector(`.btn-baeza`);
const bodduclick = document.querySelector(`.btn-boddu`);
const madisonclick = document.querySelector(`.btn-madison`);
const haldarclick = document.querySelector(`.btn-haldar`);
const robclick = document.querySelector(`.btn-rob`);
const charlesclick = document.querySelector(`.btn-charles`);

// Descripciones
const jackactive = document.querySelector(`.jack-description`);
const kevinactive = document.querySelector(`.kevin-description`);
const dylanactive = document.querySelector(`.dylan-description`);
const baezaactive = document.querySelector(`.baeza-description`);
const bodduactive = document.querySelector(`.boddu-description`);
const madisonactive = document.querySelector(`.madison-description`);
const haldaractive = document.querySelector(`.haldar-description`);
const robactive = document.querySelector(`.rob-description`);
const charlesactive = document.querySelector(`.charles-description`);

// Barra de navegacion
const header = document.querySelector(`.container-header`);
const header2 = document.querySelector(`.navigation-desactive`);
const menuclose = document.querySelector(`.menu-close`);

// Click en el boton

jackclick.addEventListener(`click`, () => {
  jackactive.classList.toggle(`ocultar-description`);
  header.classList.toggle(`navigation-desactive`);
  header2.classList.toggle(`navigation-1`);
  body.classList.toggle(`body-desactive`);
});

kevinclick.addEventListener(`click`, () => {
  kevinactive.classList.toggle(`ocultar-description`);
  header.classList.toggle(`navigation-desactive`);
  header2.classList.toggle(`navigation-1`);
  body.classList.toggle(`body-desactive`);
});

dylanclick.addEventListener(`click`, () => {
  dylanactive.classList.toggle(`ocultar-description`);
  header.classList.toggle(`navigation-desactive`);
  header2.classList.toggle(`navigation-1`);
  body.classList.toggle(`body-desactive`);
});

baezaclick.addEventListener(`click`, () => {
  baezaactive.classList.toggle(`ocultar-description`);
  header.classList.toggle(`navigation-desactive`);
  header2.classList.toggle(`navigation-1`);
  body.classList.toggle(`body-desactive`);
});

bodduclick.addEventListener(`click`, () => {
  bodduactive.classList.toggle(`ocultar-description`);
  header.classList.toggle(`navigation-desactive`);
  header2.classList.toggle(`navigation-1`);
  body.classList.toggle(`body-desactive`);
});

madisonclick.addEventListener(`click`, () => {
  madisonactive.classList.toggle(`ocultar-description`);
  header.classList.toggle(`navigation-desactive`);
  header2.classList.toggle(`navigation-1`);
});

haldarclick.addEventListener(`click`, () => {
  haldaractive.classList.toggle(`ocultar-description`);
  header.classList.toggle(`navigation-desactive`);
  header2.classList.toggle(`navigation-1`);
  body.classList.toggle(`body-desactive`);
});

robclick.addEventListener(`click`, () => {
  robactive.classList.toggle(`ocultar-description`);
  header.classList.toggle(`.navigation-desactive`);
  header2.classList.toggle(`navigation-1`);
  body.classList.toggle(`body-desactive`);
});
charlesclick.addEventListener(`click`, () => {
  charlesactive.classList.toggle(`ocultar-description`);
  header.classList.toggle(`.navigation-desactive`);
  header2.classList.toggle(`navigation-1`);
  body.classList.toggle(`body-desactive`);
});

// Click al close
menuclose.addEventListener(`click`, () => {
  charlesactive.classList.remove(`ocultar-description`);
  robactive.classList.remove(`ocultar-description`);
  jackactive.classList.remove(`ocultar-description`);
  kevinactive.classList.remove(`ocultar-description`);
  dylanactive.classList.remove(`ocultar-description`);
  baezaactive.classList.remove(`ocultar-description`);
  bodduactive.classList.remove(`ocultar-description`);
  madisonactive.classList.remove(`ocultar-description`);
  haldaractive.classList.remove(`ocultar-description`);
  body.classList.remove(`body-desactive`);
  header.classList.remove(`navigation-desactive`);
  header2.classList.remove(`navigation-1`);
});
