import React from 'react';

const TodoList = React.createClass({
  render: function() {
    const createItem = function(itemText, index) {
      return <li key={index + itemText}>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});

export default TodoList;
