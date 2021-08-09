import React, { useState } from 'react';

const App = (props) => {
  const [state, setState] = useState(props);
  console.log({ setState });

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
