// src/components/operation-form.js
import React, { useState } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import { DevTool } from "@hookform/devtools";


const OperationForm = ({ operation }) => {
	const { register, control, formState: { errors }, handleSubmit } = useForm({
		defaultValues: {
			concept: operation.concept,
			amount: operation.amount,
			date: operation.date,
			operationType: operation.operationType
		},
		mode: 'onSubmit'
	});
	const [redirect, setRedirect] = useState(false);
	const [loading, setLoading] = useState(false);

	const createContact = async data => {
		setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/operations', data);

      setRedirect(true);
    } catch (error) {
      console.log(error);
    }

		setLoading(false);
  };

  const updateContact = async data => {
		console.log('data update: ', data);
		setLoading(true);

    try {
      const response = await axios.patch(`http://localhost:5000/api/operations/${operation.id}`, data);

      setRedirect(true);
    } catch (error) {
      console.log(error);
    }

		setLoading(false);
  };

  const onSubmit = async data => {
		const formatDate = moment(data.date)
		data.date = formatDate.format('YYYY-MM-DD');
		data.type = data.operationType;
		
    if (operation.id) {
      await updateContact(data);
    } else {
      await createContact(data);
    }
  };

	const onChangeDate = e => {
		console.log(e.target.value);
		console.log(operation);
	}

  if (redirect) {
    return <Redirect to="/" />;
  }
	
  return (
    <Grid centered columns={2}>
      <Grid.Column>
				<h1 style={{ marginTop: "1em" }}>
          {operation.id ? "Edit Operation" : "Add New Operation"}
        </h1>
        <Form onSubmit={handleSubmit(onSubmit)} loading={loading}>
            <Form.Field >
              <label htmlFor="concept">
                Concept
                <input
									{...register("concept", {
										required: true
									})}
                  id="concept"
                  name="concept"
                  type="text"
                  placeholder="Concept"
									defaultValue={operation.concept}
                />
              </label>
							{errors.concept?.type === 'required' && "Concept is required"}
            </Form.Field>
						<Form.Field >
              <label htmlFor="amount">
								Amount
                <input
									{...register("amount", {
										required: true,
										valueAsNumber: true
									})}
                  id="amount"
                  name="amount"
                  type="number"
                  placeholder="Amount"
									defaultValue={operation.amount}
                />
              </label>
							{errors.amount && "A valid amount is required"}
            </Form.Field>
						<Form.Field >
              <label htmlFor="date">
								Date
                <input
									{...register("date", {
										required: true,
										valueAsDate: true
									})}
                  id="date"
                  name="date"
                  type="date"
                  placeholder="date"
									defaultValue={operation.date}
                />
              </label>
							{errors.date && 'A valid date is required'}
            </Form.Field>
						<Form.Field >
						{operation.id &&
              <label htmlFor="operationType">
								Operation Type: {operation.operationType === 1 ? 'Entry' : 'Expense'}
              </label>
						}
						{!operation.id &&
						<select className="" {...register("operationType", {
										required: true
									})}
									id="operationType"
                  name="operationType"
									defaultValue={operation.operationType}
									onChange={(e) => {onChangeDate(e)}}
									>
								<option value="">Operation type</option>
								<option value="1">Entry</option>
								<option value="2">Expanse</option>
							</select>
						}
						{operation.id && errors.operationType?.type === 'required' && 'Operation type is required'}
            </Form.Field>
          <Button primary type="submit">
            Save
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default OperationForm;