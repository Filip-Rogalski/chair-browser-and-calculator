import React from 'react';
import ReactDOM from 'react-dom';
import OrderCalculator from './OrderCalculator';
import ChairBrowser from './ChairBrowser';

class App extends React.Component {
    constructor(){
        super();
        this.sendChairToCalculator = this.sendChairToCalculator.bind(this);
        this.state = ({chairData: []});
    }
    
    sendChairToCalculator(e) {
        this.setState({chairData: this.state.chairData.concat([[e.target.innerHTML, e.target.dataset.price]])});
        e.target.style.backgroundColor = 'yellow';
    }
    
    render() {
        return (
            <div>
                <ChairBrowser handler={this.sendChairToCalculator}/>
                <OrderCalculator chairData={this.state.chairData}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));