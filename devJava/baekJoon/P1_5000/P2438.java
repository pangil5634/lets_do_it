package devJava.baekJoon.P1_5000;

import java.util.Scanner;

public class P2438 {
    public static void main(String[] args) {

        P2438 main = new P2438();
        main.run();
    }

    Scanner sc = new Scanner(System.in);

    void run() {
        int count = sc.nextInt();

        for (int i = 0; i < count; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
