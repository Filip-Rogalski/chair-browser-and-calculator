import React from 'react';
import './Results.css';

class Results extends React.Component {

    
    
  render() {
    return (
        <div>    
            <div className="small-header"><h1>Fotele spełniające Twoje kryteria</h1></div>
            <div className="results-container">
            <div>
                <ul>
                    {this.props.chairData.map(item => (
                      <li key={item.id} id={item.id} onClick={this.props.handler} data-price={item.price}>{item.type}</li>
                    ))}
                </ul>
            </div>
            </div>
        </div>
    );
  }
}

export default Results;
