import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Daemon from './Daemon';
import Undead from './Undead';
import Zombie from './Zombie';

export default function initialState() {
  return {
    Bowman: new Bowman('Федя', 'Bowman', 100, 1),
    Swordsman: new Swordsman('Петя', 'Swordsman', 100, 1),
    Magician: new Magician('Коля', 'Magician', 100, 1),
    Daemon: new Daemon('Надя', 'Daemon', 100, 1),
    Undead: new Undead('Валя', 'Undead', 100, 1),
    Zombie: new Zombie('Дима', 'Zombie', 100, 1),
  };
}
