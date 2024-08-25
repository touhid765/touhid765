<?php
$servername = "localhost:3309";
$username = "root";
$password = "";
$dbname = "personal_info_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO personal_info (first_name, last_name, email, dob, phone, address) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $firstName, $lastName, $email, $dob, $phone, $address);

// Set parameters and execute
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$dob = $_POST['dob'];
$phone = $_POST['phone'];
$address = $_POST['address'];

if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>



