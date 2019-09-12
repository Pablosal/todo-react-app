import React from 'react';
const Item = props => {
  const getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: props.todo.completed ? 'line-through' : 'none'
    };
  };

  return (
    <div style={getStyle()}>
      <p>
        <input
          type='checkbox'
          onChange={props.markComplete.bind(this, props.todo.id)}
        />
        {''}
        {props.todo.title}
        <button
          onClick={props.delTodo.bind(this, props.todo.id)}
          style={btnStyle}
        >
          X
        </button>
      </p>
    </div>
  );
};
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
};
export default Item;
