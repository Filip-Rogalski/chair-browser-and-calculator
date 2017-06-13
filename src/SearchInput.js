import React from 'react';
import './SearchInput.css';

class SearchInput extends React.Component {

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input
            onChange={this.props.textChange}
          />
        </div>
      </div>
    );
  }
}

SearchInput.propTypes = {
  textChange: React.PropTypes.func,
};

export default SearchInput;
