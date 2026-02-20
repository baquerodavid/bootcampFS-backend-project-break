function navBar() {
  const navBar = `
    <header>
      <nav id="navBar" class="navBar">
        <a href="/products">Productos</a>
        <a href="#">Camisetas</a>
        <a href="#">Pantalones</a>
        <a href="#">Sudaderas</a>
        <a href="#">Accesorios</a>
        <a href="/dashboard/new" class="btn-create">Crear producto</a>
      </nav>
    </header>
  `;
  return navBar;
}

module.exports = navBar;