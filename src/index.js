import React from 'react';
import ReactDOM from 'react-dom';
import OrderCalculator from './OrderCalculator';
import ChairBrowser from './ChairBrowser';

class App extends React.Component {
    constructor(){
        super();
        this.addChairToChairData = this.addChairToChairData.bind(this);
        this.state = ({chairData: []});
        this.id = 0;
    }
  
    /*
    handleResultList(e) {
        this.state.chairData.map(item => {
            if (item[1] === e.target.innerHTML) {
                console.log('obecny');
                this.removeChairFromChairData(e);
            } else {
                console.log('nowy');
                this.addChairToChairData(e);
            }
        });
    }
    
    removeChairFromChairData(e) {
        this.state.chairData.map(item => {
            if (item[1] !== e.target.innerHTML) return item});
    }
    */
    
    addChairToChairData(e) {
        this.id += 1;
        this.setState({chairData: this.state.chairData.concat([[this.id, e.target.innerHTML, e.target.dataset.price]])});
        e.target.style.backgroundColor = 'yellow';
    }
    
    render() {
        return (
            <div>
                <ChairBrowser handler={this.addChairToChairData}/>
                <OrderCalculator chairData={this.state.chairData}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));