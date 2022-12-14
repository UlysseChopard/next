const { db  } = require("../utils");

exports.getByEmail = email => db.query("SELECT * FROM accounts WHERE email = $1", [email]);

exports.getById = id => db.query("SELECT * FROM accounts WHERE id = $1", [id]);

exports.create = ({ email, hash, firstname, lastname, gender }) => db.query("INSERT INTO accounts (email, hash, firstname, lastname, gender) VALUES ($1, $2, $3, $4, $5)", [email, hash, firstname, lastname, gender]);

exports.update = (id, { email, hash, firstname, lastname, gender, cellphone, phone }) => db.query("UPDATE accounts SET email = $1, hash = $2, firstname = $3, lastname = $4, gender = $5, cellphone = $6, phone = $7 WHERE id = $8", [email, hash, firstname, lastname, gender, cellphone, phone, id]);

exports.close = id => db.query("DELETE FROM accounts WHERE id = $1", [id]);
