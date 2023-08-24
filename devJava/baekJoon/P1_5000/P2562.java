package devJava.baekJoon.P1_5000;

import java.util.Scanner;

public class P2562 {
    public static void main(String[] args) {

        P2562 main = new P2562();

        main.run();
    }

    Scanner sc = new Scanner(System.in);

    void run() {
        int[] data = new int[9];
        int max = 0, index = 0;

        for (int i = 0; i < data.length; i++) {
            data[i] = sc.nextInt();
            if (data[i] > max) {
                max = data[i];
                index = i;
            }
        }
        System.out.println(max);
        System.out.println(index + 1);

    }
}
