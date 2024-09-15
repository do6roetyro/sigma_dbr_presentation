
// Функция для генерации массива из 1000 фейковых товаров
export function generateFakeProducts(quantity) {
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

