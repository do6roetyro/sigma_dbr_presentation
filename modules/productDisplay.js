export function displayProducts(products, productListDiv) {
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product', 'animate__animated', 'animate__fadeInUp');

        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <img src=${product.imgUrl} alt=${product.name} width="200" height="150"/>
            <p>Price: $${product.price}</p>
            <p>Category: ${product.category}</p>
        `;

        productListDiv.appendChild(productDiv);
    });
}