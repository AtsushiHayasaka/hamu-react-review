import React, { useReducer, useEffect } from 'react';
import reducer from '../reducers';
import EventForm from './EventForm';
import Events from './Events.js';
import AppContext from '../contexts/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import OperationLogs from './OperationLogs';

const App = () => {
  const initialState = {
    events: [],
    operationLogs: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log({ state });
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default App;
