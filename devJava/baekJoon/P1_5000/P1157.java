package devJava.baekJoon.P1_5000;

import java.util.HashSet;
import java.util.Scanner;

public class P1157 {
    public static void main(String[] args) {
        P1157 main = new P1157();

        main.run();
    }

    Scanner sc = new Scanner(System.in);

    void run() {

        String[] strList = sc.nextLine().split("");
        HashSet<String> set = new HashSet<String>();
        for (int i = 0; i < strList.length; i++) {
            String temp = strList[i].toUpperCase();
            set.add(temp);
        }

        for (String temps : set) {
            System.out.println(temps);
        }

        int count = 0;
        for (int i = 0; i < strList.length; i++) {
            if (set.contains(strList[i])) {
                count++;
            }

        }

        for (int i = 0; i < count; i++) {
            System.out.println("중복");
        }

    }
}
