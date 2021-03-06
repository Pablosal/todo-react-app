import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/about';
// import uuid from 'uuid';
import Axios from 'axios';
import './App.css';
class App extends React.Component {
  state = {
    todos: []
  };
  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(
      res => this.setState({ todos: res.data })
    );
  }
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  delTodo = id => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };
  addTodo = title => {
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };
  render() {
    return (
      <Router>
        <div className='App'>
          <div className='container'></div>
          <Header />
          <Route
            exact
            path='/'
            render={props => (
              <Fragment>
                <AddTodo addTodo={this.addTodo} />
                <h1>App</h1>
                <Todos
                  delTodo={this.delTodo}
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                />
              </Fragment>
            )}
          ></Route>
          <Route path='/about' component={About}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
