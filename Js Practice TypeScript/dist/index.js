"use strict";
function makeReadonly(obj) {
    if (Array.isArray(obj)) {
        return obj.map(makeReadonly);
    }
    else if (typeof obj === 'object' && obj !== null) {
        const result = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                result[key] = makeReadonly(obj[key]);
            }
        }
        return result;
    }
    else {
        return obj;
    }
}
const obj = { a: 1, b: { c: 2 } };
const readonlyObj = makeReadonly(obj);
console.log(readonlyObj);
// Task 3: processData
function processData(array, keys) {
    return array.map(obj => {
        const newObj = {};
        keys.forEach(key => {
            newObj[key] = obj[key];
        });
        return newObj;
    });
}
const people = [
    { name: "Алексей", age: 25, city: "Москва" },
    { name: "Мария", age: 30, city: "Петербург" }
];
const result = processData(people, ["name", "age"]);
console.log(result);
// Task 4: Animal class
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
}
const dog = new Animal("Собака", "Гав");
console.log(dog.name);
console.log(dog.sound);
