// Чтобы сделать рендеринг более эффективным, можно построить HTML-строку и вставить её за один раз. 
function displayProducts(products, productListDiv) {
    let productsHTML = '';
    products.forEach(product => {
        productsHTML += `
            <div class="product">
                <h2>${product.name}</h2>
                <p>Price: $${product.price}</p>
                <p>Category: ${product.category}</p>
            </div>
        `;
    });
    productListDiv.innerHTML = productsHTML;
}

export { displayProducts }