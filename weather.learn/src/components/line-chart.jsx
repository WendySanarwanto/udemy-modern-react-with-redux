
import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesReferenceLine, SparklinesLine } from 'react-sparklines';

function average(data){
    return _.round(_.sum(data)/data.length);
}

export default (props)=>{
    return (
        <div>
            <Sparklines svgHeight={props.height} 
                        svgWidth={props.width} 
                        data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>       
            <div>
                {average(props.data)} {props.units}
            </div>
        </div> 
    );
};