function footer() {
  const footer = `
    <footer>
      <div class="footerContainer">
        <nav class="navBarFooter">
          <a href="/products">Productos</a>
          <a href="/products?category=camisetas">Camisetas</a>
          <a href="/products?category=pantalones">Pantalones</a>
          <a href="/products?category=sudaderas">Sudaderas</a>
          <a href="/products?category=accesorios">Accesorios</a>
          <a href="/api-docs" target="_blank">📘 API Docs</a>
        </nav>
      </div>

      <div class="secondaryFooterContainer">
        <div class="secondaryFooter">
          <p>Desarrollado por <a href="https://www.davidbaquero.com/" target="_blank">David Baquero</a></p>
          <p>‧ Project Break 2 · Bootcamp Desarrollo Web Full-Stack · <a href="https://thebridge.tech/" target="_blank">The Bridge</a> · 2026</p>
        </div>
      </div>
    </footer>
  `;
  return footer;
}

module.exports = footer;