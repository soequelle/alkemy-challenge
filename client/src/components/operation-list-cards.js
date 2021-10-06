// src/components/operation-list.js

import React from 'react';
import _ from 'lodash';
import { Card } from 'semantic-ui-react';
import OperationCard from './operation-card';

const OperationList = ({operations}) => {
	
	const list = () => {
    return _.map(operations, operation => {
      return <OperationCard key={ operation.id } operation={ operation } />;
    });
  };

  return <Card.Group>{ list() }</Card.Group>
}

export default OperationList;