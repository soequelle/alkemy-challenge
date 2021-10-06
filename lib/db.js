const mysql = require('mysql');
const { config } = require('../config/index');

const pool = mysql.createPool({
	connectionLimit: 10,
	host: config.dbHost,
	user: config.dbUser,
	database: config.dbName,
	password: config.dbPassword
});

let db = {};

db.getAllOperations = () => {
	return new Promise((resolve, reject) => {
		pool.getConnection((error, connection) => {
			if(error) {
				return reject(error);
			} else {
				connection.query('SELECT * FROM operations', (error, rows) => {
					if(error) {
						return reject(error);
					}
					
					connection.release();
					const data = rows || [];
					return resolve(data);
				});
			}
		});
	});
}

db.getOperation = ({ operationId }) => {
	return new Promise((resolve, reject) => {
		pool.getConnection((error, connection) => {
			if(error) {
				return reject(error);
			} else {
				connection.query('SELECT * FROM operations WHERE id = ?', [operationId],(error, row) => {
					if(error) {
						return reject(error);
					}

					connection.release();
					const data = row || {};
					return resolve(data);
				});
			}
		});
	});
}

db.createOperation = ({ operation }) => {
	return new Promise((resolve, reject) => {
		pool.getConnection((error, connection) => {
			if(error) {
				return reject(error);
			} else {
				connection.query('INSERT INTO operations (concept, amount, date, type) VALUES (?, ?, ?, ?)', 
					[operation.concept, operation.amount, operation.date, operation.type],(error, row) => {

					if(error) {
						return reject(error);
					}
					
					const data = db.getOperation({ operationId: row.insertId });
					connection.release();
					return resolve(data);
				});
			}
		});
	});
}

db.updateOperation = ({ operationId, operation }) => {
	return new Promise((resolve, reject) => {
		pool.getConnection((error, connection) => {
			if(error) {
				return reject(error);
			} else {
				connection.query('UPDATE operations SET concept=?, amount=?, date=?, type=?, updated_at=NOW() WHERE id=?', 
					[operation.concept, operation.amount, operation.date, operation.type, operationId],(error, result) => {

					if(error) {
						return reject(error);
					}

					connection.release();
					const data = db.getOperation({ operationId: operationId });
					return resolve(data);
				});
			}
		});
	});
}

db.deleteOperation = ({ operationId }) => {
	return new Promise((resolve, reject) => {
		pool.getConnection((error, connection) => {
			if(error) {
				return reject(error);
			} else {
				connection.query('DELETE FROM operations WHERE id=?', [operationId],(error, result) => {

					if(error) {
						return reject(error);
					}

					connection.release();
					const data = { deleted: true };
					return resolve(data);
				});
			}
		});
	});
}

module.exports = db;