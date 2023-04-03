import sortHeroesByHealthDesc from '../app';

const expectedRes = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test.each([
  [[
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ], expectedRes],
  [[
    { name: 'мечник', health: 10 },
    { health: 100 },
    { name: 'лучник', health: 80 },
  ], null],
  [[
    { name: 'мечник', health: 10 },
    { name: 'маг' },
    { name: 'лучник', health: 80 },
  ], null],
  [[
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 'string' },
    { name: 'лучник', health: 80 },
  ], null],
])(
  ('should sort data for %o'),
  (data, expected) => {
    const result = sortHeroesByHealthDesc(data);

    expect(result).toEqual(expected);
  },
);
