type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.name] === undefined) {
      this.words[word.name] = word.def;
    }
  }
  del(name: string) {
    if (name in this.words) {
      delete this.words[name];
    }
  }
  show() {
    console.log(this.words);
  }
  def(name: string) {
    return this.words[name];
  }
}

class Word {
  constructor(public name: string, public def: string) {}
}

const apple = new Word("apple", "delicous fruit");
const banana = new Word("banana", "monkey's favorite");
const cherry = new Word("cherry", "cherry picker");
const dict = new Dict();

dict.add(apple);
dict.add(banana);
dict.add(cherry);
