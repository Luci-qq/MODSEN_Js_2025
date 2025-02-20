"use strict";

// Задача 1: Проверка наличия значения в массиве
function task1() {
    console.log("=== Задача 1: Проверка наличия значения в массиве ===");
    function isValueInArray(arr, value) {
        return arr.includes(value);
    }
    const arr = [1, 2, 3, 4, 5];
    console.log("Массив:", arr);
    console.log("Значение 3 в массиве:", isValueInArray(arr, 3));
    console.log("Значение 6 в массиве:", isValueInArray(arr, 6));
}

// Задача 2: Повторное объявление переменных
function task2() {
    console.log("\n=== Задача 2: Повторное объявление переменных ===");
    // var позволяет повторное объявление
    var x = 10;
    console.log("Первое объявление var x =", x);
    var x = 20; // Повторное объявление var
    console.log("Повторное объявление var x =", x);

    // let не позволяет повторное объявление
    let y = 30;
    console.log("Первое объявление let y =", y);
    // let y = 40; // Раскомментируйте эту строку, чтобы увидеть ошибку
    console.log("Попытка повторного объявления let y приведет к ошибке на этапе компиляции.");

    // const также не позволяет повторное объявление
    const z = 50;
    console.log("Первое объявление const z =", z);
    // const z = 60; // Раскомментируйте эту строку, чтобы увидеть ошибку
    console.log("Попытка повторного объявления const z приведет к ошибке на этапе компиляции.");

    // Вывод:
    console.log("\nИтог:");
    console.log("- var позволяет повторное объявление.");
    console.log("- let и const не позволяют повторное объявление в той же области видимости.");
    console.log("- Ошибки повторного объявления let и const возникают на этапе компиляции и не могут быть отловлены с помощью try-catch.");
}

// Задача 3: Вывод последнего символа строки
function task3() {
    console.log("\n=== Задача 3: Вывод последнего символа строки ===");
    function printLastCharacter(str) {
        console.log("Последний символ строки '" + str + "':", str[str.length - 1]);
    }
    printLastCharacter("JavaScript");
}

// Задача 4: Сумма первой половины элементов массива
function task4() {
    console.log("\n=== Задача 4: Сумма первой половины элементов массива ===");
    function sumOfFirstHalf(arr) {
        const half = Math.ceil(arr.length / 2);
        return arr.slice(0, half).reduce((sum, num) => sum + num, 0);
    }
    const arr = [1, 2, 3, 4, 5];
    console.log("Массив:", arr);
    console.log("Сумма первой половины массива:", sumOfFirstHalf(arr));
}

// Задача 5: Сортировка пузырьком
function task5() {
    console.log("\n=== Задача 5: Сортировка пузырьком ===");
    function bubbleSort(arr) {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    }
    const unsortedArr = [64, 34, 25, 12, 22, 11, 90];
    console.log("Неотсортированный массив:", unsortedArr);
    console.log("Отсортированный массив:", bubbleSort([...unsortedArr]));
}

// Задача 6: Класс Прямоугольник
function task6() {
    console.log("\n=== Задача 6: Класс Прямоугольник ===");
    class Rectangle {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }

        area() {
            return this.width * this.height;
        }

        perimeter() {
            return 2 * (this.width + this.height);
        }
    }
    const rect = new Rectangle(10, 5);
    console.log("Прямоугольник с шириной 10 и высотой 5:");
    console.log("Площадь:", rect.area());
    console.log("Периметр:", rect.perimeter());
}

// Задача 7: Обработка TypeError
function task7() {
    console.log("\n=== Задача 7: Обработка TypeError ===");
    function accessProperty(obj, prop) {
        try {
            console.log("Попытка доступа к свойству '" + prop + "':", obj[prop]);
        } catch (error) {
            if (error instanceof TypeError) {
                console.log("Ошибка TypeError: свойство не определено");
            } else {
                console.log("Произошла ошибка:", error.message);
            }
        }
    }
    accessProperty(undefined, "prop");

    // Дополнительный пример с ошибкой доступа к свойству null
    try {
        const nullObj = null;
        console.log(nullObj.someProperty);
    } catch (error) {
        console.log("Ошибка при доступе к свойству null:", error.message);
    }
}

// Задача 8: Параллельная загрузка URL-адресов
function task8() {
    console.log("\n=== Задача 8: Параллельная загрузка URL-адресов ===");
    function fetchUrls(urls) {
        const fetchPromises = urls.map(url =>
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Ошибка загрузки: ${url}`);
                    }
                    return response.text();
                })
                .catch(error => {
                    console.error(`Ошибка при загрузке ${url}:`, error.message);
                    return null; // Возвращаем null в случае ошибки
                })
        );

        return Promise.all(fetchPromises);
    }

    // Пример использования
    const urls = [
        'https://jsonplaceholder.typicode.com/posts/1',
        'https://jsonplaceholder.typicode.com/posts/2',
        'https://jsonplaceholder.typicode.com/posts/3'
    ];

    fetchUrls(urls)
        .then(results => {
            console.log("Результаты загрузки:", results);
        })
        .catch(error => {
            console.error("Ошибка при загрузке URL-адресов:", error);
        });
}

// Задача 9: Последовательная загрузка данных
function task9() {
    console.log("\n=== Задача 9: Последовательная загрузка данных ===");
    async function fetchDataSequentially(url1, url2) {
        try {
            console.log("Загрузка данных с первого сервера...");
            const response1 = await fetch(url1);
            if (!response1.ok) {
                throw new Error(`Ошибка загрузки: ${url1}`);
            }
            const data1 = await response1.json();
            console.log("Данные с первого сервера:", data1);

            console.log("Загрузка данных со второго сервера...");
            const response2 = await fetch(`${url2}?id=${data1.id}`);
            if (!response2.ok) {
                throw new Error(`Ошибка загрузки: ${url2}`);
            }
            const data2 = await response2.json();
            console.log("Данные со второго сервера:", data2);

            return data2;
        } catch (error) {
            console.error("Ошибка при последовательной загрузке данных:", error.message);
            return null;
        }
    }

    // Пример использования
    const url1 = 'https://jsonplaceholder.typicode.com/posts/1';
    const url2 = 'https://jsonplaceholder.typicode.com/comments';

    fetchDataSequentially(url1, url2)
        .then(result => {
            console.log("Результат последовательной загрузки:", result);
        });
}

// Задача 10: Загрузка данных с таймаутом
function task10() {
    console.log("\n=== Задача 10: Загрузка данных с таймаутом ===");
    async function fetchWithTimeout(url, timeout) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        try {
            console.log("Загрузка данных с таймаутом...");
            const response = await fetch(url, { signal: controller.signal });
            clearTimeout(timeoutId); // Очищаем таймаут, если запрос успешен
            if (!response.ok) {
                throw new Error(`Ошибка загрузки: ${url}`);
            }
            const data = await response.json();
            console.log("Данные успешно загружены:", data);
            return data;
        } catch (error) {
            if (error.name === 'AbortError') {
                console.error(`Запрос к ${url} был отменен из-за таймаута`);
            } else {
                console.error(`Ошибка при загрузке ${url}:`, error.message);
            }
            return null;
        }
    }

    // Пример использования
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const timeout = 10000; // 10 секунд

    fetchWithTimeout(url, timeout)
        .then(data => {
            if (data) {
                console.log("Данные успешно загружены:", data);
            }
        });
}

// Вызов всех задач
task1();
task2();
task3();
task4();
task5();
task6();
task7();
task8();
task9();
task10();