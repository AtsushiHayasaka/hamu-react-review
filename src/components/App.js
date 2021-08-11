import React, { useReducer, useEffect } from 'react';
import reducer from '../reducers';
import EventForm from './EventForm';
import Events from './Events.js';
import AppContext from '../contexts/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

console.log({ AppContext });

const App = () => {
  const initialEvents = [];
  const [state, dispatch] = useReducer(reducer, initialEvents);

  useEffect(() => {
    console.log({ state });
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
};

export default App;
