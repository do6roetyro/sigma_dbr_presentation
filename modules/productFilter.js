// неэффективная функция
// Здесь используется метод .filter(), который может быть менее эффективным для больших массивов.
function filterProductsInefficient(products, selectedCategory) {
    return products.filter(product => {
        return product.category === selectedCategory;
    });
}

//Причины более медленной работы :
// 1) Использование метода .filter(): Метод .filter() удобен для чтения и использования, но добавляет накладные расходы из-за вызова функции обратного вызова для каждого элемента массива.
// 2) Функция обратного вызова: Каждый вызов функции обратного вызова имеет накладные расходы, которые суммируются при большом количестве элементов.
// 3) Оптимизации движка: Несмотря на оптимизации JavaScript-движков, прямой цикл for часто выполняется быстрее, так как обходится без дополнительных абстракций.

// c простыми циклами
// Используется простой цикл for, который может быть более эффективным.
function filterProductsWithLoops(products, selectedCategory) {
    const result = [];
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product.category === selectedCategory) {
            result.push(product);
        }
    }
    return result;
}

// Причины более быстрой работы в сравнении с array.filter():
// 1) Прямой цикл for: Цикл for является одним из самых простых и быстрых способов перебора массива, так как он минимален по накладным расходам.
// 2) Оптимизации компилятора: Современные JavaScript-движки, такие как V8 (используется в Chrome), очень хорошо оптимизируют простые циклы for.
// 3) Отсутствие функции обратного вызова: В отличие от .filter(), здесь нет необходимости вызывать внешнюю функцию для каждого элемента, что уменьшает накладные расходы.

// Функция с кэшированием длины массива:
// Кэширование длины массива может помочь улучшить производительность.
function filterProductsWithCachedLength(products, selectedCategory) {
    const result = [];
    const len = products.length;
    for (let i = 0; i < len; i++) {
        const product = products[i];
        if (product.category === selectedCategory) {
            result.push(product);
        }
    }
    return result;
}

// Причины наилучшей производительности:

// 1) Кэширование длины массива: Сохраняя products.length в переменной len, мы избегаем обращения к свойству length на каждой итерации.
// 2) Снижение накладных расходов: При большом количестве элементов даже небольшие оптимизации могут привести к заметному улучшению производительности.

export {
    filterProductsInefficient,
    filterProductsWithLoops,
    filterProductsWithCachedLength,

}