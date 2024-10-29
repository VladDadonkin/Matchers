import { sortHeroes } from '../src/sortHeroes';

test('sort heroes by health in descending order', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const sortedHeroes = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(sortHeroes(heroes)).toEqual(sortedHeroes);
});

test('toBe vs toEqual', () => {
  const heroesArray1 = [{ name: 'маг', health: 100 }];
  const heroesArray2 = [{ name: 'маг', health: 100 }];

  expect(heroesArray1).not.toBe(heroesArray2); 
  expect(heroesArray1).toEqual(heroesArray2);   
});
