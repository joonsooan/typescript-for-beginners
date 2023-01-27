interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};

  create(key: string, value: T) {
    this.storage[key] = value;
  }

  update(key: string, value: T) {
    if (this.storage[key] !== undefined) {
      this.storage[key] = value;
    } else {
      console.log(`${key}가 존재하지 않아 새로 만듭니다.`);
      this.storage[key] = value;
    }
  }

  read(key: string): T {
    return this.storage[key];
  }

  del(key: string) {
    delete this.storage[key];
  }

  clear() {
    this.storage = {};
  }
}

const strStorage = new LocalStorage<string>();

strStorage.create("apple", "red");
strStorage.read("apple");

const boolStorage = new LocalStorage<boolean>();

boolStorage.create("old", false);
boolStorage.read("old");
