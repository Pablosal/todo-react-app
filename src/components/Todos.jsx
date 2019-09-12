import React from 'react';
import Item from './Item';
class Todos extends React.Component {
  render() {
    return this.props.todos.map(todo => (
      <Item
        delTodo={this.props.delTodo}
        markComplete={this.props.markComplete}
        key={todo.id}
        todo={todo}
      />
    ));
  }
}

export default Todos;
