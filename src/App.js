import React, { useEffect, useState } from 'react';

const App = (props) => {
  const [state, setState] = useState(props);

  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate');
  });

  useEffect(() => {
    console.log('This is like componentDidMount');
  }, []);

  useEffect(() => {
    console.log('This is name back only');
  }, [state.name]);

  console.log({ ...state });
  return (
    <>
      <p>
        現在の{state.name}は、{state.price}円です
      </p>
      <button onClick={() => setState({ ...state, price: state.price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: state.price - 1 })}>
        -1
      </button>
      <button onClick={() => setState(props)}>Reset</button>
      <input
        onChange={(e) => setState({ ...state, name: e.target.value })}
        value={state.name}
      />
    </>
  );
};

App.defaultProps = {
  name: '',
  price: 1000,
};

export default App;
