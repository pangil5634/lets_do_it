package devJava.baekJoon.P1_5000;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class P2743 {
    public static void main(String[] args) {
        P2743 main = new P2743();

        main.run();
    }

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    String str = "";

    void run() {
        getString();
        printLength();
    }

    void getString() {
        try {
            str = br.readLine();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    void printLength() {
        System.out.println(str.length());
    }

}
