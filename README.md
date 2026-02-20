# Project Break 2 (Backend) - Tienda de Ropa

Aplicación backend desarrollada con **Node.js + Express + MongoDB Atlas** para gestionar una tienda de ropa con:

- Catálogo público (renderizado SSR con template literals)
- Dashboard de administración
- Subida de imágenes con Multer + Cloudinary

---

## Índice

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Variables de entorno](#variables-de-entorno)
- [Rutas principales](#rutas-principales)
- [Modelo Product](#modelo-product)
- [Subida de imágenes](#subida-de-imágenes)
- [Notas técnicas](#notas-técnicas)
- [Posibles mejoras futuras](#posibles-mejoras-futuras)
- [Contexto del proyecto](#️contexto-del-proyecto)

---

## Descripción

Proyecto correspondiente al **Project Break 2** del Bootcamp de desarrollo web Full-Stack.

La aplicación permite visualizar productos en un catálogo público y gestionarlos desde un panel de administración.

El renderizado se realiza en el servidor (SSR) utilizando **template literals**, sin motor de plantillas externo.

---

## Características

### Catálogo público

- Listado de productos
- Vista de detalle de producto

### Dashboard (admin)

- Listado de productos
- Crear producto
- Editar producto
- Eliminar producto
- Subida de imágenes a Cloudinary

---

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- dotenv
- method-override
- multer
- multer-storage-cloudinary
- Cloudinary
- HTML + CSS (SSR con template literals)

---

## Estructura del proyecto

```
.
├── config
│   ├── db.js
│   └── cloudinary.js
├── controllers
│   └── productController.js
├── helpers
│   ├── baseHtml.js
│   ├── navBar.js
│   ├── footer.js
│   ├── productCard.js
│   ├── productDetails.js
│   ├── newProduct.js
│   └── editProduct.js
├── middlewares
│   └── uploadCloudinaryMiddleware.js
├── models
│   └── Product.js
├── public
│   └── styles
│       └── styles.css
├── routes
│   └── productRoutes.js
├── .env
├── .gitignore
├── index.js
└── package.json
```

---

## Requisitos

- Node.js
- Cuenta en MongoDB Atlas
- Cuenta en Cloudinary

---

## Instalación

1. Clonar el repositorio

```
npm install
```

2. Crear archivo `.env` en la raíz del proyecto.

3. Ejecutar en desarrollo:

```
npm run dev
```

O con Node:

```
npm run start
```

---

## Variables de entorno

Crear archivo `.env` con:

```
PORT=3001
MONGO_URI=tu_uri_de_mongodb_atlas

CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
```

---

## Rutas principales

### Catálogo público

- GET /products
- GET /products/:productId

### Dashboard (admin)

- GET /dashboard
- GET /dashboard/new
- POST /dashboard
- GET /dashboard/:productId
- GET /dashboard/:productId/edit
- PUT /dashboard/:productId
- DELETE /dashboard/:productId/delete

---

## Modelo Product

El modelo incluye los siguientes campos:

- name (String)
- description (String)
- image (String → URL de Cloudinary)
- category (String → enum: camisetas | pantalones | sudaderas | accesorios)
- size (String → enum: XS | S | M | L | XL)
- price (Number)

---

## Subida de imágenes

La subida de imágenes se realiza mediante:

- multer
- multer-storage-cloudinary

La URL final generada por Cloudinary se obtiene desde:

```
req.file.path
```

Y se guarda en la base de datos como valor del campo `image`.

En la edición de producto:

- Si no se sube nueva imagen, se mantiene la existente
- Si se sube una nueva, se actualiza la URL

---

## Notas técnicas

- Los formularios HTML solo permiten métodos GET y POST.
- Para soportar PUT y DELETE se utiliza method-override.
- La aplicación sirve archivos estáticos desde la carpeta `public`.

---

## Posibles mejoras futuras

- Implementar autenticación y rutas protegidas
- Añadir tests con Jest + Supertest
- Documentación con Swagger

---

## Contexto del proyecto

Este proyecto fue desarrollado como parte del **Project Break 2** del Bootcamp de Full-Stack Web Development, con un **plazo de 2 semanas** dedicadas exclusivamente al diseño, implementación y consolidación del backend.

El objetivo principal fue afianzar conocimientos de **Node.js, Express, MongoDB y arquitectura MVC**, trabajando la organización de un proyecto backend real, la estructuración de rutas y controladores, la conexión con una base de datos en la nube (MongoDB Atlas) y la integración de servicios externos como **Cloudinary** para la gestión de imágenes.

Durante este periodo se priorizó la correcta separación de responsabilidades (configuración, modelos, controladores, rutas y helpers), el uso de buenas prácticas en el manejo de formularios, middlewares y renderizado SSR, así como la construcción de una base sólida para futuras ampliaciones como autenticación o testing automatizado.
