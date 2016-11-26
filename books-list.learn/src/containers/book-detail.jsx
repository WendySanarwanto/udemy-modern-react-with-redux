import React, {Component} from 'react'
import { connect } from 'react-redux';

class BookDetail extends Component {
    render () {
        const book = this.props.book;
        if (!book){
            return <div>Select a book to get starter.</div>
        }

        return (
            <div>                
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
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