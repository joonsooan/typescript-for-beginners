let a: number = 123;
let b: string = "hello";
let c: string[] = ["a", "b", "c", "d"];

type Player = {
  name: string;
  age?: number;
};

const Bryan: Player = {
  name: "Bryan",
};

const Bob: Player = {
  name: "Bob",
};

const playerMaker = (name: string): Player => ({ name });

const jason = playerMaker("jason");
jason.age = 12;
