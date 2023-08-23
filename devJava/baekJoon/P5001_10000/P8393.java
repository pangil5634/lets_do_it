package devJava.baekJoon.P5001_10000;

import java.util.Scanner;

public class P8393 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int count = sc.nextInt();
        int result = 0;
        for (int i = 1; i <= count; i++) {
            result += i;

        }
        System.out.println(result);
    }
}
