  void main() {
    int totalIterations = 50000;
    Stopwatch stopwatch = Stopwatch()..start();


    for (int index = 0; index < totalIterations; index++) {
      print('${index + 1}. dart');
    }

    stopwatch.stop();
    print(' ${stopwatch.elapsed.inMilliseconds / 1000} soniya');
  }

