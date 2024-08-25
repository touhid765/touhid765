document.getElementById('personalInfoForm').addEventListener('submit', function(e) {
    const phone = document.getElementById('phone').value;
    const phonePattern = /^\d{10}$/;

    if (!phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        e.preventDefault();
    }
});
