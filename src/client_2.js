import './client.css';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Router, Route, Link } from 'react-router';

function getTussit(){
    return axios.get('/api/tussi').then((response) => {
    return response.data;
});
}

const HelloWorld = React.createClass({
    render: function() {
        return (
            <div>
                <Link to={`/hello/${this.props.name}`}>
                    Helloo {this.props.name}
                </Link>
            </div>
        );
    }
});

const HelloWorldApp = React.createClass({
    getInitialState: function() {
        return {
            count: 0,
            names: []
        };
    },

    componentDidMount: function() {
        getTussit().then((data) => {
            this.setState({
                names: data
            });
        });
    },

    render: function() {
        const names = this.state.names;

        return (
            <div>
                <h1>hederi</h1>

                {names.map((name, key) =>
                    <HelloWorld key={key} name={name}/>
                )}

                <Counterizer
                    count={this.state.count}
                    onIncrementCounter={this.incrementCounter}/>
                <Counter count={this.state.count}/>

                    {this.props.children}
            </div>
        );
    },

    incrementCounter: function () {
        this.setState({
            count: this.state.count + 1
        });
    }
});

const Counterizer = React.createClass({
    render: function() {
        return (
            <div className="tussi">
                {this.props.count}

                <button
                    onClick={this.props.onIncrementCounter}>
                    Nappulaa!
                </button>
            </div>
        );
    }
});
class Counter extends React.Component {
    render() {
        return (
            <div className="megacounter">
            {this.props.count}
            </div>
            );
    }
}

const Greeter = React.createClass({
    render: function () {
    console.log(this.props);

    const { name } = this.props.params;
        return (
            <h2>
                Moikka {name}
            </h2>
        );
    }
});

const routes = (
    <Router>
        <Route path="/" component={HelloWorldApp}>
        <Route path="/hello/:name" component={Greeter}></Route>
        </Route>
    </Router>
    );

ReactDOM.render(
    routes,
    document.getElementById('app')
);
