const db = require('../lib/db');

class StatisticsService {

	async getStatistics() {
		const statistics = await db.getAllStatistics();
		const lastOperations = await db.getLastOperations();

		const data = {
			statistics,
			lastOperations
		}
		
		return data || {};
	}

}

module.exports = StatisticsService;
