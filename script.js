document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const fields = form.querySelectorAll('input, textarea');
    
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      
      let valid = true;
      
      fields.forEach(field => {
        if (!field.value.trim()) {
          showError(field, `${field.placeholder} is required`);
          valid = false;
        } else {
          clearError(field);
        }
      });
      
      if (valid) {
        showSuccessMessage('Form submitted successfully!');
        setTimeout(() => {
          clearForm();
          clearMessages();
        }, 5000);
      }
    });
    
    function showError(field, message) {
      let error = field.nextElementSibling;
      if (!error || !error.classList.contains('error-message')) {
        error = document.createElement('div');
        error.classList.add('error-message');
        field.parentNode.insertBefore(error, field.nextSibling);
      }
      error.textContent = message;
      field.classList.add('error');
    }
    
    function clearError(field) {
      const error = field.nextElementSibling;
      if (error && error.classList.contains('error-message')) {
        error.remove();
      }
      field.classList.remove('error');
    }
    
    function showSuccessMessage(message) {
      const successMessage = document.createElement('div');
      successMessage.classList.add('success-message');
      successMessage.textContent = message;
      form.prepend(successMessage);
    }
    
    function clearMessages() {
      const messages = document.querySelectorAll('.error-message, .success-message');
      messages.forEach(message => message.remove());
    }
    
    function clearForm() {
      fields.forEach(field => field.value = '');
    }
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        const checkbox = document.getElementById("checkb");

        // Check if the checkbox is checked
        if (checkbox.checked) {
            // If checkbox is checked, submit the form
            alert("Form submitted successfully!");
            form.reset(); // Clear the form
        } else {
            // If checkbox is not checked, display an error message
            alert("Please check the checkbox to submit the form.");
        }
    });
});