const express = require('express');

function operetionsApi(app) {
    const router = express.Router();
    app.use('/api/operations', router);

    router.get('/', async function(req, res, next) {

			res.status(200).json({
				message: 'Operations listed'
			})
    });

    router.get('/:operationId', async function(req, res, next) {
        
				res.status(200).json({
						message: 'Operation retrieved'
				})
    });

    router.post('/', async function(req, res, next) {

				res.status(201).json({
						message: 'Operation created'
				})
    });

    router.put('/:operationId', async function(req, res, next) {
				
			res.status(200).json({
						message: 'Operation updated'
				})
    });

    router.delete('/:operationId', async function(req, res, next) {
        
			res.status(200).json({
					message: 'Operation deleted'
			})
    });

    router.patch('/:operationId', async function(req, res, next) {
       
			res.status(200).json({
					message: 'Operation partial updated'
			})
    });
}

module.exports = operetionsApi;