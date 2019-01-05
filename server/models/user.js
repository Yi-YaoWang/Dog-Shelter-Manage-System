const db = require('../database');

module.exports = class User {
    constructor(id, name, category, email, password) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.email = email;
        this.password = password;
    }

    // READ
    static fetchAll() {
        return db.execute('SELECT * FROM user');
    }

    static getCount() {
        return db.execute('SELECT COUNT(*) as count FROM user');
    }

     // CREATE 
    static add(req, res) {
        var body = {
        name: req.body.name,
        category: req.body.category,
        email: req.body.email,
        password: req.body.password,
    };
    console.log('add():', req.body.name, req.body.category);
    return db.query(
      'INSERT INTO user SET ?',
      body
    );
  }

    // DELETE
    static deleteById(id) {
        return db.execute(
          'DELETE FROM user WHERE id = ?', [id]
        );
      }

}