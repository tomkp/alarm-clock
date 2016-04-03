'use strict';
import './application.scss';

import React from 'react';
import {render} from 'react-dom';
import moment from 'moment';


class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment()
        };
    }
    tick() {
        this.setState({
            //time: moment('06:15', 'HH:mm')
            time: moment()
        });
    }
    componentDidMount() {
        setInterval(() => { this.tick() }, 500); // Call a method on the mixin
    }
    render() {
        return <Display time={this.state.time}/>
    }
}

const Display = ({time}) => {

    const hour24 = Number(time.format('HH'));
    const hour12 = Number(time.format('h'));
    const minute = time.format('m');

    const isMorning = (hour24 >= 6 && hour24 < 7);
    const isDay = (hour24 >= 7 && hour24 < 19);
    const isEvening = (hour24 >= 19 && hour24 < 20);

    const timeOfDay =
        (isMorning ? 'morning ' :
            (isDay ? 'day ' :
                (isEvening ? 'evening ' : 'night ')));

    //console.log(`${hour24} is ${timeOfDay}`);

    return (
        <div className={'timer ' + timeOfDay}>
            <time>{hour12}</time>
            <Progress minute={minute}/>
        </div>
    );
};


const Progress = ({minute}) => {
    const width = (Math.round(100 * minute / 60 ) + '%');
    return <div className="progress" style={{width: width}}></div>
};


render(<Timer />, document.getElementById('root'));
