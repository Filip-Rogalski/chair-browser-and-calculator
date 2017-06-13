import React from 'react';
import SearchInput from './SearchInput';
import Results from './Results';
import KeywordsPanel from './KeywordsPanel';
import filterChairs from './filterChairs';
import './index.css';

class ChairBrowser extends React.Component {
    
    constructor() {
        super();
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.state = {
            filteredChairs: filterChairs('')
        };
    }

    handleSearchChange(e) {
        this.setState({
            filteredChairs: filterChairs(e.target.value)
        });
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <div className="section-header">
                        <h1>Przeglądaj fotele</h1>
                    </div>
                    <SearchInput textChange={this.handleSearchChange}/>
                    <KeywordsPanel chairData={this.state.filteredChairs}/>
                    <Results chairData={this.state.filteredChairs} handler={this.props.handler}/>
                </div>
            </div>
        )
    }
}

export default ChairBrowser;