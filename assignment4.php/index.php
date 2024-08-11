<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Greeting Form</title>
</head>
<body>
    <?php
    include("greet.php")
    ?>
    <form action="greet.php" method="post">
        <label for="name">Enter your name:</label>
        <input type="text" id="name" name="name" required><br><br>

        <label for="times">Enter the number of times to greet:</label>
        <input type="number" id="times" name="times" required><br><br>

        <input type="submit" value="Greet">
    </form>
</body>
</html>


