function editProduct(product) {
  const editProduct = `
    <div class="container">
      <h2>Editar Producto</h2>
      <form action="/dashboard/${product._id}?_method=PUT" method="post" enctype="multipart/form-data" class="form">
        <label for="name">Nombre:</label>
        <input type="text" name="name" id="name" value="${product.name}" required />
        <label for="description">Descripción:</label>
        <textarea name="description" id="description" rows="5" cols="32" required>${product.description}</textarea>
        <label for="price">Precio (€):</label>
        <input type="number" name="price" id="price" min="0" value="${product.price}" required />
        <label for="image">Imagen:</label>
        <img src="${product.image}" alt="${product.name}" class="imgEditForm">
        <input type="file" name="image" id="image" />
        <label for="category">Categoría:</label>
        <select name="category" id="category">
          <option value="camisetas" ${product.category === "camisetas" ? "selected" : ""}>Camisetas</option>
          <option value="pantalones" ${product.category === "pantalones" ? "selected" : ""}>Pantalones</option>
          <option value="sudaderas" ${product.category === "sudaderas" ? "selected" : ""}>Sudaderas</option>
          <option value="accesorios" ${product.category === "accesorios" ? "selected" : ""}>Accesorios</option>
        </select>
        <label for="size">Talla:</label>
        <select name="size" id="size">
          <option value="XS" ${product.size === "XS" ? "selected" : ""}>XS</option>
          <option value="S" ${product.size === "S" ? "selected" : ""}>S</option>
          <option value="M" ${product.size === "M" ? "selected" : ""}>M</option>
          <option value="L" ${product.size === "L" ? "selected" : ""}>L</option>
          <option value="XL" ${product.size === "XL" ? "selected" : ""}>XL</option>
        </select>
        <button class="btn">Guardar</button>
        <a href="/dashboard/${product._id}" class="cancel-btn">Cancelar</a>
      </form>
    </div>
  `;
  return editProduct;
}

module.exports = editProduct;
