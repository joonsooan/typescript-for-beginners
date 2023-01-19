abstract class User {
  constructor(
    private firstName: string,
    protected lastName: string,
    public nickName: string
  ) {}
  abstract getNickName(): void;
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
// 추상 클래스는 오직 다른 클래스가 상속받을 수 있는 클래스이다.

class Player extends User {
  getNickName(): void {
    console.log(this.lastName);
  }
}
// protected는 선언한 클래스, 상속받은 클래스 내에서만 접근할 수 있다.

const jason = new Player("joonsoo", "an", "Jason");
