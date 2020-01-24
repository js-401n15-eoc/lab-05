'use strict';

require('dotenv').config();

// set useFindAndModify to false to get rid of pesky warnings
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const Categories = require('./models/categories/categories.js');
const Products = require('./models/products/products.js');

// const categories = new Categories();
const products = new Products();

console.log('testing 1-2-3');
const prodObj = {
  category_id: '123456',
  price: 555,
  weight: 10,
  quantity_in_stock: 5,
};

const newRecord = {
  category_id: '123456',
  price: 300,
  weight: 10,
  quantity_in_stock: 50,
};

products.create(prodObj)
  .then(() => products.get())
  .then(data => {
    console.log('Data from the get: ', data);
    products.update(data[0].id, newRecord)
      .then(updateData => {
        console.log('Data after the update: ', updateData);
        products.delete(updateData.id).then(deleteData => {
          console.log('Product deleted: ', deleteData);
          products.get().then(leftovers => {
            console.log('Products left: ', leftovers);
          });
        });
      });
  })
  .catch(e => console.error('ERR ', e));