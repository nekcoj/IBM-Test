const sqlite3 = require('better-sqlite3');
const path = require('path');
const pathToDb = path.join(__dirname, '../../database/ibm_code_test.db');

let instance;

module.exports = {
  getInstance() {
    if (!instance) {
      instance = new DBHelper();
    }
    return instance;
  }
}

class DBHelper {
  constructor() {
    this.db = sqlite3(pathToDb);
  }

  select(sql, parameters) {
    let statement = this.db.prepare(sql);
    let result;
    try {
      result = parameters ? statement.all(parameters) : statement.all();
    } catch(error) {
      result = { error: error.message }
    }
    return result;
  }

  run(sql, parameters) {
    let statement = this.db.prepare(sql);
    let result
    try {
      result = parameters ? statement.run(parameters) : statement.run();
    } catch (error) {
      result = {error: error.message}
    }
    return result;
  }
}