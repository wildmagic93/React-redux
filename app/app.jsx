import React, {ReactDOM, useState} from 'react';
import {Reducer} from './store.js';


class App extends React.component{
    constructor(props) {
        super(props);
        state = useState('unknown');
    };

    action() {
        effect = {
            type: 'change',
            payload: 'vheqtjhtrj'
        };
        Reducer(this.state, effect);
    }



    render() {
        return (
        <div>
            <button onClick={this.action}>Click</button>
            <h1 state={this.state}>Hello {this.state}</h1>
        </div>
        );
    }
}
    
ReactDOM.render(<App />, document.getElementById("try"));