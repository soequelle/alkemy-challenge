// src/components/operation-list.js

import React from 'react';
import _ from 'lodash';
import  axios  from  'axios';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import OperationCard from './operation-card';

const OperationList = ({operations}) => {
	const deleteContact = async id => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/operations/${id}`,
      );
      
    } catch (error) {
      console.log(error);
    }
  };

	const list = () => {
    return _.map(operations, operation => {
      return (
				<Table.Row>
					<Table.Cell singleLine>{operation.concept}</Table.Cell>
					<Table.Cell>${operation.amount.toLocaleString(undefined,{ minimumFractionDigits: 2 })}</Table.Cell>
					<Table.Cell>{operation.date}</Table.Cell>
					<Table.Cell>{operation.type}</Table.Cell>
					<Table.Cell>
						<div className="ui two buttons">
							<Button basic color="green" as={Link} to={`/operations/edit/${operation.id}`}>
								Edit
							</Button>
							<Button basic color="red" onClick={() => deleteContact(operation.id)}>
								Delete
							</Button>
						</div>
					</Table.Cell>
				</Table.Row>
			)
    });
  };

  return (
		<Table>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Concept</Table.HeaderCell>
					<Table.HeaderCell>Amount</Table.HeaderCell>
					<Table.HeaderCell>Date</Table.HeaderCell>
					<Table.HeaderCell>Type</Table.HeaderCell>
					<Table.HeaderCell>Actions</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{list()}
			</Table.Body>
		</Table>
	)
};

export default OperationList;