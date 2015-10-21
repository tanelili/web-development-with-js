import React from 'react';
import ReactDOM from 'react-dom';
import api from '../api';

'use strict';

var TodoList = React.createClass({
  displayName: 'TodoList',

  render: function render() {
    var createItem = function createItem(itemText, index) {
      return React.createElement(
        'li',
        { key: index + itemText },
        itemText
      );
    };
    return React.createElement(
      'ul',
      null,
      this.props.items.map(createItem)
    );
  }
});
var TodoApp = React.createClass({
  displayName: 'TodoApp',

  getInitialState: function getInitialState() {
    return { items: [], text: '' };
  },
  onChange: function onChange(e) {
    this.setState({ text: e.target.value });
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({ items: nextItems, text: nextText });
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h3',
        null,
        'TODO'
      ),
      React.createElement(TodoList, { items: this.state.items }),
      React.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        React.createElement('input', { onChange: this.onChange, value: this.state.text }),
        React.createElement(
          'button',
          null,
          'Add #' + (this.state.items.length + 1)
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(TodoApp, null));
/*
const HelloWorldApp = React.createClass({

    getInitialState: function() {
        return {
            count: 0,
            names: []
        };
    },

    componentDidMount: function() {
        api.getTussit().then((data) => {
            this.setState({
                names: data
            });
        });
    },

    render: function() {
        const names = this.state.names;

        return (
            <div>
                <h1>Hederi</h1>

                {this.props.children && React.cloneElement(
                    this.props.children,
                    {
                        names: this.state.names,
                        count: this.state.count,
                        onIncrementCounter: this.incrementCounter
                    }
                )}
            </div>
        );
    },

    incrementCounter: function() {
        this.setState({
            count: this.state.count + 1
        });
    }
});

export default HelloWorldApp;
*/
