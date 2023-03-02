import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner in = new Scanner(System.in);
        String word = in.next();
        int length = word.length();
        int a = in.nextInt();
        int b = in.nextInt();

        String[][] arr2d = new String[a][b];
        for (int i = 0; i < a; i++) { // row
            for (int j = 0; j < b; j++) { // column
                String letter = in.next();
                arr2d[i][j] = letter;
            }
        }
        System.out.println(check(a, b, length, arr2d, word));
    }

    public static int check(int a, int b, int length, String[][] arr2d, String word) {
        int count = 0;
        for (int k = 0; k < a; k++) { // row
            for (int l = 0; l < b; l++) { // column
                if (word.substring(0, 1).equals(arr2d[k][l])) {
                    if (k - length + 1 >= 0 && l - length + 1 >= 0) { // top left
                        Boolean good = true;
                        for (int m = 0; m < length; m++) {
                            // System.out.println("top left");
                            System.out.println(checkRecursive(a, b, arr2d, word.substring(m), false));
                            if (!word.substring(m, m + 1).equals(arr2d[k - m][l - m]) && good || checkRecursive(a, b, arr2d, word.substring(m), false) == 0) {
                                good = false;   
                            } else if (checkRecursive(a, b, arr2d, word.substring(m, m+1), false) > 0) {
                                count++;
                            }
                        }
                        if (good == true) {
                            count++;
                            // System.out.println("top left YES");
                        }
                    }
                    if (k - length + 1 >= 0) { // up
                        Boolean good = true;
                        for (int m = 0; m < length; m++) {
                            if (!word.substring(m, m + 1).equals(arr2d[k - m][l]) && good) {
                                good = false;
                            }
                        }
                        if (good == true) {
                            count++;
                            // System.out.println("up YES");
                        }
                    }
                    if (k - length + 1 >= 0 && l + length - 1 < b) { // top right
                        Boolean good = true;
                        for (int m = 0; m < length; m++) {
                            // System.out.println("top right");
                            if (!word.substring(m, m + 1).equals(arr2d[k - m][l + m]) && good) {
                                good = false;

                            }
                        }
                        if (good == true) {
                            count++;
                            // System.out.println("Top right YES");
                        }
                    }
                    if (l - length + 1 >= 0) { // left
                        Boolean good = true;
                        for (int m = 0; m < length; m++) {
                            if (!word.substring(m, m + 1).equals(arr2d[k][l - m]) && good) {
                                good = false;
                            }
                        }
                        if (good == true) {
                            count++;
                            // System.out.println("LEFT YES");
                        }
                    }
                    if (l + length - 1 < b) { // right
                        Boolean good = true;
                        for (int m = 0; m < length; m++) {
                            if (!word.substring(m, m + 1).equals(arr2d[k][l + m]) && good) {
                                good = false;
                            }
                        }
                        if (good == true) {
                            count++;
                            // System.out.println("RIGHT YES");
                        }
                    }
                    if (k + length - 1 < a && l - length + 1 >= 0) { // bottom left
                        Boolean good = true;
                        for (int m = 0; m < length; m++) {
                            if (!word.substring(m, m + 1).equals(arr2d[k + m][l - m]) && good) {
                                good = false;
                            }
                        }
                        if (good == true) {
                            count++;
                            // System.out.println("Bottom left YES");
                        }
                    }
                    if (k + length - 1 < a) { // down
                        Boolean good = true;
                        for (int m = 0; m < length; m++) {
                            if (!word.substring(m, m + 1).equals(arr2d[k + m][l]) && good) {
                                good = false;
                            }
                        }
                        if (good == true) {
                            count++;
                            // System.out.println("DOWN YES");
                        }
                    }
                    if (k + length - 1 < a && l + length - 1 < b) { // bottom right
                        Boolean good = true;
                        for (int m = 0; m < length; m++) {
                            if (!word.substring(m, m + 1).equals(arr2d[k + m][l + m]) && good) {
                                good = false;
                            }
                        }
                        if (good == true) {
                            count++;
                            // System.out.println("Bottom Right YES");
                        }
                    }
                }
            }
        }
        return count;
    }

    public static int checkRecursive(int a, int b, String[][] arr2d, String word, Boolean straight) {
        int length = word.length();
        int count = 0;
        for (int k = 0; k < a; k++) { // row
            for (int l = 0; l < b; l++) { // column
                if (word.substring(0, 1).equals(arr2d[k][l])) {
                    if (straight) {
                        if (k - length + 1 >= 0) { // up
                            Boolean good = true;
                            for (int m = 0; m < length; m++) {
                                if (!word.substring(m, m + 1).equals(arr2d[k - m][l]) && good) {
                                    good = false;
                                }
                            }
                            if (good == true) {
                                count++;
                                // System.out.println("up YES");
                            }
                        }
                        if (l - length + 1 >= 0) { // left
                            Boolean good = true;
                            for (int m = 0; m < length; m++) {
                                if (!word.substring(m, m + 1).equals(arr2d[k][l - m]) && good) {
                                    good = false;
                                }
                            }
                            if (good == true) {
                                count++;
                                // System.out.println("LEFT YES");
                            }
                        }
                        if (l + length - 1 < b) { // right
                            Boolean good = true;
                            for (int m = 0; m < length; m++) {
                                if (!word.substring(m, m + 1).equals(arr2d[k][l + m]) && good) {
                                    good = false;
                                }
                            }
                            if (good == true) {
                                count++;
                                // System.out.println("RIGHT YES");
                            }
                        }
                        if (k + length - 1 < a) { // down
                            Boolean good = true;
                            for (int m = 0; m < length; m++) {
                                if (!word.substring(m, m + 1).equals(arr2d[k + m][l]) && good) {
                                    good = false;
                                }
                            }
                            if (good == true) {
                                count++;
                                // System.out.println("DOWN YES");
                            }
                        }
                    } else {
                        if (k - length + 1 >= 0 && l - length + 1 >= 0) { // top left
                            Boolean good = true;
                            for (int m = 0; m < length; m++) {
                                // System.out.println("top left");
                                if (!word.substring(m, m + 1).equals(arr2d[k - m][l - m]) && good) {
                                    good = false;
                                }
                            }
                            if (good == true) {
                                count++;
                                // System.out.println("top left YES");
                            }
                        }

                        if (k - length + 1 >= 0 && l + length - 1 < b) { // top right
                            Boolean good = true;
                            for (int m = 0; m < length; m++) {
                                // System.out.println("top right");
                                if (!word.substring(m, m + 1).equals(arr2d[k - m][l + m]) && good) {
                                    good = false;

                                }
                            }
                            if (good == true) {
                                count++;
                                // System.out.println("Top right YES");
                            }
                        }

                        if (k + length - 1 < a && l - length + 1 >= 0) { // bottom left
                            Boolean good = true;
                            for (int m = 0; m < length; m++) {
                                if (!word.substring(m, m + 1).equals(arr2d[k + m][l - m]) && good) {
                                    good = false;
                                }
                            }
                            if (good == true) {
                                count++;
                                // System.out.println("Bottom left YES");
                            }
                        }
                        if (k + length - 1 < a && l + length - 1 < b) { // bottom right
                            Boolean good = true;
                            for (int m = 0; m < length; m++) {
                                if (!word.substring(m, m + 1).equals(arr2d[k + m][l + m]) && good) {
                                    good = false;
                                }
                            }
                            if (good == true) {
                                count++;
                                // System.out.println("Bottom Right YES");
                            }
                        }
                    }
                }
            }
        }
        return count;
    }
}