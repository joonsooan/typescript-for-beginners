interface User {
  firstName: string;
  lastName: string;
  sayHello(name: string): string;
  fullName(): string;
}

class Player implements User {
  constructor(public firstName: string, public lastName: string) {}
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  sayHello(name: string): string {
    return `Hello, ${name}. My name is ${this.fullName()}`;
  }
}
