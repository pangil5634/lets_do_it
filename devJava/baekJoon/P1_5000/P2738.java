package devJava.baekJoon.P1_5000;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class P2738 {
    public static void main(String[] args) {

        P2738 main = new P2738();

        main.run();
    }

    void run() {
        getData();
        calData();
    }

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    int m = 0;
    int n = 0;
    int[][] mList;
    int[][] nList;
    int[][] result;

    void getData() {
        try {
            String temp = br.readLine();
            String[] temps = temp.split(" ");
            m = Integer.parseInt(temps[0]);
            n = Integer.parseInt(temps[1]);

            mList = new int[m][n];
            nList = new int[m][n];
            result = new int[m][n];

            for (int i = 0; i < m; i++) {
                String data = br.readLine();
                String[] datas = data.split(" ");
                for (int j = 0; j < n; j++) {
                    mList[i][j] = Integer.parseInt(datas[j]);
                }
            }
            for (int i = 0; i < m; i++) {
                String data = br.readLine();
                String[] datas = data.split(" ");
                for (int j = 0; j < n; j++) {
                    nList[i][j] = Integer.parseInt(datas[j]);
                }
            }
        } catch (NumberFormatException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }

    void calData() {
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                result[i][j] = mList[i][j] + nList[i][j];
                System.out.print(result[i][j] + " ");
            }
            System.out.println();
        }
    }

    void showData() {
    }
}