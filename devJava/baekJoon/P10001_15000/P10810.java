package devJava.baekJoon.P10001_15000;

import java.util.Scanner;

public class P10810 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int basket = sc.nextInt();

        int[] baskets = new int[basket];

        int count = sc.nextInt();

        for (int i = 0; i < baskets.length; i++) {
            baskets[i] = 0;
        }

        for (int i = 0; i < count; i++) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            int c = sc.nextInt();

            for (int j = a; j <= b; j++) {
                baskets[j - 1] = c;
            }
        }

        for (int i = 0; i < baskets.length; i++) {
            System.out.print(baskets[i] + " ");
        }
        System.out.println();

    }
}
