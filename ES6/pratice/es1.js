class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    printPersonData() {
        return `${this.name}  ${this.surname}`;
    }
}

let pera = new Person("Pera", "Peric");

class Programmer extends Person {
    constructor(name, surname, language) {
        super(name, surname);
        this.language = language;
    }

    printProgrammerData() {
        return `${super.printPersonData()} ${this.language.join(" - ")} `
    }
    learnedNewLanguage(x) {
        this.language.push(x);

    }
}
let programer = new Programmer(pera.name, pera.surname, ["javascript", "php", "json"]);
console.log(pera.printPersonData());
programer.learnedNewLanguage("PHP");
console.log(programer.printProgrammerData());