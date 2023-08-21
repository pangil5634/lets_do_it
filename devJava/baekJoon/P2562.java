package devJava.baekJoon;

import java.util.Scanner;

public class P2562 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

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
