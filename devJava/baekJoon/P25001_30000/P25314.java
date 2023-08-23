package devJava.baekJoon.P25001_30000;

import java.util.Scanner;

public class P25314 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();

        int count = num / 4;

        for (int i = 0; i < count; i++) {
            System.out.print("long ");
        }
        System.out.println("int");
    }
}
