<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $times = intval($_POST["times"]);

    for ($i = 0; $i < $times; $i++) {
        echo "Hello, $name!<br>";
    }
}
?>