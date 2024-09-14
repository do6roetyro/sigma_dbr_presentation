import { filterAndSortProducts } from './modules/productFilter.js';
import { displayProducts } from './modules/productDisplay.js';
import { showProductDetails } from './modules/productDetails.js';

// Функция для генерации массива из 1000 фейковых товаров
function generateFakeProducts(quantity) {
    const categories = ['Electronics', 'Clothing', 'Home'];
    const products = [];

    for (let i = 1; i <= quantity; i++) {
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        const randomPrice = (Math.random() * 500 + 50).toFixed(2);
        let imgUrl = '';
        switch (randomCategory) {
            case 'Clothing':
                imgUrl = './images/Clothing.jpeg';
                break;
            case 'Home':
                imgUrl = './images/Home.jpg';
                break;
            case 'Electronics':
                imgUrl = './images/Electronics.jpg';
                break;
        }
        products.push({
            id: i,
            name: `Product ${i}`,
            price: randomPrice,
            category: randomCategory,
            imgUrl: imgUrl,
            description: `This is a detailed description of Product ${i}. It belongs to the ${randomCategory} category and costs $${randomPrice}.`
        });
    }

    return products;
}

let allProducts = generateFakeProducts(1000); // Генерация 1000 товаров
const productListDiv = document.getElementById('product-list');

// Всплывающее окно с деталями о товаре
const modal = document.getElementById('product-modal');
const modalProductDetails = document.getElementById('modal-product-details');
const closeModalButton = document.getElementById('close-modal');

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Основная логика
const categorySelect = document.getElementById('category');
const sortSelect = document.getElementById('sort');

// Обновление списка товаров при изменении фильтров
function updateProductList() {
    productListDiv.innerHTML = ''; // Очищаем список перед рендером

    const selectedCategory = categorySelect.value;
    const selectedSort = sortSelect.value;
    const filteredAndSortedProducts = filterAndSortProducts(allProducts, selectedCategory, selectedSort);
    displayProducts(filteredAndSortedProducts, productListDiv);
}

categorySelect.addEventListener('change', updateProductList);
sortSelect.addEventListener('change', updateProductList);

// Изначальная загрузка товаров
updateProductList();