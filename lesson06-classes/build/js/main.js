"use strict";
class Player {
    constructor(name, age, country, experience, other) {
        this.name = name;
        this.age = age;
        this.country = country;
        this.experience = experience;
        this.other = other;
    }
    play() {
        console.log(`The player name is ${this.name}`);
    }
}
const shakib = new Player("Shakib", 37, "Bangladesh", 17, { banned: 2 });
// console.log(shakib);
////////////////////Class Inheritance////////////////////////////
class Person {
    constructor(name, age, country, lang = "English") {
        this.name = name;
        this.age = age;
        this.country = country;
        this.lang = lang;
    }
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
    constructor(computer, name, age, country, lang) {
        super(name, age, country, lang);
        this.computer = computer;
    }
    getLang() {
        return `The lang is ${this.lang}`;
    }
}
const developer1 = new Developer("HP", "Farhan", 22, "Bangladesh", "Bangla");
class FootballPlayer {
    constructor(name, age, exparience, country) {
        this.name = name;
        this.age = age;
        this.exparience = exparience;
        this.country = country;
    }
    play(sport) {
        return `${this.name} is a ${sport} player from ${this.country}.`;
    }
    getCountry() {
        return this.country;
    }
}
const Ronaldo = new FootballPlayer("Ronaldo", 38, 20, "Portogal");
console.log(Ronaldo);
console.log(Ronaldo.play("football"));
//////////////////////// Using static keyword ////////////////////////////
class Peep {
    static getCount() {
        return this.count;
    }
    constructor(name) {
        this.name = name;
        this.id = ++Peep.count;
    }
}
Peep.count = 0;
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
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data);
MyBands.data = ["Van Halen", 5150]; // must be string data
