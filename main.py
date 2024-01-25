import time

def main():
    total_iterations = 50000
    start_time = time.time()

    for index in range(total_iterations):
        print(f'{index + 1}. py')

    elapsed_time = time.time() - start_time
    print(f' {elapsed_time} soniya')

if __name__ == "__main__":
    main()
