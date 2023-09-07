package devJava.baekJoon;

import java.util.Scanner;

public class test {
    public static void main(String[] args) {
        String input = "";

        Scanner sc = new Scanner(System.in);

        input = sc.nextLine();

        String[] temps = input.split("");

        String[] data = { "H", "C", "N", "O" };

        int[] dataNumber = { 1, 12, 14, 16 };
        int indexData = 0;
        int total = 0;

        for (int i = 0; i < temps.length; i++) {
            if (temps[i].matches("[+-?]?\\d*(\\.\\d+)?")) {
                total += dataNumber[indexData];
                continue;
            } else {
                for (int j = 0; j < 4; j++) {

                    if (temps[i].equals(data[j])) {
                        indexData = j;
                        break;
                    }
                }

            }
        }
        System.out.println(total);
    }
}
