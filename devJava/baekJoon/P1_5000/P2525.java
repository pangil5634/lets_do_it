package devJava.baekJoon.P1_5000;

import java.util.Scanner;

public class P2525 {
    public static void main(String[] args) {
        P2525 main = new P2525();
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

        if (hour >= 24) {
            hour -= 24;
        }
    }

    void printResult() {
        System.out.println(hour + " " + min);
    }
}
