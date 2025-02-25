# JavaScript Core (Advanced)
Конспектик_))))
## 1. Use Strict
# JavaScript Core (Advanced)

## 1. Use Strict

`'use strict'` - строгий режим выполнения JavaScript:

| Особенность | Описание |
|-------------|----------|
| Расположение | В начале скрипта/функции |
| Включение | Нельзя отключить после включения |
| Ошибки | Выбрасывает ошибки на небезопасные конструкции |
| Переменные | Запрещает использование переменных без объявления |
| Параметры | Запрещает параметры функции с одинаковыми именами |
| This | Меняет поведение `this` |
| Зарезервированные слова | Ограничивает использование |
| Глобальные переменные | **Предотвращает автоматическое создание при присваивании** |
| ES6 модули | **Режим strict включен по умолчанию** |
| This в функциях | **Равен `undefined`, а не глобальному объекту** |

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

### Сравнение var, let и const

| Характеристика | var | let | const |
|----------------|-----|-----|-------|
| Область видимости | Функциональная | Блочная | Блочная |
| Hoisting (всплытие) | Да | Нет (TDZ) | Нет (TDZ) |
| Свойство глобального объекта | Да | Нет | Нет |
| Переопределение | Разрешено | Разрешено | Запрещено |
| Объявление без инициализации | Разрешено | Разрешено | Запрещено |
| Изменение свойств объекта | - | - | **Разрешено** |
| Рекомендуется использовать | Редко | Для изменяемых | **По умолчанию** |

```javascript
// Hoisting
console.log(a); // undefined
var a = 5;
console.log(a); // 5

// Функциональная vs блочная область видимости
if (true) {
  var a = 5;
  let b = 10;
  const c = 15;
}
console.log(a); // 5
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined

// Temporal Dead Zone (TDZ)
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

| Тип | Описание | Пример |
|-----|----------|--------|
| Undefined | Отсутствие значения | `let a;` (a === undefined) |
| Boolean | Логический | `true`, `false` |
| Number | Числовой | `42`, `3.14`, `NaN`, `Infinity` |
| String | Строковый | `"Привет"`, `'Мир'`, `` `Шаблон ${var}` `` |
| BigInt | Большие целые числа | `9007199254740991n` |
| Symbol | Уникальные идентификаторы | `Symbol('id')` |
| Null | Отсутствие объекта | `null` |

### Операции с примитивными типами

#### Number

```javascript
const int = 4;
const decimal = 0.101;
const binary = 0b11; // 3
const octal = 0o77; // 63
const hexadecimal = 0xFF; // 255

// Специальные значения
const inf = Infinity;
const negInf = -Infinity;
const notANumber = NaN;

// Проверка NaN
isNaN(notANumber); // true
Number.isNaN(notANumber); // true (более строгая проверка)

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
```

##### Основные методы строк

| Метод | Описание | Пример |
|-------|----------|--------|
| length | Длина строки | `"JavaScript".length` → 10 |
| toUpperCase() | Верхний регистр | `"JavaScript".toUpperCase()` → "JAVASCRIPT" |
| toLowerCase() | Нижний регистр | `"JavaScript".toLowerCase()` → "javascript" |
| indexOf() | Позиция подстроки | `"JavaScript".indexOf("Script")` → 4 |
| includes() | Наличие подстроки | `"JavaScript".includes("Java")` → true |
| startsWith() | Начинается с | `"JavaScript".startsWith("Java")` → true |
| endsWith() | Заканчивается на | `"JavaScript".endsWith("pt")` → true |
| slice() | Извлечение части | `"JavaScript".slice(0, 4)` → "Java" |
| substring() | Извлечение части | `"JavaScript".substring(4, 10)` → "Script" |
| split() | Разделение на массив | `"JavaScript".split("")` → ['J','a','v','a','S',...] |

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

### Ссылочный тип: Object

```javascript
const cat = {}; // литеральная запись
const book = new Object({ title: 'Война и мир', author: 'Лев Толстой' });

// Доступ к свойствам
book.title; // 'Война и мир'
book["author"]; // 'Лев Толстой'

// Операции
delete book.title; // удаление свойства
"title" in book; // проверка существования свойства
```

#### Статические методы Object

| Метод | Описание | Пример |
|-------|----------|--------|
| keys() | Массив ключей | `Object.keys({a:1, b:2})` → ['a', 'b'] |
| values() | Массив значений | `Object.values({a:1, b:2})` → [1, 2] |
| entries() | Массив пар | `Object.entries({a:1, b:2})` → [['a',1], ['b',2]] |
| assign() | Копирование свойств | `Object.assign({}, {a:1}, {b:2})` → {a:1, b:2} |
| freeze() | Запрет изменений | `Object.freeze(obj)` - защита от изменений |
| is() | Строгое сравнение | `Object.is(NaN, NaN)` → true |

## 4. Массивы

```javascript
// Объявление
let arr = [item1, item2]; // обычный способ
let arr2 = new Array(item1, item2); // редко используется

// Длина массива
arr.length
```

### Основные методы массивов

| Категория | Метод | Описание | Изменяет исходный? |
|-----------|-------|----------|-------------------|
| **Базовые** | push() | Добавление в конец | Да |
| | pop() | Удаление с конца | Да |
| | shift() | Удаление с начала | Да |
| | unshift() | Добавление в начало | Да |
| **Работа с частями** | slice() | Извлечение части | Нет |
| | splice() | Удаление/добавление элементов | Да |
| | concat() | Объединение массивов | Нет |
| **Поиск** | indexOf() | Поиск индекса элемента | Нет |
| | includes() | Проверка наличия элемента | Нет |
| | find() | Поиск по условию | Нет |
| | findIndex() | Поиск индекса по условию | Нет |
| **Преобразование** | join() | Объединение в строку | Нет |
| | reverse() | Обращение порядка | Да |
| | sort() | Сортировка | Да |
| **Итерация** | forEach() | Перебор элементов | Нет |
| | map() | Преобразование элементов | Нет |
| | filter() | Фильтрация | Нет |
| | reduce() | Свёртка в одно значение | Нет |
| | some() | Проверка наличия по условию | Нет |
| | every() | Проверка всех элементов | Нет |

```javascript
// Примеры итераций
arr.forEach((item, index, array) => {
  // выполняет функцию для каждого элемента
});

const doubled = arr.map((item, index, array) => {
  // преобразует каждый элемент
  return item * 2;
});

const filtered = arr.filter((item, index, array) => {
  // создает массив из элементов, прошедших проверку
  return item > 10;
});

const sum = arr.reduce((accumulator, item, index, array) => {
  // свертка массива в одно значение
  return accumulator + item;
}, initialValue);
```

### Деструктуризация и спред-оператор

```javascript
// Деструктуризация массивов
const [first, second] = [1, 2]; // first = 1, second = 2
const [head, ...tail] = [1, 2, 3, 4]; // head = 1, tail = [2, 3, 4]

// Спред-оператор
const combined = [...arr1, ...arr2]; // объединение массивов
const copy = [...arr]; // создание копии массива
```

## 5. Функции

### Способы объявления функций

| Способ | Пример | Описание | Hoisting |
|--------|--------|----------|----------|
| Function Declaration | `function greet() {}` | Стандартное объявление | Да |
| Function Expression | `const greet = function() {};` | Функциональное выражение | Нет |
| Arrow Function | `const greet = () => {};` | Стрелочная функция | Нет |
| IIFE | `(function() {})();` | Немедленно вызываемая | - |
| Генератор | `function* generate() {}` | Функция-генератор | Да |
| Метод объекта | `const obj = { method() {} };` | Метод объекта | - |

```javascript
// Function Declaration
function greet(name) {
  return "Привет, " + name + "!";
}

// Function Expression
const greet = function(name) {
  return "Привет, " + name + "!";
};

// Стрелочная функция
const greet = (name) => {
  return "Привет, " + name + "!";
};

// Сокращенная запись стрелочной функции
const greet = name => "Привет, " + name + "!";

// IIFE (Immediately Invoked Function Expression)
(function() {
  // код
})();

// Генераторы
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

### Контекст и this

| Метод | Синтаксис | Описание |
|-------|-----------|----------|
| call | `func.call(context, arg1, arg2)` | Вызов с заданным this и аргументами |
| apply | `func.apply(context, [arg1, arg2])` | Вызов с this и аргументами в массиве |
| bind | `const bound = func.bind(context)` | Создаёт новую функцию с привязанным this |

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
```

### Продвинутые концепции

| Концепция | Описание | Пример |
|-----------|----------|--------|
| Рекурсия | Функция вызывает сама себя | Факториал, обход дерева |
| Замыкание | Функция + доступ к внешним переменным | Счетчики, приватные переменные |
| Карринг | Преобразование многоаргументной функции в набор одноаргументных | `add(1)(2)(3)` вместо `add(1,2,3)` |
| Функции высшего порядка | Функции как аргументы/результаты | map, filter, reduce |

```javascript
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

### Особенности и функциональность классов

| Функциональность | Синтаксис | Описание |
|------------------|-----------|----------|
| Наследование | `class Child extends Parent {}` | Расширение базового класса |
| Приватные поля | `#privateField` | Доступны только внутри класса |
| Приватные методы | `#privateMethod() {}` | Доступны только внутри класса |
| Геттеры | `get property() {}` | Вызываются при обращении к свойству |
| Сеттеры | `set property(value) {}` | Вызываются при присваивании |
| Статические методы | `static method() {}` | Вызываются на самом классе |
| Статические поля | `static field = value` | Принадлежат самому классу |

```javascript
class Student extends Person {
  #grades = [];
  static schoolName = "Школа №1";
  
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    return `${this.name} учится в ${this.grade} классе.`;
  }
  
  addGrade(grade) {
    this.#grades.push(grade);
  }
  
  #calculateAverage() {
    return this.#grades.reduce((sum, grade) => sum + grade, 0) / this.#grades.length;
  }
  
  get averageGrade() {
    return this.#calculateAverage();
  }
  
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(' ');
  }
  
  static getSchoolInfo() {
    return `Это ${Student.schoolName}`;
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

// Применение миксинов к классу
Object.assign(Person.prototype, speakerMixin);
```

## 7. Обработка ошибок

### Основные конструкции

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

| Тип ошибки | Описание | Пример случая |
|------------|----------|---------------|
| Error | Базовый тип | Общие ошибки |
| SyntaxError | Ошибка синтаксиса | Некорректный код |
| TypeError | Ошибка типа | Вызов метода не у того типа |
| ReferenceError | Ошибка ссылки | Доступ к несуществующей переменной |
| RangeError | Ошибка диапазона | Значение вне допустимого диапазона |
| URIError | Ошибка в URI | Некорректный URI |
| EvalError | Ошибка eval() | Проблемы с функцией eval() |

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

### Обработка ошибок в асинхронном коде

```javascript
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

// Через .catch() с промисами
fetchData()
  .then(data => {
    // обработка успешного результата
  })
  .catch(error => {
    // обработка ошибки
  });
```

## 8. Promise (Промисы)

### Состояния промиса

| Состояние | Описание |
|-----------|----------|
| pending | Начальное состояние (ожидание) |
| fulfilled | Операция успешна с результатом |
| rejected | Операция завершилась с ошибкой |

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

| Метод | Описание |
|-------|----------|
| then() | Обработка успешного результата |
| catch() | Обработка ошибки |
| finally() | Выполняется всегда |

```javascript
promise
  .then(function(result) {
    // обработка успешного результата
    return transformedResult; // можно вернуть новое значение или промис
  })
  .catch(function(error) {
    // обработка ошибки
    console.error('Произошла ошибка:', error);
    return fallbackValue;
  })
  .finally(function() {
    // выполняется всегда, независимо от результата
  });
```

### Статические методы Promise

| Метод | Описание | Результат |
|-------|----------|-----------|
| Promise.all(iterable) | Ожидает все промисы | Успех: массив результатов<br>Ошибка: первая ошибка |
| Promise.allSettled(iterable) | Ожидает завершения всех | Массив объектов с результатами/ошибками |
| Promise.race(iterable) | Возвращает первый завершившийся | Результат самого быстрого промиса |
| Promise.any(iterable) | Возвращает первый успешный | Первый успешный результат или AggregateError |
| Promise.resolve(value) | Создаёт выполненный промис | Промис с результатом value |
| Promise.reject(error) | Создаёт отклонённый промис | Промис с ошибкой error |

```javascript
// Promise.all
const promises = [fetch('/api/users'), fetch('/api/posts'), fetch('/api/comments')];

Promise.all(promises)
  .then(responses => Promise.all(responses.map(response => response.json())))
  .then(data => {
    const [users, posts, comments] = data;
    console.log('Пользователи:', users);
    console.log('Посты:', posts);
    console.log('Комментарии:', comments);
  })
  .catch(error => {
    console.error('Произошла ошибка:', error);
  });

// Promise.race - таймаут для запроса
const fetchWithTimeout = (url, timeout = 5000) => {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Таймаут запроса')), timeout)
    )
  ]);
};
```

## 9. Async/Await

```javascript
// Функция с ключевым словом async всегда возвращает промис
async function fetchUserData(userId) {
  try {
    // await приостанавливает выполнение функции до разрешения промиса
    const response = await fetch(`/api/users/${userId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP ошибка! Статус: ${response.status}`);
    }
    
    const userData = await response.json();
    return userData; // автоматически оборачивается в Promise.resolve()
  } catch (error) {
    console.error('Ошибка при загрузке данных пользователя:', error);
    throw error; // проброс ошибки дальше (Promise.reject())
  }
}
```

### Сравнение: промисы vs async/await

| Аспект | Промисы | Async/Await |
|--------|---------|-------------|
| Синтаксис | Цепочки .then() | Похож на синхронный |
| Обработка ошибок | .catch() | try...catch |
| Читаемость | Хуже при вложенности | Лучше для сложной логики |
| Отладка | Труднее отслеживать стек | Проще отлаживать |
| Внутри циклов | Сложнее организовать | Проще управлять потоком |

### Параллельное выполнение с async/await

```javascript
async function fetchAllData() {
  try {
    // Запускаем запросы параллельно
    const [users, posts, comments] = await Promise.all([
      fetch('/api/users').then(r => r.json()),
      fetch('/api/posts').then(r => r.json()),
      fetch('/api/comments').then(r => r.json())
    ]);
    
    return { users, posts, comments };
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
    throw error;
  }
}
```

### Последовательное vs параллельное выполнение

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
