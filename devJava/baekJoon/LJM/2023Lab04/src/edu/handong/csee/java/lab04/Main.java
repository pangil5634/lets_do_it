package edu.handong.csee.java.lab04;

public class Main {
    public static void main(String[] args) {
        Main myfirstmain = new Main();

        myfirstmain.run();
    }

    public void run() {
        System.out.println("종명아 파이팅해라. 여기에다가 이제 클래스 선언하고 그러면 된다잉");

        Cat mycat = new Cat();
        Dog mydog = new Dog();

        mycat.setAge(5);
        System.out.println(mycat.getAge());

        mydog.setName("뽀삐");
        System.out.println(mydog.getName());

    }
}
