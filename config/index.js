const dotenv = require('dotenv');
const envPath = `${__dirname}/../.env`;

try {
	dotenv.config({ path: envPath });
} catch (e) {
	console.error('Failed to resolve', envPath, e)
}

const config = {
	dev: process.env.NODE_ENV !== 'production',
	apiPort: process.env.API_PORT || 5000,
	dbUser: process.env.DB_USER,
	dbPassword: process.env.DB_PASSWORD,
	dbHost: process.env.DB_HOST,
	dbName: process.env.DB_NAME,
	dbPort: process.env.DB_PORT
};

module.exports = {
	config
};