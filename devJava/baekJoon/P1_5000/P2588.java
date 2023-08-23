package devJava.baekJoon.P1_5000;

import java.util.Scanner;

public class P2588 {

    int a, b;
    Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {

        P2588 main = new P2588();

        main.run();
    }

    void run() {
        getNumber();

        printResult();
    }

    void getNumber() {
        a = sc.nextInt();
        b = sc.nextInt();
    }

    void printResult() {
        int hund = b / 100;
        int ten = (b / 10) - (hund * 10);
        int one = b % 10;

        System.out.println(a * one);
        System.out.println(a * ten);
        System.out.println(a * hund);

        System.out.println((a * one) + (a * ten * 10) + (a * hund * 100));

    }

}
