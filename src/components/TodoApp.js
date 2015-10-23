import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

const TodoApp = React.createClass({
  getInitialState: function() {
    return {items: ["Uncle Benssiä", "Soijamaitoa", "Soijanakkeja", ], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    const nextItems = this.state.items.concat([this.state.text]);
    const nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <h1>Simppeli ToDo</h1>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Lisää #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});
export default TodoApp;
