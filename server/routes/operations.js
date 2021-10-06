const express = require('express');
const { operationsMock } = require('../../utils/mocks/operations');
const OperationsService = require('../../services/operations');

function operetionsApi(app) {
    const router = express.Router();
    app.use('/api/operations', router);

		const operationsService = new OperationsService();

    router.get('/', async function(req, res, next) {

			try {
				const operations = await operationsService.getOperations();

				res.status(200).json({
						data: operations,
						message: 'Operations listed'
				})
			} catch (err) {
					next(err);
			}
    });

    router.get('/:operationId', async function(req, res, next) {
			const { operationId } = req.params;

			try {
				const operation = await operationsService.getOperation({ operationId });

				res.status(200).json({
						data: operation,
						message: 'Operation retrieved'
				})
			} catch (err) {
					next(err);
			}
    });

    router.post('/', async function(req, res, next) {
				const { body: operation } = req;
				
				try {
					const createdOperation = await operationsService.createOperation({ operation });
	
					res.status(200).json({
							data: createdOperation,
							message: 'Operation created'
					})
				} catch (err) {
						next(err);
				}
    });

    router.put('/:operationId', async function(req, res, next) {
			const { operationId } = req.params;
			const { body: operation } = req;

			try {
				const updatedOperation = await operationsService.updateOperation({ operationId, operation });

				res.status(200).json({
						data: updatedOperation,
						message: 'Operation updated'
				})
			} catch (err) {
					next(err);
			}
    });

    router.delete('/:operationId', async function(req, res, next) {
      const { operationId } = req.params;

			try {
				const deletedOperation = await operationsService.deleteOperation({ operationId });

				res.status(200).json({
						data: deletedOperation,
						message: 'Operation deleted'
				})
			} catch (err) {
					next(err);
			}
    });
}

module.exports = operetionsApi;