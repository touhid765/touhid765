// script.js
document.getElementById('personalInfoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Collecting form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;

    // Basic validation
    if (name === '' || email === '' || phone === '' || dob === '' || address === '') {
        document.getElementById('result').textContent = 'Please fill out all fields.';
        document.getElementById('result').style.color = 'red';
    } else {
        // Display the submitted data
        document.getElementById('result').textContent = `Thank you, ${name}. Your information has been submitted successfully!`;
        document.getElementById('result').style.color = 'green';

        // Optionally, you can also clear the form
        document.getElementById('personalInfoForm').reset();
    }
});
