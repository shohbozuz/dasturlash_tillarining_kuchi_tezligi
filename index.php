<?php

$totalIterations = 50000;
$startTimestamp = microtime(true);

for ($index = 0; $index < $totalIterations; $index++) {
    echo ($index + 1) . '. php' . PHP_EOL;
}

$elapsedTime = microtime(true) - $startTimestamp;
echo ' ' . ($elapsedTime) . ' soniya' . PHP_EOL;

?>
