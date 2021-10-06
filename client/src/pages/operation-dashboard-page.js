import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OperationListCards from '../components/operation-list-cards';
import OperationStatistics from '../components/operation-statistics';


export const OperationDashboardPage = () => {
	const [statistics, setStatistics] = useState({});
	const [operations, setOperations] = useState([]);
	const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/api/statistics');

			const data = response.data.data;
			
			setStatistics(data.statistics);
			setOperations(data.lastOperations);
			setLoading(false)
		}
		
		fetchData();
	}, []);

	if (loading) {
    return <p>Please wait...</p>;
  }


	return (
		<div>
			<h1>Operations dashcboard</h1>
			<OperationStatistics statistics={ statistics }/>
			<OperationListCards operations={ operations }/>
		</div>
	)
};

export default OperationDashboardPage;
