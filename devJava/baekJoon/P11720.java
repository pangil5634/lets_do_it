package devJava.baekJoon;

import java.util.Scanner;

public class P11720 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int count = sc.nextInt();
        String temp = sc.next();

        String[] temps = temp.split("");

        int result = 0;
        for (int i = 0; i < temps.length; i++) {
            result += Integer.parseInt(temps[i]);
        }

        System.out.println(result);

    }
}
