import { react, useReducer, useState } from 'react';
import './App.css';
// npm install react-router-dom

const ACTIONS = {

};

function reducer(state, action) {

};

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  function handleSubmit() {

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />;
      </form>;
    </>
  )
};

export default App;
