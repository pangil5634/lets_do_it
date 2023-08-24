package devJava.baekJoon.P1_5000;

import java.util.HashSet;
import java.util.Scanner;

public class P3052 {
    public static void main(String[] args) {

        P3052 main = new P3052();

        main.run();
    }

    Scanner sc = new Scanner(System.in);

    void run() {
        HashSet<Integer> data = new HashSet<>();

        for (int i = 0; i < 10; i++) {
            int temp = sc.nextInt();
            data.add(temp % 42);
        }

        System.out.println(data.size());

    }
}
