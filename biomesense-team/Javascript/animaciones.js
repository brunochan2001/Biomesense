// Animaciones de la pagina principal
window.addEventListener(`scroll`, function () {
  const animacion1 = this.document.getElementById(`transition-1`);
  const posicionObj1 = animacion1.getBoundingClientRect().top;
  console.log(posicionObj1);

  let tamañodePantallamovil = window.innerHeight / 1;

  if (posicionObj1 < tamañodePantallamovil) {
    animacion1.style.animation = `translate 1s ease-out`;
  }
});
window.addEventListener(`scroll`, function () {
  const animacion2 = this.document.getElementById(`transition-2`);
  const posicionObj1 = animacion2.getBoundingClientRect().top;
  console.log(posicionObj1);

  let tamañodePantallamovil = window.innerHeight / 1.3;

  if (posicionObj1 < tamañodePantallamovil) {
    animacion2.style.animation = `translate 1s ease-out`;
  }
});
window.addEventListener(`scroll`, function () {
  const animacion3 = this.document.getElementById(`transition-3`);
  const posicionObj1 = animacion3.getBoundingClientRect().top;
  console.log(posicionObj1);

  let tamañodePantallamovil = window.innerHeight / 1.3;

  if (posicionObj1 < tamañodePantallamovil) {
    animacion3.style.animation = `translate 1s ease-out`;
  }
});
window.addEventListener(`scroll`, function () {
  const animacion4 = this.document.getElementById(`transition-4`);
  const posicionObj1 = animacion4.getBoundingClientRect().top;
  console.log(posicionObj1);

  let tamañodePantallamovil = window.innerHeight / 1.3;

  if (posicionObj1 < tamañodePantallamovil) {
    animacion4.style.animation = `translate 1s ease-out`;
  }
});
window.addEventListener(`scroll`, function () {
  const animacion5 = this.document.getElementById(`transition-5`);
  const posicionObj1 = animacion5.getBoundingClientRect().top;
  console.log(posicionObj1);

  let tamañodePantallamovil = window.innerHeight / 1.3;

  if (posicionObj1 < tamañodePantallamovil) {
    animacion5.style.animation = `translate-2 1s ease-out`;
  }
});
window.addEventListener(`scroll`, function () {
  const animacion6 = this.document.getElementById(`transition-6`);
  const posicionObj1 = animacion6.getBoundingClientRect().top;
  console.log(posicionObj1);

  let tamañodePantallamovil = window.innerHeight / 1.3;

  if (posicionObj1 < tamañodePantallamovil) {
    animacion6.style.animation = `translate 1s ease-out`;
  }
});
