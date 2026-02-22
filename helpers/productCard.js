function getProductCards(products, isDashboard) {
  let html = "";
  for (let product of products) {
    html += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="descriptionCard">${product.description}</p>
        <p class="priceCard">${product.price}€</p>
        ${
          isDashboard
            ? `<a href="/dashboard/${product._id}" class="btn">Ver detalle</a>`
            : `<a href="/products/${product._id}" class="btn">Ver detalle</a>`}
      </div>
    `;
  }
  return html;
}

module.exports = getProductCards;