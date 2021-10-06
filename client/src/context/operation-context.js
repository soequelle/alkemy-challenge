import React, { useReducer, createContext } from 'react';

export const OperationContext = createContext();

const initialState = {
  operations: [],
  operation: {},
  message: {},
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_OPERATIONS': {
      return {
        ...state,
        operations: action.payload,
      };
    }
    default:
      throw new Error();
  }
}

export const OperationContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { children } = props;

  return (
    <OperationContext.Provider value={[state, dispatch]}>
      {children}
    </OperationContext.Provider>
  );
};