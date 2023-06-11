const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type, health, level, attack, defence) {
    if (typeof (name) === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Недопустимый тип данных либо количество символов меньше 2 или  больше 10');
    }
    if (typeof (type) === 'string' && types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Недопустимый тип данных либо недопустимый тип героя');
    }
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
  levelUp() {
    this.level += 1;
    this.attack = this.attack * 0.2;
    this.defence = this.defence * 0.2;
    if (this.health === 0) {
      throw new Error ('нельзя повысить левел умершего')
    } else {
      this.health = 100;
    }
  }
  damage(points) {
    if (this.health >= 0 ){
      this.health -= points * (1 - this.defence / 100);
    } else throw new Error ('Очки жизни меньше нуля')

  }
}
