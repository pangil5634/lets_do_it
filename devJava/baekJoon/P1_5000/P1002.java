package devJava.baekJoon.P1_5000;

import java.util.Scanner;

public class P1002 {

    int count;

    int x1, y1;
    int r1, r2;
    int x2, y2;

    public static void main(String[] args) {
        P1002 main = new P1002();

        main.getData();

    }

    Scanner sc = new Scanner(System.in);

    void getData() {
        count = sc.nextInt();
        for (int i = 0; i < count; i++) {
            x1 = sc.nextInt();
            y1 = sc.nextInt();
            r1 = sc.nextInt();
            x2 = sc.nextInt();
            y2 = sc.nextInt();
            r2 = sc.nextInt();
            System.out.println(tangent_point());
        }

    }

    // 접점 개수 구하는 함수
    int tangent_point() {

        int distance_pow = (int) (Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)); // 중점간 거리 distance의 제곱

        // case 1 : 중점이 같으면서 반지름도 같을 경우
        if (x1 == x2 && y1 == y2 && r1 == r2) {
            return -1;
        }

        // case 2-1 : 두 원의 반지름 합보다 중점간 거리가 더 길 때
        else if (distance_pow > Math.pow(r1 + r2, 2)) {
            return 0;
        }

        // case 2-2 : 원 안에 원이 있으나 내접하지 않을 때
        else if (distance_pow < Math.pow(r2 - r1, 2)) {
            return 0;
        }

        // case 3-1 : 내접할 때
        else if (distance_pow == Math.pow(r2 - r1, 2)) {
            return 1;
        }

        // case 3-2 : 외접할 때
        else if (distance_pow == Math.pow(r1 + r2, 2)) {
            return 1;
        }

        else {
            return 2;
        }
    }
}