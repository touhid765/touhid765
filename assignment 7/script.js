function validateForm() {
    // Get form values
    let name = document.getElementById('name').value.trim();
    let age = document.getElementById('age').value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');
    let country = document.getElementById('country').value;
    let languages = document.querySelectorAll('input[name="language"]:checked');

    // Initialize validation flag and error message
    let isValid = true;
    let errorMessage = "";

    // Validate Name (cannot be more than 15 characters)
    if (name.length > 15) {
        errorMessage += "Name cannot be more than 15 characters.\n";
        isValid = false;
    }

    // Validate Age (must be a number between 1 and 120)
    if (!/^\d+$/.test(age) || age < 1 || age > 120) {
        errorMessage += "Age must be a valid number between 1 and 120.\n";
        isValid = false;
    }

    // Gather selected languages
    let selectedLanguages = Array.from(languages).map(language => language.value);

    // Validate Bengali and Hindi selection
    if (
        country !== "India" &&
        (selectedLanguages.includes("Bengali") || selectedLanguages.includes("Hindi"))
    ) {
        errorMessage += "Bengali and Hindi can only be selected if the country is India.\n";
        isValid = false;
    }

    // If validation fails, show alert and return
    if (!isValid) {
        alert(errorMessage);
        return;
    }

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
