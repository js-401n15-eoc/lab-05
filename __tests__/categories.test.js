const Categories = require('../models/categories/categories.js');
const supergoose = require('@code-fellows/supergoose');

describe('Categories Collection', () => {

  let categories;
  let obj;

  beforeEach(() => {
    categories = new Categories();
    obj = {
      name: 'Test Category 1',
    };
  
    obj2 = {
      name: 'Test Category 2',
    };

    editObj = {
      name: 'Edited Test Category',
    };
  });

  it('can create() a new category', () => {
    return categories.create(obj)
    .then(data =>{
      Object.keys(obj).forEach(key => {
        expect(data[key]).toEqual(obj[key]);
      });
    }).catch(e => console.error('ERR', e));
  });

  it('can get() a category', () => {
    return categories.create(obj)
      .then(createData => {
        return categories.get(createData.id)
          .then(getData => {
            Object.keys(obj).forEach(key => {
              expect(getData[key]).toEqual(obj[key]);
            });
          });
      }).catch(e => console.error('ERR', e));
  });

  it('can update() a category', () => {
    return categories.create(obj)
      .then(createData => {
        return categories.get(createData.id)
          .then(getData => {
            return categories.update(getData.id, editObj)
              .then(updateData => {
                Object.keys(editObj).forEach(key => {
                  expect(editObj[key]).toEqual(updateData[key]);
                });
              });
          });
      }).catch(e => console.error('ERR', e));
  });

  it('can delete() a category', () => {
    return categories.create(obj)
    .then(() => {
      return categories.create(obj2)
      .then(createData => {
        return categories.get(createData.id)
          .then(getData => {
            return categories.update(getData.id, editObj)
              .then(updateData => {
                return categories.delete(updateData.id)
                  .then(deletedData => {
                    return categories.get(deletedData.id).
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
