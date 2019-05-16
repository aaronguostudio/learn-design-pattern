public class MyDuck extends Duck {

  public MyDuck () {
    flyBehavior = new FlyNoWay();
    quackBehavior = new Squeak();
  }

  public void display () {
    System.out.print("This is my duck");
  }
}