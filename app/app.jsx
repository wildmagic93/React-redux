import React, {useState} from 'react';
import {Reducer} from './store.js';
import ReactDOM from 'react-dom';

class App extends React.component{
    constructor(props) {
        super(props);
        const [state] = useState('unknown');
    };
    
    action() {
        const effect = {
            type: 'change',
            payload: 'vheqtjhtrj'
        };
        Reducer(this.state, effect);
    }

    

    render() {
        return (
        <div>
            
            <button onClick={this.action} style={{color: 'white'}}>Click</button>
            <h1 style={{color: 'white'}}>Hello {this.state}</h1>
        </div>
        );
    }
}
    
ReactDOM.render(<App />, document.getElementById("try"));