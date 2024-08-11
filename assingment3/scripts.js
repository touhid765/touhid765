document.getElementById('personalInfoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        dob: formData.get('dob'),
        gender: formData.get('gender'),
        address: formData.get('address')
    };

    console.log('Form Submitted:', data);

    alert('Form submitted successfully!');
});

