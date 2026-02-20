function getProductDetails(product, isDashboard) {
  html = `
      <div class="product-detail">
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}">
        <p class="descriptionCard">${product.description}</p>
        <p class="priceCard">${product.price}€</p>
        <p class="categoryCard">Categoría: ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
        <p class="sizeCard">Talla: ${product.size}</p>
        ${
          isDashboard
            ? `
          <a href="/dashboard" class="btn-secondary">⬅ Atrás</a>
          <a href="/dashboard/${product._id}/edit" class="btn">Editar</a>
          <form action="/dashboard/${product._id}/delete?_method=DELETE" method="post" class="form-delete">
            <button class="cancel-btn">Eliminar</button>
          </form>
          `
            : `<a href="/products" class="btn-secondary">Atrás</a>`
        }
      </div>
    `;
  return html;
}

module.exports = getProductDetails;
