type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

function ensureRequiredKeys<T extends object>(
  obj: T,
  requiredKeys: RequiredKeys<T>[]
): obj is T & Required<Pick<T, RequiredKeys<T>>> {
  for (const key of requiredKeys) {
    if (obj[key] === undefined) {
      console.error(`Error: Missing required key`, key);
      return false;
    }
  }
  return true;
}

interface Game {
  id: number;
  name: string;
  dateReleased: string;
  version: number;
  category: string;
  creator?: string;
}

type GameRequiredKeys = RequiredKeys<Game>;

const gameName1: Game = {
  id: 1,
  name: "Game Name 1",
  dateReleased: "2025-05-23",
  version: 1.0,
  category: "Game Category",
  creator: "Game Creator Company1",
};

if (
  ensureRequiredKeys(gameName1, [
    "id",
    "name",
    "dateReleased",
    "version",
    "category",
  ])
) {
  console.log("GameName1 has all required keys.");
}

const gameName2: Game = {
  id: 1,
  name: "Game Name 2",
  dateReleased: "2025-05-23",
  version: 1.0,
};

if (
  !ensureRequiredKeys(gameName2, [
    "id",
    "name",
    "dateReleased",
    "version",
    "category",
  ])
) {
  console.log("GameName2 is missing required keys.");
}

/**
 * execute program command: For Node.js >=23
 * `node --experimental-transform-types 1.2-requiredKeysUtilityType.ts`
 * 
 * <<<<< OUTPUT >>>>>
    GameName1 has all required keys.

    Error: Missing required key category
    GameName2 is missing required keys.
 */
