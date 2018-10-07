import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData }  from '../actions';

class EmailList extends Component {
    componentDidMount(){
        this.props.fetchData();
    }

    renderDataList(){
        const { dataList } = this.props;
        console.log(`[DEBUG] - <EmailList.renderDataList> dataList: \n`, dataList);
        return _.map(dataList, (data) =>{
            return (
                <li className="list-group-item" key={data.id}>
                    <span>{data.name}</span>
                    <span className="pull-xs-right">
                        <a href={`mailTo:${data.email}`}>{data.email}</a>                        
                    </span>
                </li>
            );
        });
    }
    
    render() {
        return(
            <ul className="list-group">
                {this.renderDataList()}                
            </ul>
        );
    }
}

function mapStateToProps({dataList}){
    return {
        dataList
    };
}

export default connect(mapStateToProps, { fetchData })(EmailList);
