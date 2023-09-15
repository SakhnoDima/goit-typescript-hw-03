class Key {
  private signature: number;
  constructor() {
    this.signature = Math.floor(Math.random() * 10);
  }
  getSignature(): number {
    console.log(this.signature);
    return this.signature;
  }
}

class Person {
  constructor(private key: Key, private name: string) {}
  getKey(): Key {
    console.log(this.key);
    return this.key;
  }
  getName(): string {
    return this.name;
  }
}

abstract class House {
  public door: boolean = false;
  public tenants: Person[] = [];

  constructor(public key: Key) {}

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`Welcome home ${person.getName()}`);
    } else {
      console.log("Close");
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (this.key.getSignature === key.getSignature) {
      this.door = true;
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key, "Stich");

key.getSignature();
house.openDoor(person.getKey());
house.comeIn(person);

export { Key, MyHouse, Person };
