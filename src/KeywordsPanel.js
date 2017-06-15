import React from 'react';
import './KeywordsPanel.css';

class KeywordsPanel extends React.Component {    
    render() {
        return (
            <div>
                <div className="small-header"><h1>Kategorie</h1></div>
                <div className="keywords-container"><ul>{this.props.categoryList.map(item => (
                <li key={item}>{item} </li>))}</ul></div>
            </div>
        );
    }
}

export default KeywordsPanel;