public class MiniDuckSimulator {
  public static void main (String [] args) {
    Duck mallard = new MallardDuck();
    mallard.performFly();
    mallard.performQuack();

    Duck my = new MyDuck();
    my.performFly();
    my.performQuack();
    my.swim();
  }
}