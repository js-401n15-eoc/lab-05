const Products = require('../models/products/products.js');
const supergoose = require('@code-fellows/supergoose');

describe('Products Collection', () => {

  let products;
  let obj;

  beforeEach(() => {
    products = new Products();
    obj = {
      category_id: '5555',
      price: 444,
      weight: 0.5,
      quantity_in_stock: 10,
    };
  
    obj2 = {
      category_id: '777',
      price: 711,
      weight: 7,
      quantity_in_stock: 77,
    };

    editObj = {
      category_id: '777',
      price: 999,
      weight: 7,
      quantity_in_stock: 999,
    };
  });

  it('can create() a new product', () => {
    return products.create(obj)
    .then(data =>{
      Object.keys(obj).forEach(key => {
        expect(data[key]).toEqual(obj[key]);
      });
    }).catch(e => console.error('ERR', e));
  });

  it('can get() a product', () => {
    return products.create(obj)
      .then(createData => {
        return products.get(createData.id)
          .then(getData => {
            Object.keys(obj).forEach(key => {
              expect(getData[key]).toEqual(obj[key]);
            });
          });
      }).catch(e => console.error('ERR', e));
  });

  it('can update() a product', () => {
    return products.create(obj)
      .then(createData => {
        return products.get(createData.id)
          .then(getData => {
            return products.update(getData.id, editObj)
              .then(updateData => {
                Object.keys(editObj).forEach(key => {
                  expect(editObj[key]).toEqual(updateData[key]);
                });
              });
          });
      }).catch(e => console.error('ERR', e));
  });

  it('can delete() a product', () => {
    return products.create(obj)
    .then(() => {
      return products.create(obj2)
      .then(createData => {
        return products.get(createData.id)
          .then(getData => {
            return products.update(getData.id, editObj)
              .then(updateData => {
                return products.delete(updateData.id)
                  .then(deletedData => {
                    return products.get(deletedData.id).
                      then(emptyData => {
                        expect(!!deletedData.id).toEqual(true);
                        expect(emptyData).toEqual(null);
                      })
                    });
                  });
              });
          });
      }).catch(e => console.error('ERR', e));
  });
});
