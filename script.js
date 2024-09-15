import {
    filterProductsInefficient,
    filterProductsWithLoops,
    filterProductsWithCachedLength,
} from './modules/productFilter.js';
import { displayProducts } from './modules/productDisplay.js';
import { renderAllPerformanceResults } from './modules/performanceDisplay.js';
import { generateFakeProducts } from './modules/generateFakeProducts.js';
import { measureFilterPerformance } from './modules/measureFilterPerfomance.js';


const productListDiv = document.getElementById('product-list');
const categorySelect = document.getElementById('category');
const sortSelect = document.getElementById('sort');
const performanceModal = document.getElementById('performance-modal');
const openPerformanceModalButton = document.getElementById('open-performance-modal');
const closePerformanceModalButton = document.getElementById('close-performance-modal');
let allProducts = generateFakeProducts(100000);
let performanceResults = [];

// добавим ненужную глобальную переменную, хранящую большой объём данных:
// Поскольку она находится в глобальной области видимости и не используется, сборщик мусора не сможет её удалить, что увеличит потребление памяти.
// window.largeData = generateFakeProducts(10000);

// Обновление списка товаров при изменении фильтров
function updateProductList() {
    const selectedCategory = categorySelect.value;
    const selectedSort = sortSelect.value;

    // Массив функций фильтрации и их имена
    const filterFunctions = [
        { func: filterProductsInefficient, name: 'Inefficient Filter' },
        { func: filterProductsWithLoops, name: 'With Loops' },
        { func: filterProductsWithCachedLength, name: 'With Cached Length' },
    ];

    // Очищаем результаты производительности
    performanceResults = [];

    filterFunctions.forEach(filterObj => {
        // Измеряем производительность
        const times = measureFilterPerformance(filterObj.func, allProducts, selectedCategory);
        const averageTime = times.reduce((a, b) => a + b, 0) / times.length;

        // Сохраняем результаты
        performanceResults.push({
            name: filterObj.name,
            times,
            averageTime,
        });
    });

    // Фильтруем продукты с помощью одной из функций для отображения
    const filteredProducts = selectedCategory === 'All' ?
        allProducts :
        filterFunctions[0].func(allProducts, selectedCategory);

    // Сортировка
    const sortedProducts = filteredProducts.sort((a, b) => {
        return selectedSort === 'asc' ? a.price - b.price : b.price - a.price;
    });

    // Отображение продуктов
    displayProducts(sortedProducts, productListDiv);
}

categorySelect.addEventListener('change', updateProductList);
sortSelect.addEventListener('change', updateProductList);

// Открытие модального окна
openPerformanceModalButton.addEventListener('click', () => {
    performanceModal.style.display = 'block';
    renderAllPerformanceResults(performanceResults);
});

// Закрытие модального окна
closePerformanceModalButton.addEventListener('click', () => {
    performanceModal.style.display = 'none';
});

// Закрытие модального окна при клике вне его области
window.addEventListener('click', (event) => {
    if (event.target === performanceModal) {
        performanceModal.style.display = 'none';
    }
});


// Изначальная загрузка товаров
updateProductList();


