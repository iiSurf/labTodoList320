import React, { useState } from "react";
import { ACTIONS } from "./App";

function Todo({ todo, dispatch }) {
  const [editVal, setEditVal] = useState(todo.name);

  const handleSave = () => {
    dispatch({
      type: ACTIONS.SAVE_TODO,
      payload: { id: todo.id, name: editVal },
    });
  };

  const renderEditView = () => (
    <>
      <input
        type="text"
        value={editVal}
        onChange={(e) => setEditVal(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </>
  );

  const renderDefaultView = () => (
    <div>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      />
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>

      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>

      <button
        onClick={() =>
          dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: todo.id } })
        }
      >
        Edit
      </button>

      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
        disabled={!todo.complete}
      >
        Delete
      </button>
    </div>
  );

  return (
    <div className="todo">
      {todo.editing ? renderEditView() : renderDefaultView()}
    </div>
  );
}

export default Todo;
