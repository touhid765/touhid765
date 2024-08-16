// script.js
document.getElementById('infoForm').addEventListener('submit', function(e) {
    var phone = document.getElementById('phone').value;
    var phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        e.preventDefault();
    }
});
