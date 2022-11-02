const steps = document.querySelectorAll(".step");
const barra = document.getElementById("barra");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const parrafo = document.getElementById('p');

let currentStep = 1;
nextButton.addEventListener("click", () => {
  if (currentStep < steps.length) {
    currentStep++;
    updateProgress();
  }
});

prevButton.addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep--;
    updateProgress();
  }
});

/* funcion de actualizar los pasos */
function updateProgress() {

  /* actualizar los steps */
  steps.forEach((step, index) => {//((step,0))
    if (index < currentStep) {//si la posicion es menor al numero de la bolita(0<1)
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  /* actualizar la barra */
  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;
  barra.style.width = `${progress}%`;

  /* activar o desactivar bottones */
  if (currentStep === steps.length) {
    nextButton.disabled = true;

  } else if (currentStep === 1) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = nextButton.disabled = false;
  }

  switch (currentStep) {
    case 1:
      parrafo.innerText = "STEP UNO";
      break;
    case 2:
      parrafo.innerText = 'STEP DOS';
      parrafo.style.border = '3px solid green';
      parrafo.style.color = 'green';
      break;
    case 3:
      parrafo.innerText = "STEP TRES";
      parrafo.style.border = '3px solid blue';
      parrafo.style.color = 'blue';
      break;
    case 4:
      parrafo.innerText = "STEP CUATRO";
      parrafo.style.border = '3px solid orange';
      parrafo.style.color = 'orange';
      break;
    case 5:
      parrafo.innerText = "STEP CINCO";
      parrafo.style.border = '3px solid violet';
      parrafo.style.color = 'violet';
      break;
    case 6:
      parrafo.innerText = "STEP SEIS";
      parrafo.style.border = '3px solid aqua';
      parrafo.style.color = 'aqua';
      break;
  }

}
