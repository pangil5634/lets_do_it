package devJava.baekJoon.P10001_15000;

import java.util.Scanner;

public class P10807 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int count = sc.nextInt();
        int[] numbers = new int[count];

        for (int i = 0; i < count; i++) {
            numbers[i] = sc.nextInt();
        }

        int temp = sc.nextInt();
        int same = 0;
        for (int i = 0; i < count; i++) {
            if (temp == numbers[i]) {
                same++;
            }
        }
        System.out.println(same);
    }
}