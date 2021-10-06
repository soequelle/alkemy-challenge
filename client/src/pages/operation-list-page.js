// src/pages/contact-list-page.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OperationList from '../components/operation-list';

const OperationListPage = () => {
	const [operations, setOperations] = useState([]);
	const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/api/operations');
			const data = response.data.data;
     
			setOperations(data);
			setLoading(false)
		}
		
		fetchData();
	}, []);

	if (loading) {
    return <p>Please wait...</p>;
  }

  return (
    <div>
      <h1>List of Operations</h1>
			<OperationList operations={ operations }/>
    </div>
  );
};

export default OperationListPage;