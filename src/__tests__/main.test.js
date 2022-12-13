import GameSavingLoader from '../gameSavingLoader';

test('should return string', async () => {
  const gameSavingLoader = await GameSavingLoader.load();
  const expected = {
    created: 3236310700,
    id: 22,
    userInfo: {
      id: 1,
      level: 10,
      name: 'Hitman',
      points: 2000,
    },
  };

  expect(gameSavingLoader).toBe(expected);
});