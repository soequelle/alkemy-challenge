import React from 'react';
import  axios  from  'axios';
import { Card, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const OperationCard = ({ operation }) => {

	const deleteContact = async id => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/operations/${id}`,
      );
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name="file outline" /> {operation.concept}
        </Card.Header>
        <Card.Description>
          <p>
            <Icon name="dollar" /> {operation.amount}
          </p>
          <p>
            <Icon name="calendar outline" /> {operation.date}
          </p>
					<p>
            <Icon name="info" /> {operation.type === 1 ? 'Entry' : 'Expense'}
          </p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
				<Button
            basic
            color="green"
            as={Link}
            to={`/operations/edit/${operation.id}`}
          >
            Edit
          </Button>
          <Button basic color="red" onClick={() => deleteContact(operation.id)}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default OperationCard;