document.addEventListener("DOMContentLoaded", function () {
  const tutorialStep = document.getElementById("tutorial-step");
  const contentDiv = document.getElementById("content-div");
  const contentDiv2 = document.getElementById("content-div2");
  const contentDiv3 = document.getElementById("content-div3"); // Corrige el ID aquí
  const prejudicesSelect = document.getElementById("prejudices-select");
  const imgOne = document.getElementById('img-one');
  const imgTwo = document.getElementById('img-two');
  const nextButton = document.getElementById("next-button");
  const endButton = document.getElementById("end-button");

  const steps = [
    "Esta experiencia interactiva te mostrará cómo nuestros prejuicios e ideas pueden cambiar nuestra interpretación de las acciones de los demás.",
    "Selecciona las distintas creencias, prejuicios.<br><br>Observa como cambian tus diálogos mentales y tu percepción de la realidad",
    "¿Notaste cómo tu percepción de la historia cambió según tu subjetividad?<br><br>Esta experiencia nos recuerda que debemos ser conscientes de cómo nuestras opiniones, creencias, temores, gustos, etc. pueden distorsionar nuestra interpretación del mundo que nos rodea."
  ];

  let currentThought = null; // Variable para almacenar el pensamiento actual

  function showElement(element) {
    element.style.display = "block";
    setTimeout(() => {
      element.classList.add("unfade");
      element.classList.remove("fade");
    }, 10); // Pequeño retraso para asegurar que la transición se aplique
  }

  function hideElement(element) {
    element.classList.add("fade");
    element.classList.remove("unfade");
    setTimeout(() => {
      element.style.display = "none"; // Después de la transición, oculta el elemento
    }, 1000); // Espera el tiempo de la transición (1s en este caso)
  }

  function updateTutorialStep(index) {
    hideElement(tutorialStep);
    setTimeout(() => {
      tutorialStep.innerHTML = steps[index];
      showElement(tutorialStep);
    }, 1000); // Ajusta la duración según sea necesario
  }

  // Step 1: Show the first tutorial step
  updateTutorialStep(0);

  setTimeout(() => {
    updateTutorialStep(1);
    showElement(contentDiv);
  }, 5000); // Ajusta la duración según sea necesario

  endButton.addEventListener("click", function () {
    updateTutorialStep(2);
    hideElement(contentDiv);
    hideElement(nextButton);
    hideElement(endButton);
    showElement(tutorialStep);
  });

  prejudicesSelect.addEventListener("change", function () {
    const selectedValue = prejudicesSelect.value;
    const selectedThought = document.getElementById(selectedValue);

    // Cambiar la imagen de fondo según la opción seleccionada
    let backgroundImage = '';

    switch (selectedValue) {
      case 'thought-1':
        backgroundImage = 'url("listenlike.png")';
        imgTwo.style.backgroundImage = backgroundImage;
        imgOne.style.backgroundImage = 'url("listen1.png")';
        break;
      case 'thought-2':
        backgroundImage = 'url("listennotlike.png")';
        imgTwo.style.backgroundImage = backgroundImage;
        imgOne.style.backgroundImage = 'url("listen1.png")';
        break;
      case 'thought-3':
        backgroundImage = 'url("listenlike.png")';
        imgOne.style.backgroundImage = backgroundImage;
        imgTwo.style.backgroundImage = 'url("listen1.png")';
        break;
      case 'thought-4':
        backgroundImage = 'url("listennotlike.png")';
        imgOne.style.backgroundImage = backgroundImage;
        imgTwo.style.backgroundImage = 'url("listen1.png")';
        break;
      default:
        backgroundImage = '';
    }

    // Ocultar el pensamiento actual si hay uno
    if (currentThought) {
      hideElement(currentThought);
    }

    // Mostrar el nuevo pensamiento
    if (selectedThought) {
      setTimeout(() => {
        showElement(selectedThought);
        currentThought = selectedThought; // Actualizar el pensamiento actual
      }, 1000); // Coincide con la duración de la transición CSS
    }
  });

  // Show the end button after selecting a thought
  prejudicesSelect.addEventListener("change", function () {
    showElement(nextButton);
    showElement(endButton);
  });

  // Elementos de contenido en un array
  const contents = [contentDiv, contentDiv2, contentDiv3];
  let currentIndex = 0;

  // Función para mostrar el siguiente contenido
  nextButton.addEventListener("click", function () {
    // Oculta el contenido actual
    hideElement(contents[currentIndex]);
    
    // Incrementa el índice
    currentIndex = (currentIndex + 1) % contents.length;
    
    // Muestra el siguiente contenido
    setTimeout(() => {
      showElement(contents[currentIndex]);
    }, 1000); // Espera el tiempo de la transición (1s en este caso)
  });
});
