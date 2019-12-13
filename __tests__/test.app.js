import healthIndication from '../src/app';

test('Здоровье более 50', () => {
  const user = { name: 'Маг', health: 90 };
  const expected = 'healthy';
  const received = healthIndication(user);

  expect(received).toBe(expected);
});

test('Здоровье от 50 и до 15', () => {
  const user = { name: 'Маг', health: 20 };
  const expected = 'wounded';
  const received = healthIndication(user);

  expect(received).toBe(expected);
});

test('Здоровье менее 15', () => {
  const user = { name: 'Маг', health: 10 };
  const expected = 'critical';
  const received = healthIndication(user);

  expect(received).toBe(expected);
});
