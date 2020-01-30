'use strict';

const Collection = require('../collection.js');
const schema = require('./category.js');

class Categories extends Collection {
  constructor() {
    super();
    this.schema = schema;
  }
}

module.exports = Categories;