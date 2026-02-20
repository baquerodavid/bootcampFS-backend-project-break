function getProductCards(products) {
  let html = "";
  for (let product of products) {
    html += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="descriptionCard">${product.description}</p>
        <p class="priceCard">${product.price}€</p>
        <a href="/products/${product._id}" class="btn">Ver detalle</a>
        <a href="/dashboard/${product._id}" class="btn">DASHBOARD</a>
      </div>
    `;
  }
  return html;
}

module.exports = getProductCards;