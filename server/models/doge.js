const db = require('../database');

module.exports = class Doge {
  constructor(id, name, breed, gender, prov_date, adop_date, provider, adopter, health_con) {
    this.id = id;
    this.name = name;
    this.breed = breed;
    this.gender = gender;
    this.prov_date = prov_date;
    this.adop_date = adop_date;
    this.provider = provider;
    this.adopter = adopter;
    this.health_con = health_con;
  }

  // CREATE 
  static add(req, res) {
    var body = {
      name: req.body.name,
      breed: req.body.breed,
      gender: req.body.gender,
      prov_date: req.body.prov_date,
      adop_date: req.body.adop_date,
      provider: req.body.provider,
      adopter: req.body.adopter,
      health_con: req.body.health_con,
  };
    //console.log('add():', req.body.name, req.body.price);
    return db.query(
      'INSERT INTO doge SET ?',
      body
    );
  }

  // READ
  static fetchMainAtt() {
    return db.execute('SELECT id, name, breed, gender FROM doge');
  }

  static findById(id) {
    return db.execute('SELECT * FROM doge where id = ?', [id]);
  }

  // UPDATE
  static updateById(req, res) {
    var body = {
      name: req.body.name,
      adop_date: req.body.adop_date,
      adopter: req.body.adopter,
      health_con: req.body.health_con,
  }; 
    //const date = new Date();
    console.log('model:updateById()', req.body.id, body)
    return db.query(
      'UPDATE doge SET ? WHERE id = ?',
       [body, req.body.id]
    );
  }


  // DELETE
  static deleteById(id) {
    return db.execute(
      'DELETE FROM doge WHERE id = ?', [id]
    );
  }


  static getCount() {
    return db.execute('SELECT COUNT(*) as count FROM doge');
  }
};