import React from 'react';
import './Results.css';

class Results extends React.Component {

  render() {
    return (
      <div className="results-container">
        <div>
            <ul>
        {this.props.chairData.map(item => (
          <li key={'results' + item.type} onClick={this.props.handler} data-price={item.price}>{item.type}</li>
        ))}
            </ul>
        </div>
      </div>
    );
  }
}

export default Results;
