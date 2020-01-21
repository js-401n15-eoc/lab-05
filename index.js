'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Categories = require('./models/categories/categories.js');
const Products = require('./models/products/products.js');

const categories = new Categories();
const products = new Products();

console.log('testing 1-2-3');
const prodObj = {
    category_id: '123456', 
    price: 555,
    weight: 10,
    quantity_in_stock: 5,
  };
  
products.create(prodObj)
  .then(() => products.get())
  .then(data => console.log(data))
  .catch(e => console.error('ERR ', e));