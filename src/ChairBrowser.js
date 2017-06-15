import React from 'react';
import SearchInput from './SearchInput';
import Results from './Results';
import KeywordsPanel from './KeywordsPanel';
import filterChairs from './filterChairs';
import setCategoryList from './setCategoryList';
import './index.css';

class ChairBrowser extends React.Component {
    
    constructor() {
        super();
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.state = {
            filteredChairs: filterChairs(''), categoryList: ['livingroom', 'garden', 'office', 'children'].sort()
        };
    }
    
    handleSearchChange(e) {
        this.setState({
            filteredChairs: filterChairs(e.target.value)
        }, function(){
            this.setState({
                categoryList: setCategoryList(this.state.filteredChairs)
            })
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
                    <KeywordsPanel categoryList={this.state.categoryList}/>
                    <Results chairData={this.state.filteredChairs} handler={this.props.handler}/>
                    <button onClick={this.props.clearList}>Wyczyść listę</button>
                </div>
            </div>
        )
    }
}

export default ChairBrowser;