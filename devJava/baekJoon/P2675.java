package devJava.baekJoon;

import java.util.Scanner;

public class P2675 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

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
