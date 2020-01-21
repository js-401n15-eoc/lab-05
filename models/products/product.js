'use strict';

const mongoose = require('mongoose');

const product = {
  fields: {
    id: { type: 'string', required: true },
    category_id: { type: 'string', required: true },
    price: { type: 'number', required: true },
    weight: { type: 'number' },
    quantity_in_stock: { type: 'number', required: true },
  },
};

module.exports = mongoose.model('product', product);