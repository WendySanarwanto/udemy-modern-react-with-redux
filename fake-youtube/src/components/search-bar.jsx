import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const onSearchChanged = this.props.onSearchChanged;

        return (
            <div className="search-bar">
                <input 
                    placeholder="Search"                     
                    onChange={(e)=>onSearchChanged(e.target.value)}
                />
            </div>
        );
    }
}

export default SearchBar;