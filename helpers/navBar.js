function navBar(activeCategory) {
  const navBar = `
    <header>
      <nav id="navBar" class="navBar">
        <a href="/products">Productos</a>
        <a href="/products?category=camisetas" class="${activeCategory === 'camisetas' ? 'selected' : ''}">Camisetas</a>
        <a href="/products?category=pantalones" class="${activeCategory === 'pantalones' ? 'selected' : ''}">Pantalones</a>
        <a href="/products?category=sudaderas" class="${activeCategory === 'sudaderas' ? 'selected' : ''}">Sudaderas</a>
        <a href="/products?category=accesorios" class="${activeCategory === 'accesorios' ? 'selected' : ''}">Accesorios</a>
        <a href="/dashboard" class="btn-primary-nav">Dashboard</a>
        <a href="/dashboard/new" class="btn-secondary-nav">Crear producto</a>
      </nav>
    </header>
  `;
  return navBar;
}

module.exports = navBar;