import React from 'react';
import './KeywordsPanel.css';


class KeywordsPanel extends React.Component {
    render() {
        return (
            <div className="keywords-container">{this.props.chairData.map(item => (<span key={item.type}>{item.keywords}</span>))}</div>
        );
    }
}


export default KeywordsPanel;