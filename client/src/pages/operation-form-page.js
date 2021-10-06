import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import OperationForm from '../components/operation-form';

const OperationFormPage = ({ match }) => {
  const [loading, setLoading] = useState(true);
	const [operation, setOperation] = useState({});
  
	useEffect(() => {
    const { id: operationId } = match.params;
		
    if (operationId) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/operations/${operationId}`);
					const dateFormat = moment(response.data.data[0].date);

          const data = {
						id: response.data.data[0].id,
						concept: response.data.data[0].concept,
						amount: response.data.data[0].amount,
						date: dateFormat.format('YYYY-MM-DD'),
						operationType: response.data.data[0].type
					}

          setLoading(false);
					setOperation(data)
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    } else {
      setLoading(false);
    }
  }, [match.params]);

  if (loading) {
    return <p>Please wait...</p>;
  }

  return (
    <div>
      <OperationForm operation={ operation } />
    </div>
  );
}

export default OperationFormPage;
