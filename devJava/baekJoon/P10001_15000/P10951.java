package devJava.baekJoon.P10001_15000;

import java.util.Scanner;

public class P10951 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while (sc.hasNextInt()) {

            int n1 = sc.nextInt();
            int n2 = sc.nextInt();

            if (0 < n1 && n1 < 10 && 0 < n2 && n2 < 10)
                System.out.println(n1 + n2);

        }
    }
}
