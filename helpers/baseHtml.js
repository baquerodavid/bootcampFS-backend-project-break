const navBar = require("./navBar");
const footer = require("./footer");

function baseHtml(content, category) {
  const baseHtml = `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/styles/styles.css">
        <title>Tienda online</title>
      </head>
      <body>
        ${navBar(category)}
        <main>
          ${content}
        </main>
        ${footer()}
      </body>
    </html>
  `;
  return baseHtml;
}

module.exports = baseHtml;
