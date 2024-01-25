function main() {
    var totalIterations = 50000;
    var startTime = new Date().getTime();

    for (var index = 0; index < totalIterations; index++) {
        console.log((index + 1) + '. js');
    }

    var endTime = new Date().getTime();
    var elapsedTimeInSeconds = (endTime - startTime) / 1000;
    console.log(elapsedTimeInSeconds + ' soniya');
}

main();
