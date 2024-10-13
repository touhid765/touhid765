// JavaScript function to validate form and display the user's input
function validateForm() {
    // Get form values
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let country = document.getElementById('country').value;
    let languages = document.querySelectorAll('input[name="language"]:checked');
    
    // Initialize validation flag
    let isValid = true;
    let errorMessage = "";

    // Validate Name (cannot be more than 15 characters)
    if (name.length > 15) {
        errorMessage += "Name cannot be more than 15 characters.\n";
        isValid = false;
    }

    // Validate Age (cannot be more than 25 characters)
    if (age.length > 25) {
        errorMessage += "Age cannot be more than 25 characters.\n";
        isValid = false;
    }

    // Check if country is not India, and ensure no languages are selected
    if (country !== "India" && languages.length > 0) {
        errorMessage += "Languages can only be selected if the country is India.\n";
        isValid = false;
    }

    // If validation fails, show alert
    if (!isValid) {
        alert(errorMessage);
        return;
    }

    // If validation passes, gather selected languages
    let selectedLanguages = [];
    languages.forEach(language => {
        selectedLanguages.push(language.value);
    });

    // Display the user's input in the output section
    let output = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender ? gender.value : 'Not Selected'}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Languages Known:</strong> ${selectedLanguages.length > 0 ? selectedLanguages.join(', ') : 'None'}</p>
    `;
    
    document.getElementById('output').innerHTML = output;
}

