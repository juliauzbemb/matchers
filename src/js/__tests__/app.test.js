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
    { name: 'маг', health: 100 },
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 80 },
  ], expectedRes],
  [[
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 100 },
    { name: 'мечник', health: 10 },
  ], expectedRes],
  [[
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 100 },
  ], expectedRes],
])(
  ('should sort data for %o'),
  (data, expected) => {
    const result = sortHeroesByHealthDesc(data);

    expect(result).toEqual(expected);
  },
);
