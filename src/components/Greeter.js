import React from 'react';
import ReactDOM from 'react-dom';

const Greeter = React.createClass({
    render: function() {
        const { name } = this.props.params;

        return (
            <h2>
                Hellou {name}
            </h2>
        );
    }
});

export default Greeter;
