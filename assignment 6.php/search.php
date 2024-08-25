<?php
// Database connection
$servername = "localhost:3309";
$username = "root"; // replace with your database username
$password = ""; // replace with your database password
$dbname = "your_database_name"; // replace with your database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the search input
$name = $_GET['name'];

// Prepare the SQL query
$sql = "SELECT * FROM cases WHERE name LIKE ?";
$stmt = $conn->prepare($sql);
$searchTerm = "%".$name."%";
$stmt->bind_param("s", $searchTerm);
$stmt->execute();
$result = $stmt->get_result();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search Results</title>
</head>
<body>
    <h1>Search Results for "<?php echo htmlspecialchars($name); ?>"</h1>

    <?php if ($result->num_rows > 0): ?>
        <table border="1">
            <tr>
                <th>Case ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Date</th>
            </tr>
            <?php while($row = $result->fetch_assoc()): ?>
            <tr>
                <td><?php echo htmlspecialchars($row['case_id']); ?></td>
                <td><?php echo htmlspecialchars($row['name']); ?></td>
                <td><?php echo htmlspecialchars($row['description']); ?></td>
                <td><?php echo htmlspecialchars($row['date']); ?></td>
            </tr>
            <?php endwhile; ?>
        </table>
    <?php else: ?>
        <p>No cases found matching the name "<?php echo htmlspecialchars($name); ?>".</p>
    <?php endif; ?>

    <?php
    $stmt->close();
    $conn->close();
    ?>
</body>
</html>
