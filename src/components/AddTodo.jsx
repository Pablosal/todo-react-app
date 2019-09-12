import React, { Component } from 'react';
class AddTodo extends Component {
  state = {
    title: ''
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Add Todo...'
          style={{ flex: '10', padding: '5px' }}
          onChange={this.onChange}
          value={title}
        />
        <input
          type='submit'
          style={{ flex: 1 }}
          className='btn'
          value='Submit'
        />
      </form>
    );
  }
}

export default AddTodo;
