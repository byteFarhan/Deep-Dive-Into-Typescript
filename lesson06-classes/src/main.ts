class Player {
  constructor(
    public name: string,
    readonly age: number,
    readonly country: string,
    protected experience: number,
    public readonly other?: {}
  ) {}
  play() {
    console.log(`The player name is ${this.name}`);
  }
}

const shakib = new Player("Shakib", 37, "Bangladesh", 17, { banned: 2 });
// console.log(shakib);

////////////////////Class Inheritance////////////////////////////
class Person {
  secLang!: string; // Use type assertions (non-null) for preventing errror. (not recommended)
  constructor(
    public readonly name: string,
    private age: number,
    public country: string,
    protected lang: string = "English"
  ) {}
  getAge() {
    return `The age is ${this.age}`;
  }
}

const farhan = new Person("Farhan", 22, "Bangladesh", "Bangla");
console.log(farhan);
// console.log(farhan.getAge());
// console.log(farhan.secLang); // undefined

// farhan.lang = "English"; // error
// farhan.country = "England";
// console.log(farhan);

class Developer extends Person {
  constructor(
    public computer: string,
    name: string,
    age: number,
    country: string,
    lang: string
  ) {
    super(name, age, country, lang);
  }
  getLang() {
    return `The lang is ${this.lang}`;
  }
  // theAge() {
  //   return `The age is ${this.age}`;
  // } // error! can't acccess priver property of its parent class
}

const developer1 = new Developer("HP", "Farhan", 22, "Bangladesh", "Bangla");
// console.log(developer1);
// console.log(developer1.getLang());

//////////////////////// Class with interface ///////////////////////
interface Athlate {
  name: string;
  age: number;
  exparience: number;
  play(sport: string): string;
  getCountry(): string;
}

class FootballPlayer implements Athlate {
  constructor(
    public name: string,
    public age: number,
    readonly exparience: number,
    private country: string
  ) {}
  play(sport: string): string {
    return `${this.name} is a ${sport} player from ${this.country}.`;
  }
  getCountry(): string {
    return this.country;
  }
}
const Ronaldo = new FootballPlayer("Ronaldo", 38, 20, "Portogal");
console.log(Ronaldo);
console.log(Ronaldo.play("football"));

//////////////////////// Using static keyword ////////////////////////////
class Peep {
  static count = 0;
  static getCount() {
    return this.count;
  }
  id: number;
  constructor(public name: string) {
    this.id = ++Peep.count;
  }
}

const Mofiz = new Peep("Mofiz");
const Abul = new Peep("Abul");
const Bulbul = new Peep("Bulbul");
const Sokina = new Peep("Sokina");

console.log(Mofiz.id);
console.log(Abul.id);
console.log(Bulbul.id);
console.log(Sokina.id);
console.log(Peep.count);

///////////////////// using getter and setter //////////////////////////
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings");
  }
}

const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data);
MyBands.data = ["Van Halen", 5150]; // must be string data
