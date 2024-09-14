export function filterAndSortProducts(products, category, sortByPrice) {
    let filteredProducts = category === 'All' ? products : products.filter(product => product.category === category);

    filteredProducts.sort((a, b) => {
        return sortByPrice === 'asc' ? a.price - b.price : b.price - a.price;
    });

    return filteredProducts;
}
