package com.wei.backend2;

import java.util.Iterator;
import java.util.Scanner;
import java.util.TreeSet;

public class testMian {


    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
//        test1(sc);
        test2(sc);

    }

    public static void test1(Scanner sc) {
        while (sc.hasNextLine()) {
            String s = sc.nextLine();
            System.out.println(Integer.parseInt(s.substring(2, s.length()), 16));
        }
    }

    public static void test2(Scanner in) {
        while (in.hasNextLine()) {
            String s = in.nextLine();    //读入数字

            int count = 0;    //记录转换后的数字

            for (int i = 0; i < s.length() - 2; i++) {
                //由于前面两位是'0x'，故从第三位开始
                char tc = s.charAt(i + 2);
                int t = 0;    //记录字母转换成的数值

                //将字母转换为数值
                if (tc >= '0' && tc <= '9')
                    t = tc - '0';
                    //字母'A'/'a'~'F''f'对应数字10~15
                else if (tc >= 'A' && tc <= 'F')
                    t = tc - 'A' + 10;
                else if (tc >= 'a' && tc <= 'f')
                    t = tc - 'a' + 10;
                //计算加和
                count += t * Math.pow(16, s.length() - i - 3);
            }
            System.out.println(count);
        }
    }

    //明明的随机数
    public static void test3(Scanner sc) {
        //获取个数
        int num = sc.nextInt();
        //创建TreeSet进行去重排序
        TreeSet set = new TreeSet();
        //输入
        for (int i = 0; i < num; i++) {
            set.add(sc.nextInt());
        }

        //输出
        Iterator iterator = set.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }
}
