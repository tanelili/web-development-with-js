import './client.css';

// console.log('kvaak sanoo ankka!');

import React from 'react';
import ReactDom from 'react-dom';



const HelloWorld = React.createClass ({
    render: function () {
        return (
        <div>
            Hello {this.props.name}
        </div>
        );
    }
});

const Counterizer = React.createClass({
    getInitialState: function () {
        return {
            count: 0
        };
    },
// OnClickissä ei () koska syö palautuksen
    render: function() {
        return (
            <div className="tussi">
                {this.state.count}
                <button onClick={this.incrementCounter}>
                NAPPULA!</button>
            </div>
            );
    },

    incrementCounter: function(){
        this.setState({
            count: this.state.count+ 1
        });
    }
})

const HelloWorldApp = React.createClass({
    render: function () {
        const names = this.props.names;
        return (
            <div>
                <h1>Hederi</h1>
                {names.map(name =>
                <HelloWorld name={name}/>
                )}
                <Counterizer/>


            </div>
            );
    }
});

ReactDom.render(
    <HelloWorldApp names={['Tussi', 'Lussi', 'Lari']}/>,
    document.getElementById('app')
    );
