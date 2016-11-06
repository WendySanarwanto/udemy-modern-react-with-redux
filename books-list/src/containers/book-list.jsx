import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectBook} from '../actions';

class BookList extends Component {
    renderBookItems(){
        return this.props.books.map((book)=>{
            return (
                <li className="list-group-item" 
                    key={book.title}
                    onClick={()=>this.props.selectBook(book)}>
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-md-4">
                {this.renderBookItems()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);