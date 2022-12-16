import json from './parser';
import read from './reader';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static async load() {
      try {
        const data = await read();
        const result = await json(data);

        return Promise.reject(result);
      } catch(error) {
        return error
      }
  }
}