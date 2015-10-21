import React from 'react';
import ReactDOM from 'react-dom';

const Counterizer = React.createClass({
    render: function() {
        const { count, name, onIncrementCounter } = this.props;

        return (
            <div className="tussi">
                {count}
                {name}

                <button
                    onClick={onIncrementCounter}>
                    Nappula!
                </button>
            </div>
        );
    }
});

export default Counterizer;
