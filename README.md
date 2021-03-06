# LAB: Data Modeling With NoSQL Databases (05)

## Dealing with the Mongo...ose

### Author: Earl Jay Caoile

### Links and Resources
* [submission PR](https://github.com/js-401n15-eoc/lab-05/pull/1)
* [GitHub Actions](https://github.com/js-401n15-eoc/lab-05/actions)

#### Documentation
* [MongoDB docs (MongoDB CRUD Operations)](https://docs.mongodb.com/manual/crud/)

### Setup
#### Configuring MongoDB
* create an .env file on the top level of this repo: `MONGODB_URI=mongodb://localhost:27017/lab-05`
* start your database with the path of the DB along with the folder location for your DB files (`mongod --dbpath=/Users/path/to/data/db`: i.e. `"C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath="D:\db"`)

#### Tests
* Testing command: `npm test` from root directory

#### UML
![UML Image](lab-05-UML.png "uml diagram")