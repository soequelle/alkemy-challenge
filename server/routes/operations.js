const express = require('express');
const { operationsMock } = require('../../utils/mocks/operations');

function operetionsApi(app) {
    const router = express.Router();
    app.use('/api/operations', router);

    router.get('/', async function(req, res, next) {

			res.status(200).json({
				data: operationsMock,
				message: 'Operations listed'
			})
    });

    router.get('/:operationId', async function(req, res, next) {
			const { operationId } = req.params;

				res.status(200).json({
						data: operationsMock[operationId],
						message: 'Operation retrieved'
				})
    });

    router.post('/', async function(req, res, next) {
				const { body: operation } = req;

				res.status(201).json({
						data: operationsMock[0],
						message: 'Operation created'
				})
    });

    router.put('/:operationId', async function(req, res, next) {
			const { operationId } = req.params;
			const { body: operation } = req;

			res.status(200).json({
						data: operationsMock[operationId],
						message: 'Operation updated'
				})
    });

    router.delete('/:operationId', async function(req, res, next) {
      const { operationId } = req.params;

			res.status(200).json({
					data: operationsMock[operationId],
					message: 'Operation deleted'
			})
    });

    router.patch('/:operationId', async function(req, res, next) {
			const { operationId } = req.params;
			const { body: operation } = req;

			res.status(200).json({
					data: operationsMock[0],
					message: 'Operation partial updated'
			})
    });
}

module.exports = operetionsApi;