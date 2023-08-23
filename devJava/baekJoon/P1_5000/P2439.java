package devJava.baekJoon.P1_5000;

import java.util.Scanner;

public class P2439 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int count = sc.nextInt();
        int blank = count - 1;

        for (int i = 0; i < count; i++) {
            for (int j = 0; j < blank; j++) {
                System.out.print(" ");
            }
            blank--;
            for (int j = 0; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}