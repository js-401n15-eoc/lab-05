'use strict';

let uuid = require('uuid').v4;

class Model {
  constructor(schema, data) {
    this.schema = schema;
    data.id = uuid();
  }
}

module.exports = Model;