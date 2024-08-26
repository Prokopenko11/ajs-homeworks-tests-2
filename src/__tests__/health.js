import showHealth from '../showHealth';

test.each([
  [{ name: 'Маг', health: 50 }, 'healthy'],
  [{ name: 'Воин', health: 15 }, 'wounded'],
  [{ name: 'Лучник', health: 0 }, 'critical'],
  [{ name: 'Эльф', health: -10 }, 'unknown'],
])('testing showHealth function with %p character', (character, expected) => {
  const result = showHealth(character);
  expect(result).toBe(expected);
});
