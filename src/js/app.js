export default class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.health = 100;
    this.dope = false;
    this.ap = 100;
    this.distance = 1;
  }

  get stoned() {
    return this.dope;
  }

  set stoned(value) {
    if (value === true) {
      this.dope = true;
    }
  }

  get attack() {
    let attack = (this.ap - 10 * (this.distance - 1));
    if (this.dope === true) {
      attack -= Math.log2(this.distance) * 5;
    }
    return Math.round(attack);
  }

  set attack(value) {
    this.ap = value;
    return this.ap;
  }
}
