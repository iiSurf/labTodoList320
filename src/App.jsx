import { react, useReducer, useState } from 'react';
import './App.css';
// npm install react-router-dom

const ACTIONS = {
  ADD_TODO : 'add-todo',
  TOGGLE_TODO: 'toggle-todo'
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS>ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      break;
  
    default:
      break;
  }
};

function newTodo(name) {
  return {id: Date.now(), name: name, complete: false}
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}});
    setName('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
      </form>
      {todos.map(todo => {
        <Todo key={todos.id} todo={todo} />
      })}
    </>
  )
};

export default App;
