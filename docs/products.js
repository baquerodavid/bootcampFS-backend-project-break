// docs/products.js

module.exports = {
  paths: {
    '/api/products': {
      get: {
        tags: ['Products'],
        description: 'Get all products or filter by category',
        operationId: 'getProducts',
        parameters: [
          {
            name: 'category',
            in: 'query',
            required: false,
            description: 'Filter products by category',
            schema: {
              type: 'string',
              enum: ['camisetas', 'pantalones', 'sudaderas', 'accesorios'],
            },
          },
        ],
        responses: {
          200: {
            description: 'List of products',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Product',
                  },
                },
              },
            },
          },
          500: {
            description: 'Server error',
          },
        },
      },

      post: {
        tags: ['Products'],
        description: 'Create a new product',
        operationId: 'createProduct',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Product',
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Product created successfully',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Product',
                },
              },
            },
          },
          500: {
            description: 'Server error',
          },
        },
      },
    },

    '/api/products/{productId}': {
      get: {
        tags: ['Products'],
        description: 'Get a product by ID',
        operationId: 'getProductById',
        parameters: [
          {
            name: 'productId',
            in: 'path',
            required: true,
            description: 'Product ID',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          200: {
            description: 'Product found',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Product',
                },
              },
            },
          },
          404: {
            description: 'Product not found',
          },
          500: {
            description: 'Server error',
          },
        },
      },

      put: {
        tags: ['Products'],
        description: 'Update a product by ID',
        operationId: 'updateProduct',
        parameters: [
          {
            name: 'productId',
            in: 'path',
            required: true,
            description: 'Product ID',
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Product',
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Product updated successfully',
          },
          404: {
            description: 'Product not found',
          },
          500: {
            description: 'Server error',
          },
        },
      },
    },

    '/api/products/{productId}/delete': {
      delete: {
        tags: ['Products'],
        description: 'Delete a product by ID',
        operationId: 'deleteProduct',
        parameters: [
          {
            name: 'productId',
            in: 'path',
            required: true,
            description: 'Product ID',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          200: {
            description: 'Product deleted successfully',
          },
          404: {
            description: 'Product not found',
          },
          500: {
            description: 'Server error',
          },
        },
      },
    },
  },
};
