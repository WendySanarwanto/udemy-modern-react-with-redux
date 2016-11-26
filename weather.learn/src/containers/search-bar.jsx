import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions'; 

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        const term = event.target.value;
        this.setState({term});
    }

    onFormSubmit(event){
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }

    render() {
        return (
            <form id="search-bar" onSubmit={this.onFormSubmit} className="input-group">
                <span id="search-bar-icon" className="input-group-addon" >
                    <i className="glyphicon glyphicon-search"></i>
                </span>
                <input id="search-bar-input" 
                        className="form-control" 
                        placeholder="Get a five-day forecast in your favorite cities" 
                        aria-describedby="search-button"
                        value={this.state.term}
                        onChange={this.onInputChange}/>                
                <span id="search-bar-submit" className="input-group-btn">
                    <button type="submit" id="search-button" className="btn btn-secondary">
                        Search
                    </button>
                </span>
            </form>      
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);