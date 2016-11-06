import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render() {
        if (!this.props.book){
            return (
                <div>Select a book in the book list panel.</div>
            );
        }
        return (
            <div className="book-detail">
                <div className="title"><h3>{this.props.book.title}</h3></div>
                <div className="author">Author: {this.props.book.author}</div>
                <div className="genre">Genre: {this.props.book.genre}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);