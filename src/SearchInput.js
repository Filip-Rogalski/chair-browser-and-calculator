import React from 'react';
import './SearchInput.css';

class SearchInput extends React.Component {

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input
            onChange={this.props.textChange} placeholder="Wybierz fotele do porównania"
          />
        </div>
      </div>
    );
  }
}

export default SearchInput;
