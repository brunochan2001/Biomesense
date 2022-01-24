window.addEventListener(`scroll`, function () {
    const animacion = this.document.getElementById(`transition`);
    const posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);

    let tamañodePantallamovil = window.innerHeight / 1.3;

    if (posicionObj1 < tamañodePantallamovil) {
      animacion.style.animation = `translate 1.5s ease-out`;
    }
  });
// Segundo
window.addEventListener(`scroll`, function () {
    const animacion1 = this.document.getElementById(`transition-2`);
    const posicionObj1 = animacion1.getBoundingClientRect().top;
    console.log(posicionObj1);

    let tamañodePantallamovil = window.innerHeight / 1.3;

    if (posicionObj1 < tamañodePantallamovil) {
      animacion1.style.animation = `translate 1.5s ease-out`;
    }
  });
// tercero
window.addEventListener(`scroll`, function () {
    const animacion2 = this.document.getElementById(`transition-3`);
    const posicionObj1 = animacion2.getBoundingClientRect().top;
    console.log(posicionObj1);

    let tamañodePantallamovil = window.innerHeight / 1.3;

    if (posicionObj1 < tamañodePantallamovil) {
      animacion2.style.animation = `translate 1.5s ease-out`;
    }
  });

// cuarto
window.addEventListener(`scroll`, function () {
    const animacion3 = this.document.getElementById(`transition-4`);
    const posicionObj1 = animacion3.getBoundingClientRect().top;
    console.log(posicionObj1);

    let tamañodePantallamovil = window.innerHeight / 1.3;

    if (posicionObj1 < tamañodePantallamovil) {
      animacion3.style.animation = `translate 1.5s ease-out`;
    }
  });
// quinto
window.addEventListener(`scroll`, function () {
    const animacion4 = this.document.getElementById(`transition-5`);
    const posicionObj1 = animacion4.getBoundingClientRect().top;
    console.log(posicionObj1);

    let tamañodePantallamovil = window.innerHeight / 1.3;

    if (posicionObj1 < tamañodePantallamovil) {
      animacion4.style.animation = `translate 3s ease-out`;
    }
  });
// Sexto
window.addEventListener(`scroll`, function () {
    const animacion5 = this.document.getElementById(`transition-6`);
    const posicionObj1 = animacion5.getBoundingClientRect().top;
    console.log(posicionObj1);

    let tamañodePantallamovil = window.innerHeight / 1.3;

    if (posicionObj1 < tamañodePantallamovil) {
      animacion5.style.animation = `translate-1 1.5s ease-out`;
    }
  });
  // Sexto-1
window.addEventListener(`scroll`, function () {
    const animacion5 = this.document.getElementById(`transition-6-1`);
    const posicionObj1 = animacion5.getBoundingClientRect().top;
    console.log(posicionObj1);

    let tamañodePantallamovil = window.innerHeight / 1.3;

    if (posicionObj1 < tamañodePantallamovil) {
      animacion5.style.animation = `translate 1.5s ease-out`;
    }
  });


