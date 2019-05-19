public abstract class Duck {
  FlyBehavior flyBehavior;
  QuackBehavior quackBehavior;

  public Duck () {
  }

  // implement in subclass
  public abstract void display();

  // different behavior in subclass
  public void performFly () {
    flyBehavior.fly();
  }

  // different behavior in subclass
  public void performQuack () {
    quackBehavior.quack();
  }

  // apply to all
  public void swim () {
    System.out.println("All ducks float, event decoys!");
  }

  // set behaviors on the fly
  public void setFlyBehavior (FlyBehavior fb) {
    flyBehavior = fb;
  }

  public void setQuackBehavior (QuackBehavior qb) {
    quackBehavior = qb;
  }
}