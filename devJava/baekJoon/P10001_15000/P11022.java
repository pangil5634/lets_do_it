package devJava.baekJoon.P10001_15000;

import java.util.Scanner;

public class P11022 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int count = sc.nextInt();

        for (int i = 0; i < count; i++) {
            int n1 = sc.nextInt();
            int n2 = sc.nextInt();

            System.out.printf("Case #%d: %d + %d = %d\n", i + 1, n1, n2, n1 + n2);
        }
    }
}