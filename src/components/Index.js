import React from 'react';
import ReactDOM from 'react-dom';
import Counterizer from './Counterizer';
import HelloWorld from './HelloWorld';
import Counter from './Counter';

const Index = React.createClass({

    render: function() {

        const { count, names, onIncrementCounter } = this.props;

        return (

            <div>

                {names.map((name, i) =>
                    <HelloWorld key={i} name={name}/>
                )}

                <Counterizer
                    {...this.props}
                />

                <Counter count={count}/>

            </div>
        );
    }

});
export default Index;
