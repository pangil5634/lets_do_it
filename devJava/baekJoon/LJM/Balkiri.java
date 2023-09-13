package devJava.baekJoon.LJM;

public class Balkiri extends Charactor {
    private int direction;
    private int area;

    public int getDirection() {
        return direction;
    }

    public void setDirection(int direction) {
        this.direction = direction;
    }

    public int getArea() {
        return area;
    }

    public void setArea(int area) {
        this.area = area;
    }

    public void calu() {
        String name = getName();
        System.out.println(name);
    }
}
