export class Character {
  constructor(name) {
    this.name = name;
  }
}

export class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    this.members.add(character);
  }

  addAll(characters) {
    this.members.add(...characters);
  }

  toArray() {
    return [...this.members];
  }
}

const char1 = new Character("John");
const char2 = new Character("Jane");
const char3 = new Character("Jane");

const team = new Team();
team.add(char1);
team.add(char2);
team.add(char3);
team.add(char3);

console.log(team.toArray());

// task 2

export class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(500, "Internal Server Error");
    this.errors.set(501, "Not Implemented");
    this.errors.set(502, "Bad Gateway");
  }

  translate(code) {
    return this.errors.get(code) ? this.errors.get(code) : "Unknown error";
  }

}

const x1 = new ErrorRepository();

console.log(x1.translate(503));
