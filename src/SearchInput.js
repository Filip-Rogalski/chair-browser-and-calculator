import React from 'react';
import './SearchInput.css';

class SearchInput extends React.Component {
  render() {
    return (
      <div className="component-search-input">
        <div>
            <div className="small-header"><h1>Wybierz fotel do porównania</h1></div>
          <input
            onChange={this.props.textChange} placeholder="Przeszukuj fotele (po nazwie lub kategorii)"
          />
        </div>
      </div>
    );
  }
}

export default SearchInput;
