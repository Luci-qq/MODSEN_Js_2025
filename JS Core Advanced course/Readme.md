

```javascript
# JavaScript Core (Advanced)
Конспектик_))))

## 1. Use Strict

`'use strict'` - строгий режим выполнения JavaScript:

| Свойство                 | Описание                                                                                             |
| ------------------------ | ---------------------------------------------------------------------------------------------------- |
| Расположение             | В начале скрипта/функции                                                                          |
| Отключение               | Нельзя отключить после включения                                                                    |
| Ошибки                   | Выбрасывает ошибки на небезопасные конструкции                                                          |
| Переменные               | Запрещает использование переменных без объявления                                                      |
| Параметры функции        | Запрещает параметры функции с одинаковыми именами                                                       |
| `this`                   | Меняет поведение `this`                                                                              |
| Зарезервированные слова | Ограничивает использование зарезервированных слов                                                         |
| Глобальные переменные    | **Предотвращает автоматическое создание глобальных переменных при присваивании**                         |
| Модули ES6              | **В модулях ES6 (`import`/`export`) режим strict включен по умолчанию**                               |
| `this` в функциях       | **`this` в функциях без явного контекста равен `undefined`, а не глобальному объекту**                  |

```

'use strict';
const name = 'Alex';
// ...другой код

// Без 'use strict':
function demo() {
x = 10; // создаст глобальную переменную
console.log(this); // window (или global в Node.js)
}

// С 'use strict':
function demoStrict() {
'use strict';
x = 10; // ReferenceError: x is not defined
console.log(this); // undefined
}

```

## 2. Переменные: var, let, const

### Объявление переменных

```

// Варианты объявления
var singleVariable;
let firstVariable, secondVariable, thirdVariable;
const constVariable = 5; // обязательно со значением

```

### Имена переменных могут содержать
- Буквы латинского алфавита
- Цифры
- Символы $ и _

### Особенности var

| Свойство                 | Описание                                                                                             |
| ------------------------ | ---------------------------------------------------------------------------------------------------- |
| Область видимости       | Функциональная                                                                                        |
| Hoisting                 | ("всплытие") - можно обращаться до объявления                                                          |
| Глобальный объект        | Становятся свойствами глобального объекта                                                              |

```

// Hoisting
console.log(a); // undefined
var a = 5;
console.log(a); // 5

// Функциональная область видимости
if (true) {
var a = 5;
}
console.log(a); // 5

function foo() {
var b = 10;
}
console.log(b); // ReferenceError: b is not defined

```

### Особенности let и const

| Свойство                 | Описание                                                                                             |
| ------------------------ | ---------------------------------------------------------------------------------------------------- |
| Область видимости       | Блочная                                                                                              |
| Temporal Dead Zone     | Нельзя обращаться до объявления                                                                       |
| Глобальный объект        | Не становятся свойствами глобального объекта                                                              |
| Объявление               | `const` нельзя объявлять без значения                                                                  |
| Переприсваивание         | **`const` запрещает переприсваивание, но не запрещает изменение свойств объектов и элементов массивов** |
| Рекомендации             | **Рекомендуется использовать `const` по умолчанию, переходить к `let` только когда переменная должна изменяться** |

```

// Temporal Dead Zone (TDZ) подробнее
{
// Начало TDZ для x
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10; // Конец TDZ для x
}

// const с объектами
const user = { name: 'John' };
user.name = 'Alex'; // Это работает - изменение свойства
user.age = 30; // Это работает - добавление свойства
user = { name: 'Max' }; // TypeError: Assignment to constant variable

```

## 3. Типы данных

### Примитивные типы

#### Undefined

```

let name;
console.log(name); // undefined

```

#### Boolean

```

const truthyValue = true;
const falsyValue = false;
const boolFromValue = Boolean(1); // true

```

#### Number

```

const int = 4;
const decimal = 0.101;
const binary = 0b11; // 3
const octal = 0o77; // 63
const hexadecimal = 0xFF; // 255

// Специальные значения
const inf = Infinity; // бесконечность
const negInf = -Infinity; // отрицательная бесконечность
const notANumber = NaN; // не число

// Проверка NaN
console.log(isNaN(notANumber)); // true
console.log(Number.isNaN(notANumber)); // true (более строгая проверка)

// Преобразование строк в числа
parseInt('123'); // 123
parseInt('123abc'); // 123
parseFloat('123.45'); // 123.45
Number('123'); // 123
Number('123abc'); // NaN (строгое преобразование)

```

#### String

```

const double = "Добрый день!";
const single = 'Добрый день';
const escaped = 'I\'m a good person.';
const template = `Список покупок: ${product}, ${quantity}шт.`;

// Многострочные шаблонные строки
const multiline = `  Первая строка   Вторая строка   Третья строка`;

// Методы строк
const str = 'JavaScript';
str.length; // 10
str.toUpperCase(); // 'JAVASCRIPT'
str.toLowerCase(); // 'javascript'
str.indexOf('Script'); // 4
str.includes('Java'); // true
str.startsWith('Java'); // true
str.endsWith('pt'); // true
str.slice(0, 4); // 'Java'
str.substring(4, 10); // 'Script'
str.split(''); // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

```

#### BigInt

```

const biggy = 9997000254740991n;
const alsoBig = BigInt(9997000254999999);

```

#### Symbol

```

const sym = Symbol();
const symTwo = Symbol();
console.log(sym === symTwo); // false

// Symbol с описанием
const namedSym = Symbol('description');

// Использование символов как уникальных ключей объекта
const uniqueKey = Symbol('id');
const obj = {
[uniqueKey]: 123
};

```

#### Null

```

const nullValue = null; // намеренное отсутствие значения объекта

```

### Ссылочный тип

#### Object

```

const cat = {}; // литеральная запись
const book = new Object({ title: 'Война и мир', author: 'Лев Толстой' });

// Доступ к свойствам
book.title; // 'Война и мир'
book["author"]; // 'Лев Толстой'

// Операции
delete book.title; // удаление свойства
"title" in book; // проверка существования свойства
for (let key in book) { /* перебор свойств */ }

// Методы Object
Object.keys(book); // ['author']
Object.values(book); // ['Лев Толстой']
Object.entries(book); // [['author', 'Лев Толстой']]
Object.assign({}, book, { year: 1869 }); // { author: 'Лев Толстой', year: 1869 }

```

## 4. Массивы

```

// Объявление
let arr = [item1, item2]; // обычный способ
let arr2 = new Array(item1, item2); // редко используется

// Длина массива
arr.length

// Основные методы
arr.push(item); // добавить в конец
arr.pop(); // удалить с конца
arr.shift(); // удалить с начала
arr.unshift(item); // добавить в начало

// Дополнительные методы
arr.slice(1, 3); // возвращает новый массив, содержащий копию части исходного
arr.splice(1, 2, 'new'); // изменяет исходный массив (удаляет/заменяет/добавляет элементы)
arr.concat(); // объединяет массивы
arr.join('-'); // объединяет элементы в строку с указанным разделителем
arr.reverse(); // меняет порядок элементов на обратный
arr.sort(); // сортирует массив (по умолчанию как строки)
arr.indexOf(item); // ищет индекс элемента
arr.includes(item); // проверяет наличие элемента

// Методы для перебора
arr.forEach((item, index, array) => {
// выполняет функцию для каждого элемента
});

arr.map((item, index, array) => {
// создает новый массив из результатов вызова функции для каждого элемента
return item * 2;
});

arr.filter((item, index, array) => {
// создает массив из элементов, прошедших проверку
return item > 10;
});

arr.reduce((accumulator, item, index, array) => {
// свертка массива в одно значение
return accumulator + item;
}, initialValue);

arr.find(item => item > 10); // находит первый элемент, удовлетворяющий условию
arr.findIndex(item => item > 10); // находит индекс первого элемента, удовлетворяющего условию
arr.some(item => item > 10); // проверяет, удовлетворяет ли хотя бы один элемент условию
arr.every(item => item > 10); // проверяет, удовлетворяют ли все элементы условию

// Перебор элементов
for (let i = 0; i < arr.length; i++) { /* ... */ }
for (let item of arr) { /* ... */ }

// Деструктуризация массивов
const [first, second] =[^1]; // first = 1, second = 2
const [head, ...tail] =[^1]; // head = 1, tail =

// Спред-оператор
const combined = [...arr1, ...arr2]; // объединение массивов
const copy = [...arr]; // создание копии массива

```

## 5. Функции

### Function Declaration

```

function greet(name) {
return "Привет, " + name + "!";
}

```

Можно вызвать до объявления в коде.

### Function Expression

```

const greet = function(name) {
return "Привет, " + name + "!";
};

```

Можно вызвать только после объявления.

### Стрелочная функция

```

const greet = (name) => {
return "Привет, " + name + "!";
};

// Сокращенная запись
const greet = name => "Привет, " + name + "!";

```

### IIFE (Immediately Invoked Function Expression)

```

(function() {
// код
})();

```

### Генераторы

```

function* generateSequence() {
yield 1;
yield 2;
yield 3;
}

const gen = generateSequence();
console.log(gen.next()); // { value: 1, done: false }

```

### Параметры функций

```

// Параметры по умолчанию
function greet(name = 'Гость', greeting = 'Привет') {
return `${greeting}, ${name}!`;
}

// Rest-параметры
function sum(...numbers) {
return numbers.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3, 4, 5); // 15

```

### Методы привязки контекста

```

const person = {
name: 'John',
sayHello() {
return `Привет, я ${this.name}`;
}
};

// call - вызывает функцию с заданным this и аргументами
person.sayHello.call({name: 'Alice'}); // "Привет, я Alice"

// apply - то же, но аргументы передаются массивом
person.sayHello.apply({name: 'Bob'}); // "Привет, я Bob"

// bind - создает новую функцию с привязанным this
const boundFunc = person.sayHello.bind({name: 'Charlie'});
boundFunc(); // "Привет, я Charlie"

```

### Замыкания

```

// Пример замыкания - функция, которая запоминает своё лексическое окружение
function createCounter() {
let count = 0;

return function() {
return ++count;
};
}

const counter = createCounter();
counter(); // 1
counter(); // 2

// Практическое применение: создание приватных переменных
function createUser(name) {
// Приватная переменная
let secretId = Math.random().toString(36).substr(2, 9);

return {
getName() {
return name;
},
validateId(id) {
return id === secretId;
}
};
}

const user = createUser('John');
console.log(user.getName()); // "John"
console.log(user.secretId); // undefined (приватная переменная)

```

### Продвинутые концепции

| Концепция              | Описание                                                                         |
| ---------------------- | -------------------------------------------------------------------------------- |
| Рекурсия               | Функция вызывает сама себя                                                        |
| Замыкание              | Функция + доступ к переменным из внешнего лексического окружения                  |
| Карринг (currying)     | Трансформация функции от многих аргументов в набор функций от одного аргумента      |
| Функции высшего порядка | Функции, которые принимают другие функции в качестве аргументов или возвращают их |

```

// Пример рекурсии: факториал
function factorial(n) {
if (n <= 1) return 1;
return n * factorial(n - 1);
}

// Пример карринга
function curry(fn) {
return function curried(...args) {
if (args.length >= fn.length) {
return fn.apply(this, args);
} else {
return function(...args2) {
return curried.apply(this, args.concat(args2));
};
}
};
}

function sum(a, b, c) {
return a + b + c;
}

const curriedSum = curry(sum);
curriedSum(1)(2)(3); // 6

```

## 6. Классы

```

class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}

greet() {
return `Привет, меня зовут ${this.name} и мне ${this.age} лет.`;
}
}

// Создание экземпляра
const person1 = new Person("Иван", 20);

```

### Наследование

```

class Student extends Person {
constructor(name, age, grade) {
super(name, age);
this.grade = grade;
}

study() {
return `${this.name} учится в ${this.grade} классе.`;
}
}

```

### Приватные свойства и методы

```

class MyClass {
\#privateProperty = 10; // приватное свойство

constructor() {
this.publicProperty = 20; // публичное свойство
}

\#privateMethod() { /* ... */ }
publicMethod() { /* ... */ }

// Использование Symbol для приватных свойств (до ES2022)
\#symbolPrivate = Symbol('private');

constructor() {
this[this.\#symbolPrivate] = 'private value';
}
}

```

### Геттеры и сеттеры

```

class User {
\#name = '';
\#age = 0;

constructor(name, age) {
this.\#name = name;
this.\#age = age;
}

// Геттер - вызывается при обращении к свойству
get name() {
return this.\#name;
}

// Сеттер - вызывается при присваивании
set name(value) {
if (value.length < 2) {
throw new Error('Имя слишком короткое');
}
this.\#name = value;
}

get age() {
return this.\#age;
}

set age(value) {
if (value < 0 || value > 120) {
throw new Error('Недопустимый возраст');
}
this.\#age = value;
}
}

const user = new User('John', 30);
console.log(user.name); // вызывает геттер
user.name = 'Alice'; // вызывает сеттер

```

### Статические методы

```

class MathHelper {
static add(a, b) {
return a + b;
}
}

MathHelper.add(5, 3); // 8

```

### Альтернативы классам

```

// Object.create() для наследования
const personProto = {
greet() {
return `Привет, меня зовут ${this.name}`;
}
};

const john = Object.create(personProto);
john.name = 'John';
john.greet(); // "Привет, меня зовут John"

// Миксины - способ добавления функциональности
const speakerMixin = {
say(phrase) {
console.log(`${this.name} говорит: ${phrase}`);
}
};

const swimmerMixin = {
swim() {
console.log(`${this.name} плавает`);
}
};

// Применение миксинов к классу
class Person {
constructor(name) {
this.name = name;
}
}

// Добавление функциональности миксинов к прототипу класса
Object.assign(Person.prototype, speakerMixin, swimmerMixin);

const john = new Person('John');
john.say('Привет!'); // "John говорит: Привет!"
john.swim(); // "John плавает"

```

## 7. Обработка ошибок

```

try {
// код, который может вызвать ошибку
} catch (error) {
// обработка ошибки
} finally {
// выполняется всегда
}

// Генерация ошибок
throw new Error("Сообщение об ошибке");

```

### Типы ошибок

```

// Встроенные типы ошибок
new Error('Общая ошибка');
new SyntaxError('Ошибка синтаксиса');
new TypeError('Ошибка типа');
new ReferenceError('Ошибка ссылки на несуществующую переменную');
new RangeError('Значение вне допустимого диапазона');
new URIError('Ошибка в кодировании/декодировании URI');
new EvalError('Ошибка в eval()');

```

### Пользовательские ошибки

```

// Создание собственного класса ошибок
class ValidationError extends Error {
constructor(message, field) {
super(message);
this.name = 'ValidationError';
this.field = field;
}
}

// Использование
function validateUser(user) {
if (!user.name) {
throw new ValidationError('Имя обязательно', 'name');
}

if (user.age < 18) {
throw new ValidationError('Возраст должен быть не менее 18 лет', 'age');
}
}

try {
validateUser({name: '', age: 15});
} catch (error) {
if (error instanceof ValidationError) {
console.log(`Ошибка валидации в поле ${error.field}: ${error.message}`);
} else {
console.log(`Неизвестная ошибка: ${error}`);
}
}

```

### try...catch в асинхронном коде

```

// try...catch с колбэками не работает
setTimeout(() => {
try {
// Этот try...catch перехватит ошибку
noSuchFunction();
} catch (e) {
console.log('Ошибка перехвачена в setTimeout', e);
}
}, 1000);

try {
// Этот try...catch НЕ перехватит ошибку из setTimeout
setTimeout(() => {
noSuchFunction();
}, 1000);
} catch (e) {
console.log('Эта строка никогда не выполнится');
}

// try...catch с промисами и async/await
async function fetchData() {
try {
const response = await fetch('/api/data');
const data = await response.json();
return data;
} catch (error) {
console.error('Ошибка при загрузке данных:', error);
}
}

```





