import Character from '../Character';

test('test levelup metod ', () => {
  const character = new Character('Петя', 'Swordsman', 100, 1, 25, 25);
  const { level } = character;
  const { attack } = character;
  const { defence } = character;
  character.levelUp();
  expect(character.level).toBe(level + 1);
  expect(character.attack).toBe(attack * 0.2);
  expect(character.defence).toBe(defence * 0.2);
  expect(character.health).toBe(100);
});

test('test levelup metod with health = 0  ', () => {
  const character = new Character('Петя', 'Swordsman', 0, 1, 25, 25);
  expect(() => { character.levelUp(); }).toThrow(Error);
});

test('test damage metod (damage = 5) ', () => {
  const character = new Character('Петя', 'Swordsman', 100, 1, 25, 25);
  const points = 5;
  const { health } = character;
  character.damage(points);
  const result = health - (points * (1 - character.defence / 100));
  expect(character.health).toBe(result);
});

test('test damage metod without health', () => {
  const character = new Character('Петя', 'Swordsman', -1, 1, 25, 25);
  const points = 5;
  expect(() => {
    character.damage(points);
  }).toThrow(Error);
});
