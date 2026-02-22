module.exports = {
  components: {
    schemas: {
      Product: {
        type: 'object',
        description: 'Store product',
        properties: {
          _id: {
            type: 'string',
            description: 'Product ID (MongoDB ObjectId)',
            example: '66e0c2b8a3d2f4a1b9c7d123',
          },
          name: {
            type: 'string',
            description: 'Product name',
            example: 'Short sleeve t-shirt',
          },
          description: {
            type: 'string',
            description: 'Product description',
            example: '100% cotton white short sleeve t-shirt.',
          },
          image: {
            type: 'string',
            description: 'Public image URL (Cloudinary)',
            example:
              'https://res.cloudinary.com/your-cloud/image/upload/v1710000000/store/tshirt.jpg',
          },
          category: {
            type: 'string',
            description: 'Product category',
            enum: ['camisetas', 'pantalones', 'sudaderas', 'accesorios'],
            example: 'camisetas',
          },
          size: {
            type: 'string',
            description: 'Product size',
            enum: ['XS', 'S', 'M', 'L', 'XL'],
            example: 'M',
          },
          price: {
            type: 'number',
            description: 'Product price in euros',
            minimum: 0,
            example: 35,
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description: 'Creation date (timestamps)',
            example: '2026-02-22T12:34:56.000Z',
          },
          updatedAt: {
            type: 'string',
            format: 'date-time',
            description: 'Last update date (timestamps)',
            example: '2026-02-22T13:10:00.000Z',
          },
        },
        required: ['name', 'description', 'image', 'category', 'size', 'price'],
      },
    },
  },
};
