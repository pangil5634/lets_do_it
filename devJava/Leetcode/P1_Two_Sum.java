package devJava.Leetcode;

import java.util.Scanner;

public class P1_Two_Sum {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            Solution solution = new Solution();

            System.out.print("Input arrays : ");
            String temps = sc.nextLine();
            String[] temp = temps.split(" ");
            int[] nums = new int[temp.length];

            for (int i = 0; i < nums.length; i++) {
                nums[i] = Integer.parseInt(temp[i]);
            }

            System.out.print("Input targer : ");
            int target = sc.nextInt();

            int[] result = solution.twoSum(nums, target);
            System.out.printf("[%d, %d]\n", result[0] + 1, result[1] + 1);
        } catch (NumberFormatException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

}

class Solution {
    public int[] twoSum(int[] nums, int target) {

        int[] indexList = new int[2];

        for (int i = 0; i < nums.length; i++) {
            int temp = nums[i];
            indexList[0] = i;
            for (int j = 0; j < nums.length; j++) {
                if (i != j) {
                    if (temp + nums[j] == target) {
                        indexList[1] = j;
                        return indexList;
                    }
                }
            }
        }

        return indexList;
    }
}