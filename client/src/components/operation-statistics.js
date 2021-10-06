import React, { useState, useEffect } from 'react';
import { Icon, Statistic } from 'semantic-ui-react'

export const OperationStatistics = ({ statistics }) => {
	const entries = statistics.entries;
	const expenses = statistics.expenses;

	return (
	<>
		<Statistic.Group widths='two'>
			<Statistic size='huge'>
				<Statistic.Value>{entries}</Statistic.Value>
				<Statistic.Label>Entries</Statistic.Label>
			</Statistic>

			<Statistic size='huge'>
				<Statistic.Value>{expenses}</Statistic.Value>
				<Statistic.Label>Expenses</Statistic.Label>
			</Statistic>
		</Statistic.Group>
	</>
	)
};

export default OperationStatistics;