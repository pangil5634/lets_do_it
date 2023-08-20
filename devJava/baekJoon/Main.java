package devJava.baekJoon;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Main main = new Main();
        main.run();
    }

    void run() {
        getData();
        calculate();
        printResult();
    }

    int hour = 0, min = 0, addMin = 0;
    Scanner sc = new Scanner(System.in);

    void getData() {
        hour = sc.nextInt();
        min = sc.nextInt();
        addMin = sc.nextInt();

    }

    void calculate() {
        int temp = min + addMin;

        int tempHour = temp / 60;
        int tempMin = temp % 60;

        hour += tempHour;
        min = tempMin;
    }

    void printResult() {
        System.out.println(hour + " " + min);
    }
}
