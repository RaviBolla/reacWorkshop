import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import * as serviceWorker from './serviceWorker';

const salutation = "Ms";

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "", counter: 1};
    }
    update(e) {
        this.setState({name:
            e.target.value, counter: this.state.counter+1});
    }
    render() {
        return (<div>
            <input onKeyUp={(e) => this.update(e)} type="text" />
            <h1>Hello {this.state.name}!!</h1>
            <p>Incremented {this.state.counter}</p>
        </div>)
    }
}


ReactDOM.render(<Clock />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
