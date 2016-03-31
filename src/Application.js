'use strict';
import './application.scss';

import React from 'react';
import {render} from 'react-dom';
import moment from 'moment';


class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment(),
            blink: false
        };
    }
    tick() {
        this.setState({
            time: moment(),
            //blink: !this.state.blink
        });
    }
    componentDidMount() {
        setInterval(() => { this.tick() }, 500); // Call a method on the mixin
    }
    render() {
        const hour = Number(this.state.time.format('HH'));
        const isMorning = (hour >= 6 && hour < 7);
        const isDay = (hour >= 7 && hour <= 19);
        const isEvening = (hour > 19 && hour < 20);
        return (
        <div className={'timer ' + (isMorning?'morning':'') + (isDay?'day':'night') + (isEvening?'evening':'')}>
                <time className={(this.state.blink?'on':'off')}>{this.state.time.format('h')}</time>
                <Progress minute={this.state.time.format('m')}/>
            </div>
        );
    }
}
const Progress = ({minute}) => {
    const width = (Math.round(100 * minute / 60 ) + '%');
    return <div className="progress" style={{width: width}}></div>
};


render(<Timer />, document.getElementById('root'));
