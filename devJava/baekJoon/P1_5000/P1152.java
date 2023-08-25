package devJava.baekJoon.P1_5000;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class P1152 {
    public static void main(String[] args) {
        P1152 main = new P1152();

        main.run();
    }

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    void run() {
        String str = "";
        try {
            str = br.readLine();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        StringTokenizer st = new StringTokenizer(str, " ");
        System.out.println(st.countTokens());

    }
}
