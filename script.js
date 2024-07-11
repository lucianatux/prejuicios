document.addEventListener("DOMContentLoaded", function () {
  const tutorialStep = document.getElementById("tutorial-step");
  const contentDiv = document.getElementById("content-div");
  const prejudicesSelect = document.getElementById("prejudices-select");
  const endButton = document.getElementById("end-button");

  const steps = [
    "Esta experiencia interactiva te mostrará cómo nuestros prejuicios pueden cambiar nuestra interpretación de las acciones de los demás.",
    "Selecciona las distintas creencias, prejuicios.<br><br>Observa como cambian tus diálogos mentales y tu percepción de la realidad",
    "¿Notaste cómo tu percepción de la historia cambió según tus prejuicios?<br><br>Esta experiencia nos recuerda que debemos ser conscientes de cómo nuestras opiniones sobre las personas pueden distorsionar nuestra interpretación de sus acciones."
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
    hideElement(endButton);
    showElement(tutorialStep);
  });
  


  prejudicesSelect.addEventListener("change", function () {
    const selectedValue = prejudicesSelect.value;
    const selectedThought = document.getElementById(selectedValue);

    // Hide the current thought if there is one
    if (currentThought) {
      hideElement(currentThought);
    }

    // Show the new thought
    if (selectedThought) {
      setTimeout(() => {
        showElement(selectedThought);
        currentThought = selectedThought; // Update the current thought
      }, 1000); // Coincide con la duración de la transición CSS
    }
  });

  // Show the end button after selecting a thought
  prejudicesSelect.addEventListener("change", function () {
    showElement(endButton);
  });
});
