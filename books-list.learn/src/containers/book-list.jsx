import React, {Component} from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';

import { selectBook } from '../actions';

class BookList extends Component {
    renderList(){
        return this.props.books.map(book=>{
            return (
                <li className="list-group-item"
                    onClick={()=> this.props.selectBook(book)} 
                    key={book.title}>
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="book-list list-group col-md-4">
                {this.renderList()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    // Whatever is required will show up as props
    // inside of BookList
    return {
        books: state.books
    }
}

// Anything returned from this function will end up as props
// on the BookList container
const mapDispatchToProps = (dispatch) => {
    // Whatever selectBook is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList from a component to a container - it needs to know 
// about this new dispatch method, selectBook. Make it available 
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);