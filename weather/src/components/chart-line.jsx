import React, {Component} from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

class ChartLine extends Component {
    render() {
        return (
            <div className="chart-line">
                <Sparklines data={this.props.data}
                            svgWidth={this.props.width} 
                            svgHeight={this.props.height} >
                    <SparklinesLine color={this.props.color} />
                    <SparklinesReferenceLine type="mean"/>
                </Sparklines>
                <div className="chart-line-title">{this.props.title}</div>
            </div>
        );
    }
}

export default ChartLine;