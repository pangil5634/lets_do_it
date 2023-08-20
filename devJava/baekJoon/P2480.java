package devJava.baekJoon;

import java.util.Scanner;

public class P2480 {
    public static void main(String[] args) {
        P2480 main = new P2480();

        main.run();
    }

    void run() {
        getData();
        comparetData();
    }

    int n1 = 0, n2 = 0, n3 = 0;
    Scanner sc = new Scanner(System.in);
    int score = 0;

    void getData() {
        n1 = sc.nextInt();
        n2 = sc.nextInt();
        n3 = sc.nextInt();
    }

    void comparetData() {

        if (n1 == n2 && n2 == n3) {
            score += 10000;
            score += n1 * 1000;
        } else if (n1 == n2 || n2 == n3) {
            score += 1000;
            score += n2 * 100;
        } else if (n1 == n2 || n1 == n3) {
            score += 1000;
            score += n1 * 100;
        } else {
            int max = 0;
            max = Math.max(n2, n1);
            max = Math.max(n3, max);

            score = max * 100;
        }

        System.out.println(score);
    }
}
