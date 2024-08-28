const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
      // Prevent form submission
      event.preventDefault();

      // Clear previous error messages
      clearErrors();

      // Validation
      let valid = true;

      // First Name
      const firstName = document.getElementById('firstName').value;
      if (firstName.length === 0 || firstName.length > 10) {
        showError('firstNameError', 'First name must be less than 10 characters.');
        valid = false;
      }

      // Last Name
      const lastName = document.getElementById('lastName').value;
      if (lastName.length === 0 || lastName.length > 10) {
        showError('lastNameError', 'Last name must be less than 10 characters.');
        valid = false;
      }

      // Email
      const email = document.getElementById('email').value;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showError('emailError', 'Please enter a valid email address.');
        valid = false;
      }

      // Password
      const password = document.getElementById('password').value;
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).{1,8}$/;
      if (!passwordPattern.test(password)) {
        showError('passwordError', 'Password must be less than 8 chars, with upper/lowercase, number, and symbol.');
        valid = false;
      }

      // Confirm Password
      const confirmPassword = document.getElementById('confirmPassword').value;
      if (confirmPassword !== password) {
        showError('confirmPasswordError', 'Passwords do not match.');
        valid = false;
      }

      // Phone Number
      const phoneNumber = document.getElementById('phoneNumber').value;
      const phonePattern = /^[0-9]{10}$/;
      if (!phonePattern.test(phoneNumber)) {
        showError('phoneError', 'Phone number must be a valid 10-digit number.');
        valid = false;
      }

      // File Upload
      const fileUpload = document.getElementById('fileUpload').files[0];
      if (fileUpload) {
        const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
        if (!allowedExtensions.exec(fileUpload.name)) {
          showError('fileError', 'Please upload a valid image file (JPG or PNG).');
          valid = false;
        }
      } else {
        showError('fileError', 'Please upload an image file.');
        valid = false;
      }

      // Submit if valid
      if (valid) {
        alert('Form submitted successfully!');
        form.reset();
      }
    });

    // Function to show error
    function showError(elementId, message) {
      document.getElementById(elementId).innerText = message;
    }

    // Function to clear errors
    function clearErrors() {
      const errors = document.getElementsByClassName('error');
      for (let i = 0; i < errors.length; i++) {
        errors[i].innerText = '';
      }
    }
