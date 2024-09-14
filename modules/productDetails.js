export function showProductDetails(product, modal, modalProductDetails) {
    modalProductDetails.innerHTML = `
        <h2>${product.name}</h2>
        <img src=${product.imgUrl} alt=${product.name} width="200" height="150"/>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        <p>Category: ${product.category}</p>
    `;
    modal.style.display = 'block';
}
