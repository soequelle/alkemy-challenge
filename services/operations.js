const db = require('../lib/db');

class OperationsService {	

	async getOperations() {
		const operations = await db.getAllOperations();
		
		return operations || [];
	}
	
	async getOperation({ operationId }) {
		const operation = await db.getOperation({ operationId });
		
		return operation || {};
	}

	async createOperation({ operation }) {
		const createdOperation = await db.createOperation({ operation });
		
		return createdOperation;
	}

	async updateOperation({ operationId, operation } = {}) {
		const updatedOperation = await db.updateOperation({ operationId, operation });
		
		return updatedOperation;
	}

	async deleteOperation({ operationId }) {
		const deletedOperation = await db.deleteOperation({ operationId });
		
		return deletedOperation;
	}
}

module.exports = OperationsService;
