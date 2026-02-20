function newProduct() {
  const newProduct = `
    <div class="container">
      <h2>Crear Producto</h2>
      <form action="/dashboard" method="post" enctype="multipart/form-data" class="form">
        <label for="name">Nombre:</label>
        <input type="text" name="name" id="name" required />
        <label for="description">Descripción:</label>
        <textarea name="description" id="description" rows="5" cols="32" placeholder="Escribe una descripción..." required></textarea>
        <label for="price">Precio (€):</label>
        <input type="number" name="price" id="price" min="0" value="0" required />
        <label for="image">Imagen:</label>
        <input type="file" name="image" id="image" required />
        <label for="category">Categoría:</label>
        <select name="category" id="category">
          <option value="">-- Elige una categoría --</option>
          <option value="camisetas">Camisetas</option>
          <option value="pantalones">Pantalones</option>
          <option value="sudaderas">Sudaderas</option>
          <option value="accesorios">Accesorios</option>
        </select>
        <label for="size">Talla:</label>
        <select name="size" id="size">
          <option value="">-- Elige una talla --</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
        <button class="btn">Crear</button>
      </form>
    </div>
  `;
  return newProduct;
}

module.exports = newProduct;