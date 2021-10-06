const express = require('express');
const StatisticsService = require('../../services/statistics');

function statisticsApi(app) {
    const router = express.Router();
    app.use('/api/statistics', router);

		const statisticsService = new StatisticsService();

    router.get('/', async function(req, res, next) {

			try {
				const statistics = await statisticsService.getStatistics();

				res.status(200).json({
						data: statistics,
						message: 'Statistics listed'
				})
			} catch (err) {
					next(err);
			}
    });
}

module.exports = statisticsApi;