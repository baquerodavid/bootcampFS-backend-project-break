const express = require('express');
const app = express()
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const routes = require('./routes/productRoutes');
const routesApi = require('./routes/productRoutesApi');
const docs = require('./docs/index');
const dbConnection = require('./config/db');
const methodOverride = require('method-override');
const swaggerUI = require('swagger-ui-express');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.use(routes);
app.use('/api', routesApi);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));