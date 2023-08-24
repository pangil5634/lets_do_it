package devJava.baekJoon.P1_5000;

import java.util.Scanner;

public class P2675 {
    public static void main(String[] args) {

        P2675 main = new P2675();

        main.run();
    }

    Scanner sc = new Scanner(System.in);

    void run() {
        int count = sc.nextInt();

        for (int i = 0; i < count; i++) {
            int num = sc.nextInt();
            String str = sc.next();
            String[] temp = str.split("");
            for (int j = 0; j < temp.length; j++) {
                for (int z = 0; z < num; z++) {
                    System.out.print(temp[j]);
                }
            }
            System.out.println();
        }

    }
}
