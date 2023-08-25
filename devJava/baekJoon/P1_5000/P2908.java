package devJava.baekJoon.P1_5000;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class P2908 {
    public static void main(String[] args) {
        P2908 main = new P2908();
        main.run();
    }

    void run() {
        getNumber();
        printResult();
    }

    int[] numbers = new int[2];

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    void getNumber() {
        String temp = "";
        try {
            temp = br.readLine();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        String[] temps = temp.split(" ");

        for (int i = 0; i < temps.length; i++) {
            StringBuffer sb = new StringBuffer(temps[i]);
            numbers[i] = Integer.parseInt(sb.reverse().toString());
        }

    }

    void printResult() {
        if (numbers[0] > numbers[1])
            System.out.println(numbers[0]);
        else
            System.out.println(numbers[1]);
    }
}
