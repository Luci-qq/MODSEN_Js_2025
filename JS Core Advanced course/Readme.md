# JavaScript Core (Advanced)
Конспектик_))))
## 1. Use Strict

`'use strict'` - строгий режим выполнения JavaScript:
- Располагается в начале скрипта/функции
- Нельзя отключить после включения
- Выбрасывает ошибки на небезопасные конструкции
- Запрещает использование переменных без объявления
- Запрещает параметры функции с одинаковыми именами
- Меняет поведение `this`
- Ограничивает использование зарезервированных слов
- **Предотвращает автоматическое создание глобальных переменных при присваивании**
- **В модулях ES6 (`import`/`export`) режим strict включен по умолчанию**
- **`this` в функциях без явного контекста равен `undefined`, а не глобальному объекту**

```javascript
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

```javascript
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
- Функциональная область видимости
- Hoisting ("всплытие") - можно обращаться до объявления
- Становятся свойствами глобального объекта

```javascript
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
- Блочная область видимости
- Нельзя обращаться до объявления (Temporal Dead Zone)
- Не становятся свойствами глобального объекта
- `const` нельзя объявлять без значения
- **`const` запрещает переприсваивание, но не запрещает изменение свойств объектов и элементов массивов**
- **Рекомендуется использовать `const` по умолчанию, переходить к `let` только когда переменная должна изменяться**

```javascript
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
```javascript
let name;
console.log(name); // undefined
```

#### Boolean
```javascript
const truthyValue = true;
const falsyValue = false;
const boolFromValue = Boolean(1); // true
```

#### Number
```javascript
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
```javascript
const double = "Добрый день!";
const single = 'Добрый день';
const escaped = 'I\'m a good person.';
const template = `Список покупок: ${product}, ${quantity}шт.`;

// Многострочные шаблонные строки
const multiline = `
  Первая строка
  Вторая строка
  Третья строка
`;

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
```javascript
const biggy = 9997000254740991n;
const alsoBig = BigInt(9997000254999999);
```

#### Symbol
```javascript
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
```javascript
const nullValue = null; // намеренное отсутствие значения объекта
```

### Ссылочный тип

#### Object
```javascript
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

```javascript
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
arr.concat([3, 4]); // объединяет массивы
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
const [first, second] = [1, 2]; // first = 1, second = 2
const [head, ...tail] = [1, 2, 3, 4]; // head = 1, tail = [2, 3, 4]

// Спред-оператор
const combined = [...arr1, ...arr2]; // объединение массивов
const copy = [...arr]; // создание копии массива
```

## 5. Функции

### Function Declaration
```javascript
function greet(name) {
  return "Привет, " + name + "!";
}
```
Можно вызвать до объявления в коде.

### Function Expression
```javascript
const greet = function(name) {
  return "Привет, " + name + "!";
};
```
Можно вызвать только после объявления.

### Стрелочная функция
```javascript
const greet = (name) => {
  return "Привет, " + name + "!";
};

// Сокращенная запись
const greet = name => "Привет, " + name + "!";
```

### IIFE (Immediately Invoked Function Expression)
```javascript
(function() {
  // код
})();
```

### Генераторы
```javascript
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generateSequence();
console.log(gen.next()); // { value: 1, done: false }
```

### Параметры функций
```javascript
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
```javascript
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
```javascript
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
- Рекурсия - функция вызывает сама себя
- Замыкание - функция + доступ к переменным из внешнего лексического окружения
- **Карринг (currying) - трансформация функции от многих аргументов в набор функций от одного аргумента**
- **Функции высшего порядка - функции, которые принимают другие функции в качестве аргументов или возвращают их**

```javascript
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

```javascript
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
```javascript
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
```javascript
class MyClass {
  #privateProperty = 10; // приватное свойство
  
  constructor() {
    this.publicProperty = 20; // публичное свойство
  }
  
  #privateMethod() { /* ... */ }
  publicMethod() { /* ... */ }

  // Использование Symbol для приватных свойств (до ES2022)
  #symbolPrivate = Symbol('private');

  constructor() {
    this[this.#symbolPrivate] = 'private value';
  }
}
```

### Геттеры и сеттеры
```javascript
class User {
  #name = '';
  #age = 0;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  // Геттер - вызывается при обращении к свойству
  get name() {
    return this.#name;
  }

  // Сеттер - вызывается при присваивании
  set name(value) {
    if (value.length < 2) {
      throw new Error('Имя слишком короткое');
    }
    this.#name = value;
  }

  get age() {
    return this.#age;
  }

  set age(value) {
    if (value < 0 || value > 120) {
      throw new Error('Недопустимый возраст');
    }
    this.#age = value;
  }
}

const user = new User('John', 30);
console.log(user.name); // вызывает геттер
user.name = 'Alice'; // вызывает сеттер
```

### Статические методы
```javascript
class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

MathHelper.add(5, 3); // 8
```

### Альтернативы классам
```javascript
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

```javascript
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
```javascript
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
```javascript
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
```javascript
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
    throw error; // Пробрасываем ошибку дальше
  }
}
```

### Обработка ошибок в промисах
```javascript
// Вариант 1: через .catch()
fetchData()
  .then(data => {
    // обработка успешного результата
  })
  .catch(error => {
    // обработка ошибки
  });

// Вариант 2: через второй аргумент .then()
fetchData()
  .then(
    data => {
      // обработка успешного результата
    },
    error => {
      // обработка ошибки
    }
  );
```

## 8. Promise (Промисы)

Promise (промис) - это специальный объект JavaScript, который связывает "создающий" и "потребляющий" коды для асинхронных операций.

### Основные понятия

- **Promise** – объект, представляющий результат асинхронной операции
- **Executor** – функция с аргументами `resolve` и `reject`, запускается автоматически при создании промиса

### Состояния промиса

Промис всегда находится в одном из трёх состояний:
- **pending** – начальное состояние (ожидание)
- **fulfilled** – операция завершилась успешно с результатом (`value`)
- **rejected** – операция завершилась с ошибкой (`error`)

```javascript
// Создание промиса
const promise = new Promise(function(resolve, reject) {
  // Асинхронная операция
  const data = getData(); // предполагаемая асинхронная функция
  
  if (data) {
    resolve(data); // переход в состояние fulfilled с результатом data
  } else {
    reject(new Error('Не удалось получить данные')); // переход в состояние rejected с объектом ошибки
  }
});
```

### Методы промисов

#### Обработка результата

```javascript
promise
  .then(
    function(result) { /* обработка успешного результата */ },
    function(error) { /* обработка ошибки */ }  // необязательный аргумент
  );

// Более читаемый подход с цепочкой
promise
  .then(function(result) {
    // обработка успешного результата
    return transformedResult; // можно вернуть новое значение или промис
  })
  .catch(function(error) {
    // обработка ошибки
    console.error('Произошла ошибка:', error);
    
    // Можно обработать ошибку и продолжить цепочку
    return fallbackValue;
    
    // Или пробросить ошибку дальше
    // throw error;
  })
  .finally(function() {
    // выполняется всегда, независимо от результата
    // здесь обычно освобождают ресурсы, закрывают соединения и т.д.
    // не принимает аргументов и не влияет на цепочку
  });
```

#### Цепочки промисов

```javascript
fetchData()
  .then(data => {
    return processData(data); // возвращает промис
  })
  .then(processedData => {
    return saveData(processedData); // возвращает промис
  })
  .then(saveResult => {
    console.log('Данные сохранены:', saveResult);
  })
  .catch(error => {
    // перехватывает ошибки на любом этапе цепочки
    console.error('Произошла ошибка в цепочке:', error);
  });
```

### Статические методы Promise

#### Promise.all()

Ожидает выполнения всех промисов и возвращает массив с их результатами. Если хотя бы один промис завершается с ошибкой, весь Promise.all отклоняется с этой ошибкой.

```javascript
const promises = [
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/comments')
];

Promise.all(promises)
  .then(responses => {
    // массив всех ответов
    return Promise.all(responses.map(response => response.json()));
  })
  .then(data => {
    // массив данных из всех запросов
    const [users, posts, comments] = data;
    console.log('Пользователи:', users);
    console.log('Посты:', posts);
    console.log('Комментарии:', comments);
  })
  .catch(error => {
    // если хотя бы один запрос завершится ошибкой
    console.error('Произошла ошибка:', error);
  });
```

#### Promise.allSettled()

Ждёт завершения всех промисов (успешно или с ошибкой) и возвращает массив объектов с информацией о результате каждого промиса.

```javascript
Promise.allSettled(promises)
  .then(results => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`Промис ${index} выполнен:`, result.value);
      } else {
        console.log(`Промис ${index} отклонен:`, result.reason);
      }
    });
  });
```

#### Promise.race()

Возвращает результат или ошибку самого быстрого промиса из массива.

```javascript
// Пример с таймаутом для запроса
const fetchWithTimeout = (url, timeout = 5000) => {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Таймаут запроса')), timeout)
    )
  ]);
};

fetchWithTimeout('/api/data', 3000)
  .then(response => response.json())
  .then(data => console.log('Данные получены:', data))
  .catch(error => console.error('Ошибка:', error));
```

#### Promise.any()

Возвращает результат первого успешно выполненного промиса. Если все промисы отклонены, возвращает ошибку `AggregateError`.

```javascript
const mirrors = [
  'https://mirror1.example.com/file.zip',
  'https://mirror2.example.com/file.zip',
  'https://mirror3.example.com/file.zip'
];

Promise.any(mirrors.map(url => fetch(url)))
  .then(firstResponse => {
    console.log('Загрузка файла с первого доступного зеркала');
    return firstResponse.blob();
  })
  .catch(error => {
    // AggregateError содержит массив всех ошибок
    console.error('Все зеркала недоступны:', error.errors);
  });
```

#### Promise.resolve() и Promise.reject()

Создают уже выполненные (или отклоненные) промисы.

```javascript
// Кеширование данных
const cache = new Map();

function fetchData(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url)); // мгновенно возвращает значение из кеша как промис
  }
  
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      cache.set(url, data);
      return data;
    });
}

// Отклонение при некорректных данных
function validateInput(data) {
  if (!data || typeof data !== 'object') {
    return Promise.reject(new Error('Некорректные входные данные'));
  }
  
  return Promise.resolve(data);
}
```

## 9. Async/Await

Async/await - это синтаксический сахар для работы с промисами, делающий асинхронный код более читаемым и похожим на синхронный.

### Основы async/await

```javascript
// Функция с ключевым словом async всегда возвращает промис
async function fetchUserData(userId) {
  try {
    // await приостанавливает выполнение функции до разрешения промиса
    const response = await fetch(`/api/users/${userId}`);
    
    // Если промис отклонен, генерируется исключение
    if (!response.ok) {
      throw new Error(`HTTP ошибка! Статус: ${response.status}`);
    }
    
    const userData = await response.json();
    return userData; // автоматически оборачивается в Promise.resolve()
  } catch (error) {
    // Перехват ошибок, возникших при ожидании промисов
    console.error('Ошибка при загрузке данных пользователя:', error);
    throw error; // проброс ошибки дальше (Promise.reject())
  }
}

// Использование асинхронной функции
fetchUserData(123)
  .then(userData => {
    console.log('Данные пользователя:', userData);
  })
  .catch(error => {
    console.error('Не удалось получить данные пользователя:', error);
  });
```

### Параллельное выполнение с async/await

```javascript
async function fetchAllData() {
  try {
    // Запускаем запросы параллельно
    const userPromise = fetch('/api/users').then(r => r.json());
    const postsPromise = fetch('/api/posts').then(r => r.json());
    const commentsPromise = fetch('/api/comments').then(r => r.json());
    
    // Ждем выполнения всех промисов
    const [users, posts, comments] = await Promise.all([
      userPromise, postsPromise, commentsPromise
    ]);
    
    return { users, posts, comments };
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
    throw error;
  }
}
```

### Особенности async/await

#### Обработка ошибок

```javascript
// Сравнение обработки ошибок с промисами и async/await

// Промисы с цепочкой then/catch
fetchData()
  .then(data => processData(data))
  .then(processed => {
    console.log('Обработано:', processed);
  })
  .catch(error => {
    console.error('Произошла ошибка:', error);
  });

// Тот же код с async/await
async function fetchAndProcess() {
  try {
    const data = await fetchData();
    const processed = await processData(data);
    console.log('Обработано:', processed);
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }
}
```

#### Циклы и итерации

```javascript
// Последовательная обработка массива с async/await
async function processItems(items) {
  const results = [];
  
  for (const item of items) {
    // каждая итерация ждет завершения предыдущей
    const result = await processItem(item);
    results.push(result);
  }
  
  return results;
}

// Параллельная обработка массива с async/await
async function processItemsParallel(items) {
  // Запускаем все промисы одновременно
  const promises = items.map(item => processItem(item));
  
  // Ждем завершения всех промисов
  return await Promise.all(promises);
}
```

#### Асинхронный IIFE (Immediately Invoked Function Expression)

```javascript
// Для использования await на верхнем уровне можно использовать асинхронный IIFE
(async function() {
  try {
    const data = await fetchData();
    console.log('Данные:', data);
  } catch (error) {
    console.error('Ошибка:', error);
  }
})();
```

### Лучшие практики async/await

1. **Всегда используйте try/catch**
   ```javascript
   async function fetchData() {
     try {
       return await fetch('/api/data').then(r => r.json());
     } catch (error) {
       console.error('Ошибка загрузки:', error);
       // Возможно вернуть запасные данные или повторить запрос
       return { fallback: true };
     }
   }
   ```

2. **Избегайте блокирования без необходимости**
   ```javascript
   // Плохо: последовательные запросы, когда можно параллельные
   async function getDataSequential() {
     const users = await fetchUsers();
     const posts = await fetchPosts(); // ждет завершения fetchUsers
     return { users, posts };
   }
   
   // Хорошо: параллельные запросы, когда они независимы
   async function getDataParallel() {
     const [users, posts] = await Promise.all([
       fetchUsers(),
       fetchPosts()
     ]);
     return { users, posts };
   }
   ```

3. **Смешивание с промисами при необходимости**
   ```javascript
   async function processWithTimeout(data, timeoutMs = 5000) {
     return Promise.race([
       processData(data),
       new Promise((_, reject) => 
         setTimeout(() => reject(new Error('Timeout')), timeoutMs)
       )
     ]);
   }
   ```

## 10. Event Loop (Цикл событий)

Event Loop - механизм, который позволяет JavaScript выполнять неблокирующие операции, несмотря на его однопоточность.

### Основные компоненты системы выполнения JavaScript

1. **Heap (Куча)** - область памяти, где хранятся объекты
2. **Stack (Стек вызовов)** - отслеживает текущее выполнение функций
3. **Queue (Очередь задач)**:
   - **Macrotask Queue (Очередь макрозадач)**
   - **Microtask Queue (Очередь микрозадач)**
4. **Render Queue (Очередь рендеринга)** - в браузере

### Принцип работы Event Loop

1. Выбирает задачу из стека вызовов и выполняет её до завершения
2. Когда стек вызовов пуст, проверяет очередь микрозадач
3. Выполняет **все** микрозадачи до опустошения очереди
4. Берет **одну** макрозадачу из очереди и выполняет её
5. Проверяет необходимость рендеринга (в браузере)
6. Возвращается к шагу 2

```
┌─────────────────────────┐
│        Call Stack       │
└───────────┬─────────────┘
            │
            │ 1. Выполнение синхронного кода
            │
            ▼
┌─────────────────────────┐
│    Microtask Queue      │
└───────────┬─────────────┘
            │
            │ 2. Выполнение ВСЕХ микрозадач
            │
            ▼
┌─────────────────────────┐
│    Macrotask Queue      │
└───────────┬─────────────┘
            │
            │ 3. Выполнение ОДНОЙ макрозадачи
            │
            ▼
┌─────────────────────────┐
│     Render Queue        │
└───────────┬─────────────┘
            │
            │ 4. Рендеринг (при необходимости)
            │
            └─────────────────► возврат к микрозадачам
```

### Типы задач

#### Микрозадачи (Microtasks)
- Обработчики промисов: `.then()`, `.catch()`, `.finally()`
- `queueMicrotask()`
- Intersection Observer
- MutationObserver

#### Макрозадачи (Macrotasks)
- `setTimeout()`, `setInterval()`
- `requestAnimationFrame()` (в браузере)
- События ввода/вывода (I/O)
- События UI (клики, клавиатура и т.д.)
- AJAX/XHR/fetch
- Чтение/запись файлов (в Node.js)

### Примеры работы Event Loop

#### Пример 1: Синхронный код, setTimeout и Promise

```javascript
console.log('1 - синхронный'); // Синхронный код (стек вызовов)

setTimeout(() => {
  console.log('2 - setTimeout'); // Макрозадача
}, 0);

Promise.resolve()
  .then(() => {
    console.log('3 - Promise.then'); // Микрозадача
  });

console.log('4 - синхронный'); // Синхронный код (стек вызовов)

// Вывод:
// 1 - синхронный
// 4 - синхронный
// 3 - Promise.then
// 2 - setTimeout
```

#### Пример 2: Последовательность выполнения микрозадач

```javascript
console.log('Начало'); // 1

setTimeout(() => {
  console.log('setTimeout 1'); // 5
  Promise.resolve().then(() => {
    console.log('Promise внутри setTimeout'); // 6
  });
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1'); // 3
  
  setTimeout(() => {
    console.log('setTimeout внутри Promise'); // 7
  }, 0);
});

Promise.resolve().then(() => {
  console.log('Promise 2'); // 4
});

console.log('Конец'); // 2

// Вывод:
// Начало
// Конец
// Promise 1
// Promise 2
// setTimeout 1
// Promise внутри setTimeout
// setTimeout внутри Promise
```

### Практические следствия работы Event Loop

1. **Все синхронные операции блокируют UI**

   Тяжелые вычисления нужно разбивать или переносить в Web Workers:
   
   ```javascript
   // Плохо: блокирует интерфейс
   function heavyOperation() {
     for (let i = 0; i < 1000000000; i++) {
       // долгие вычисления
     }
   }
   
   // Лучше: разбить на части с setTimeout
   function nonBlockingOperation(i = 0, chunkSize = 1000000, totalIterations = 1000000000) {
     // Обрабатываем часть данных
     let end = Math.min(i + chunkSize, totalIterations);
     
     for (let j = i; j < end; j++) {
       // вычисления
     }
     
     // Если остались данные, планируем следующую обработку
     if (end < totalIterations) {
       setTimeout(() => nonBlockingOperation(end, chunkSize, totalIterations), 0);
     }
   }
   ```

2. **Микрозадачи могут блокировать макрозадачи**

   Если добавлять новые микрозадачи в обработчиках промисов, то макрозадачи могут никогда не выполниться:
   
   ```javascript
   // Опасно: бесконечный цикл Promise.then
   function neverEndingPromises() {
     Promise.resolve().then(() => {
       console.log('Микрозадача выполнена');
       // Добавляем новую микрозадачу
       neverEndingPromises();
     });
   }
   
   setTimeout(() => {
     console.log('Эта макрозадача никогда не выполнится');
   }, 0);
   
   neverEndingPromises();
   ```

3. **UI обновления происходят между макрозадачами**

   Анимации и изменения DOM лучше делать через `requestAnimationFrame`:
   
   ```javascript
   // Плохо: не синхронизировано с отрисовкой
   function animateEl() {
     const el = document.getElementById('animated');
     let position = 0;
     
     setInterval(() => {
       position += 5;
       el.style.left = position + 'px';
     }, 16); // примерно 60fps
   }
   
   // Лучше: синхронизировано с отрисовкой
   function animateElSmooth() {
     const el = document.getElementById('animated');
     let position = 0;
     
     function frame() {
       position += 5;
       el.style.left = position + 'px';
       
       requestAnimationFrame(frame); // планируется на следующий цикл рендеринга
     }
     
     requestAnimationFrame(frame);
   }
   ```

### NodeJS Event Loop vs Browser Event Loop

NodeJS имеет более сложную модель Event Loop с дополнительными фазами:

1. **Timers** - выполнение колбэков, запланированных через `setTimeout()` и `setInterval()`
2. **I/O callbacks** - выполнение почти всех колбэков, отложенных с предыдущего цикла
3. **Idle, prepare** - используется внутри 
4. **Poll** - получение новых I/O событий и выполнение связанных с ними колбэков
5. **Check** - выполнение колбэков `setImmediate()`
6. **Close callbacks** - выполнение колбэков закрытия, например `socket.on('close', ...)`

Между каждой фазой выполняются все доступные микрозадачи (промисы).
