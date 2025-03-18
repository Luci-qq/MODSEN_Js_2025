// Task 2: DeepReadonly and makeReadonly
type DeepReadonly<T> = T extends object ? {
    readonly [K in keyof T]: DeepReadonly<T[K]>;
  } : T;
  
  function makeReadonly<T>(obj: T): DeepReadonly<T> {
    if (Array.isArray(obj)) {
      return obj.map(makeReadonly) as DeepReadonly<T>;
    } else if (typeof obj === 'object' && obj !== null) {
      const result = {} as any;
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          result[key] = makeReadonly(obj[key]);
        }
      }
      return result as DeepReadonly<T>;
    } else {
      return obj as DeepReadonly<T>;
    }
  }
  
  const obj = { a: 1, b: { c: 2 } };
  const readonlyObj = makeReadonly(obj);
  console.log(readonlyObj);
  
  // Task 3: processData
  function processData<T, K extends keyof T>(array: T[], keys: K[]): Array<Pick<T, K>> {
    return array.map(obj => {
      const newObj = {} as Pick<T, K>;
      keys.forEach(key => {
        newObj[key] = obj[key];
      });
      return newObj;
    });
  }
  
  interface Person {
    name: string;
    age: number;
    city: string;
  }
  
  const people: Person[] = [
    { name: "Алексей", age: 25, city: "Москва" },
    { name: "Мария", age: 30, city: "Петербург" }
  ];
  
  const result = processData(people, ["name", "age"]);
  console.log(result);
  
  // Task 4: Animal class
  class Animal {
    constructor(public name: string, public sound: string) {}
  }
  
  const dog = new Animal("Собака", "Гав");
  console.log(dog.name);
  console.log(dog.sound);