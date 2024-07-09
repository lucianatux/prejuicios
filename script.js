
  document.addEventListener('DOMContentLoaded', function() {
    const tutorialStep1 = document.getElementById('tutorial-step-1');
    const tutorialStep2 = document.getElementById('tutorial-step-2');
    const tutorialStep3 = document.getElementById('tutorial-step-3');
    const contentDiv = document.getElementById('content-div');
    const prejudicesSelect = document.getElementById('prejudices-select');
    const thoughtsDiv = document.getElementById('thoughts-div');
    const endButton = document.getElementById('end-button');
  
    let currentThought = null; // Variable para almacenar el pensamiento actual
  
    function showElement(element) {
      element.style.display = 'block';
      setTimeout(() => {
        element.classList.add('show');
        element.classList.remove('fade');
      }, 10); // Slight delay to ensure the transition is applied
    }
  
    function hideElement(element) {
      element.classList.add('fade');
      element.classList.remove('show');
      setTimeout(() => {
        element.style.display = 'none';
      }, 1000); // Coincide con la duración de la transición CSS
    }
  
    // Step 1: Show the first tutorial step
    showElement(tutorialStep1);
    setTimeout(() => {
      hideElement(tutorialStep1);
      setTimeout(() => {
        showElement(tutorialStep2);
        showElement(contentDiv);
      }, 1000); // Coincide con la duración de la transición CSS
    }, 5000); // Adjust the duration as needed
  
    prejudicesSelect.addEventListener('change', function() {
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
  
    endButton.addEventListener('click', function() {
      showElement(tutorialStep3);
      
        hideElement(tutorialStep2);
      
    });
  
    // Show the end button after selecting a thought
    prejudicesSelect.addEventListener('change', function() {
      showElement(endButton);
    });
  });
  