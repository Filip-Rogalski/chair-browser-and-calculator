import React from 'react';
import ReactDOM from 'react-dom';
import OrderCalculator from './OrderCalculator';
import ChairBrowser from './ChairBrowser';

class App extends React.Component {
    constructor(){
        super();
        this.addChairToChairData = this.addChairToChairData.bind(this);
        this.clearList = this.clearList.bind(this);
        this.state = ({chairData: []});
        this.id = 0;
        this.indexList = [];
    }
    
    addChairToChairData(e) {
        if (this.indexList.indexOf(e.target.id) < 0) {
            this.id +=1
            this.indexList.push(e.target.id);
            this.setState({chairData: this.state.chairData.concat([[this.id, e.target.innerHTML, e.target.dataset.price]])});
            /* e.target.style.backgroundColor = 'yellow'; */
        } else {
            console.log('już wybrano');
            /* ewentualnie usuwanie */
        }
    }
    
    clearList(e) {
        this.setState({chairData: []});
    } 
    
    render() {
        return (
            <div>
                <ChairBrowser handler={this.addChairToChairData} clearList={this.clearList}/>
                <OrderCalculator chairData={this.state.chairData}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));