import React from 'react';
import './EmojiResultRow.css';

class EmojiResultsRow extends React.Component {
  render() {
    return (
      <div className="component-emoji-result-row">
        <img
          alt={this.props.type}
          src={src}
        />
        <span
          className="title"
        >
          {this.props.type}
        </span>
      </div>
    );
  }
}
EmojiResultsRow.propTypes = {
  title: React.PropTypes.string,
  symbol: React.PropTypes.string,
};
export default EmojiResultsRow;
