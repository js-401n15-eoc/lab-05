'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

const Category = require('./models/categories/category.js');
const Product = require('./models/products/product.js');

const category = new Category();
const product = new Product();
