package devJava.baekJoon.P1_5000;

import java.util.Scanner;

public class P2444 {
    public static void main(String[] args) {
        P2444 main = new P2444();
        main.run();
    }

    Scanner sc = new Scanner(System.in);

    void run() {
        getData();
        printStar();
    }

    int number;

    void getData() {
        number = sc.nextInt();
    }

    void printStar() {
        int blank = number - 1;
        int star = 1;
        for (int i = 0; i < (number * 2) - 1; i++) {
            for (int j = 0; j < blank; j++) {
                System.out.print(" ");
            }

            for (int j = 0; j < star; j++) {
                System.out.print("*");
            }
            if (i < number - 1) {
                blank--;
                star += 2;
            } else {
                blank++;
                star -= 2;
            }
            System.out.println();

        }
    }
}
