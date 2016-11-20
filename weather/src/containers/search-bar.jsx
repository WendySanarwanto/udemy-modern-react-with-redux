import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {fetchWeather} from '../actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { searchTerm: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSearchTerm = this.onSearchTerm.bind(this);
    }

    onSearchTerm(event) {
        event.preventDefault();
        const searchTerm = this.state.searchTerm;
        this.props.fetchWeather(searchTerm);
        this.setState({ searchTerm: '' });
    }

    onInputChange(event) {
        let searchTerm = event.target.value;
        this.setState({searchTerm});
    }

    render() {
        return (
            <form className="input-group search-bar" onSubmit={this.onSearchTerm}>
                <div className="input-group-addon">
                    <i className="glyphicon glyphicon-search"></i>
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a city"
                    aria-describedby="input-group-addon"
                    value={this.state.searchTerm}
                    onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchWeather
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);