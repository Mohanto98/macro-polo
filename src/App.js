import { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {

        super(props);
        this.state = {
            isToggleOn : false,
            isHeaderChange : false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.setState(state => ({
            isToggleOn : !state.isToggleOn,
            isHeaderChange : !state.isHeaderChange
        }));
    }

    render () {
        return (
            <div className='App'>
                <h1 id='macro-polo'>{this.state.isHeaderChange ? 'Polo' : "Macro"}</h1>
                <button id='macro-polo-toggler' onClick={this.handleClick}>{this.state.isToggleOn ? "Macro" : "Polo"}</button>
            </div>
        );
    }

}

export default App;
