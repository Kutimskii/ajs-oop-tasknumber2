import Character from '../Character';

test.each([
  ['Федя', 8],
  ['Федя', 'yyyy'],
  [55, 'Bowman'],
  ['ф', 'Bowman'],
  ['ihjvjhssd5f', 'Bowman'],
])('test wrong name or wrong length with %s', (name, type) => {
  expect(() => {
    const result = new Character(name, type);
    return result;
  }).toThrow(Error);
});
