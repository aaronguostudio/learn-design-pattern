public class SingleObject {
  private SingleObject () {}
  private static SingleObject instance = null;
  
  public static SingleObject getSingleObject () {
    if ( instance == null ) {
      return new SingleObject();
    }
    return instance;
  }

  public void login() {
    System.out.println();
  }
}

public class SinglePatternDemo {
  static public void main (String[] args) {
    SingleObject obj = SingleObject.getSingleObject();
    obj.login();
  }
}