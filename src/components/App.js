import React, { useReducer, useEffect } from 'react';
import reducer from '../reducers';
import EventForm from './EventForm';
import Events from './Events.js';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const initialEvents = [];
  const [state, dispatch] = useReducer(reducer, initialEvents);

  useEffect(() => {
    console.log({ state });
  }, [state]);

  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
