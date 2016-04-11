'use strict';
import './application.scss';

import React from 'react';
import {render} from 'react-dom';
import moment from 'moment';

import Analog from './Analog';
import Digital from './Digital';


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
        //return <Display time={this.state.time}/>
        //return <Analog time={this.state.time} />

        const time = this.state.time;

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

        return (
            <div className={'timer ' + timeOfDay} onClick={() => window.location.reload()}>
                <div className="qqq">
                    <Analog time={this.state.time} />
                    <Digital time={this.state.time} />
                </div>
                <Progress minute={minute}/>
            </div>
        );
    }
}


const Progress = ({minute}) => {
    const width = (Math.round(100 * minute / 60 ) + '%');
    return <div className="progress" style={{width: width}}></div>
};


render(<Timer />, document.getElementById('root'));
