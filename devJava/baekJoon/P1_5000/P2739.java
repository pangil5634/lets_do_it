package devJava.baekJoon.P1_5000;

import java.util.Scanner;

public class P2739 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int dan = sc.nextInt();

        for (int i = 0; i < 9; i++) {
            System.out.printf("%d * %d = %d\n", dan, i + 1, dan * (i + 1));
        }
    }
}
